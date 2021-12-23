export class User {
  constructor(user, api, userSelector, handleOpenAlbums, handleCloseAlbums) {
    this._user = user;
    this._name = user.name;
    this._likes = user.likes;
    this._id = user._id;
    this._handleOpenAlbums = handleOpenAlbums;
    this._handleCloseAlbums = handleCloseAlbums;
    this._userSelector = userSelector;
    this._api = api;
  }


  _getTemplate() {
    const userElement = document
      .querySelector(this._userSelector).content
      .querySelector('.user')
      .cloneNode(true);

    return userElement;
  };

  _handleOpen() {

  }


  _handleClose() {

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

}
