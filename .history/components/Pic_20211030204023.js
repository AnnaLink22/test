import { Popup } from "./Popup.js";

export class Pic {
  constructor(data) {
    this._pic = data;
    this._title = data.title;
    this._id = data.id;
    this._albumId = data.albumId;
    this._thumbnailUrl = data.thumbnailUrl;
    this._url = data.url;
    this._popup = new Popup();
  }


  _getTemplate() {
    const picElement = document
      .querySelector('.pics__template').content
      .querySelector('.pic')
      .cloneNode(true);

    return picElement;
  };

  _handleOpen() {
    this._popup.setEventListeners();
    this._popup.openPopup(this._url, this._title);
  }

  _handleClose() {
    this._popup.closePopup();
  }

  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._handleOpen();
    });
  };

  generatePic() {
    this._element = this._getTemplate();
    this._setEventListeners();
    // this._element.querySelector('.pic__name').textContent = this._title;
    const img = this._element.querySelector('.pic__img');
    img.src = this._thumbnailUrl;
    img.alt = this._title;
    return this._element;
  };

}
