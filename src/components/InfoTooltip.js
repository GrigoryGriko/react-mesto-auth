import React from 'react';


function InfoTooltip(props) {
  //popup_opened
  return (
    <div className="popup popup_info-tootip">
      <form className="popup__container">
        <button className="popup__button-close" type="button" onClick={props.onClose}></button>

        <div className="popup__content">
          <h2 className="popup__header">Информация</h2>
        </div>
          
      </form>
    </div>
  )
}

export default InfoTooltip;