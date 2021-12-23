export class Album {
  constructor(album, albumSelector, handleOpenPics, handleClosePics) {
    this._album = album;
    this._title = album.title;
    this._id = album.id;
    this._userId = album.userId;
    this._handleOpenPics = handleOpenPics;
    this._handleClosePics = handleClosePics;
    this._albumSelector = albumSelector;
  }


  _getTemplate() {
    const albumElement = document
      .querySelector(this._albumSelector).content
      .querySelector('.album')
      .cloneNode(true);

    return albumElement;
  };

  _handleOpen() {
    this._handleOpenPics(this._userId);
  }


  _handleClose() {
    this.handleCloseAlbums();
  }

  _setEventListeners() {
    const plusBtn = this._element.querySelector('.album__plus');
    plusBtn.addEventListener('click', () => {
      if (plusBtn.classList.contains('album__plus_active')) {
        this._handleClose();
        plusBtn.classList.remove('album__plus_active');
      } else {
        this._handleOpen();
        plusBtn.classList.add('album__plus_active');
      }
    });
  };

  generateUser() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.album__name').textContent = this._title;
    return this._element;
  };

}
