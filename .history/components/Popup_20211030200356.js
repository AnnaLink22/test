export class Popup {
  constructor() {
    this._popup = document.querySelector('popup');
    this._img = this._popup.querySelector('.popup__pic');
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
  }


  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-btn')) {
        this.closePopup();
      }
    });
  }
}
