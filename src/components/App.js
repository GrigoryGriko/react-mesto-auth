import React, { useState } from 'react';
import { Route, Routes, Redirect } from "react-router-dom";

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

import Header from './Header.js';
import Main from './Main.js';
import Login from './Login.js';
import Register from './Register.js';

import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';
import ProtectedRoute from './ProtectedRoute.js';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  
  const [selectedCard, setSelectedCard] = useState({});

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  

  React.useEffect(() => {
    Promise.all([api.getInitCards(), api.getInitUserData()])
    .then(([cards, user]) => {
      setCurrentUser(user);

      setCards(cards);
    })
    .catch((err) => {
      console.log(`Ошибка загрузки данных пользователя ${err}`);
    });
  }, [])

  function handleCardClick(card) {
    setSelectedCard(card);
  }


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
  
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards( (cards) => cards.map((item) => ((item._id === card._id) ? newCard : item)) );
    })
    .catch(err => console.log(err));
  }

  function handelCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
      setCards( (cards) => cards.filter((item) => (item._id !== card._id)) );
    })
    .catch(err => console.log(err));
  }

  function handleUpdateUser({name, about}) {
    api.editDataUser({nameInput: name, jobInput: about})
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleUpdateAvatar(avatar) {
    api.updateAvatar(avatar)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleAddPlaceSubmit({name, link}) {
    api.addCard({name, link})
      .then((newCard) => {
        closeAllPopups();
        setCards([newCard, ...cards]);
      })
      .catch(err => console.log(err));
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false); 
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  let loggedIn = false;

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
            <Header />
            <Routes>
              <ProtectedRoute
                exact
                path="/"
                component={Main}
                loggedIn={loggedIn}

                onEditProfile={handleEditProfileClick} 
                onAddPlace={handleAddPlaceClick} 
                onEditAvatar={handleEditAvatarClick} 
                onCardClick={handleCardClick} 
                onCardLike={handleCardLike} 
                onCardDelete={handelCardDelete}
                cards={cards}
              >
                

                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
              </ProtectedRoute>
              <Route path='/sign-up'>
                <Login />
              </Route>
              <Route path='/sign-in'>
                <Register />
              </Route>

              <Route>
                {loggedIn ? <Redirect to="/" /> : <Redirect to="sign-up" />}
              </Route>
            </Routes>

            <EditProfilePopup 
              isOpen={isEditProfilePopupOpen} 
              onClose={closeAllPopups} 
              onUpdateUser={handleUpdateUser}
            ></EditProfilePopup>

            <AddPlacePopup
              onAddPlace={handleAddPlaceSubmit}
              isOpen={isAddPlacePopupOpen} 
              onClose={closeAllPopups} 
              cards={cards}
            ></AddPlacePopup>

            <EditAvatarPopup
              onUpdateAvatar={handleUpdateAvatar}
              isOpen={isEditAvatarPopupOpen} 
              onClose={closeAllPopups} 
            />
          </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;