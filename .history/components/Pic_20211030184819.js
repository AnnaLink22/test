export class Pic {
  constructor(data) {
    this._pic = data;
    this._title = data.title;
    this._id = data.id;
    this._albumId = data.albumId;
    this._thumbnailUrl = data.thumbnailUrl;
    this._url = data.url;
  }


  _getTemplate() {
    const albumElement = document
      .querySelector('.album__template').content
      .querySelector('.album')
      .cloneNode(true);

    return albumElement;
  };

  _handleOpen() {

  }

  _handleClose() {

  }

  _setEventListeners() {
    const plusBtn = this._element.querySelector('.album__plus');
    plusBtn.addEventListener('click', () => {
      if (plusBtn.classList.contains('album__plus_opened')) {
        this._handleClose();
        plusBtn.classList.remove('album__plus_opened');
      } else {
        this._handleOpen();
        plusBtn.classList.add('album__plus_opened');
      }
    });
  };

  generateAlbum() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.album__name').textContent = this._title;
    return this._element;
  };

}
