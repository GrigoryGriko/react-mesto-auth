function InfoTooltip(props) {
  return (
    <div className={`popup popup_info-tootip ${(props.message !== '') ? 'popup_opened' : ''}`}>
      <form className="popup__container">
        <button className="popup__button-close" type="button" onClick={props.onClose}></button>

        <div className="popup__content">
          <div 
            className="popup__status-image" 
            /*style={{ 
              backgroundImage: `url(${(props.isError === false) ? '../images/success.svg' : '../images/error.svg'})` 
            }}*/
          ></div>

          <h2 className="popup__header">{props.message}</h2>
        </div>
          
      </form>
    </div>
  )
}

export default InfoTooltip;