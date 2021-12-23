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
    const userElement = document
      .querySelector(this._userSelector).content
      .querySelector('.user')
      .cloneNode(true);

    return userElement;
  };

  _handleOpen() {
    this._handleOpenAlbums(this._id);
  }


  _handleClose() {
    this.handleCloseAlbums();
  }

  _setEventListeners() {
    const plusBtn = this._element.querySelector('.user__plus');
    plusBtn.addEventListener('click', () => {
      if (plusBtn.classList.contains('user__plus_active')) {
        this._handleClose();
        plusBtn.classList.remove('user__plus_active');
      } else {
        this._handleOpen();
        plusBtn.classList.add('user__plus_active');
      }
    });
  };

  generateUser() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.user__name').textContent = this._name;
    return this._element;
  };

}
