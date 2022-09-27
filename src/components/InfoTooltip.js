import React from 'react';


function InfoTooltip(props) {
  return (
    <div className={`popup popup_info-tootip ${props.isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__container">
        <button className="popup__button-close" type="button" onClick={props.onClose}></button>

        <div className="popup__content">
          <p>{`${(props.statusAuth === 'success') ? 'Успешно' : 'Ошибка'}`}</p>
          <h2 className="popup__header">{props.message}</h2>
        </div>
          
      </form>
    </div>
  )
}

export default InfoTooltip;