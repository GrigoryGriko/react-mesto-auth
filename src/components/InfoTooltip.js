function InfoTooltip(props) {
  return (
    <div className={`popup popup_info-tootip ${(props.message !== '') ? 'popup_opened' : ''}`}>
      <form className="popup__container popup__container_properties_alert ">
        <button className="popup__button-close" type="button" onClick={props.onClose}></button>

        <div className="popup__content popup__content_properties_alert">
          <div 
            className="popup__status-image" 
            /*style={{ 
              backgroundImage: `url(${(props.isError === false) ? '../images/success.svg' : '../images/error.svg'})` 
            }}*/
          ></div>

          <h2 className="popup__header popup__header_properties_alert">{props.message}</h2>
        </div>
          
      </form>
    </div>
  )
}

export default InfoTooltip;