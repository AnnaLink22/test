import { Album } from "./Album.js";

export class User {
  constructor(user, api) {
    this._user = user;
    this._name = user.name;
    this._userId = user.id;
    this._api = api;
  }


  _getTemplate() {
    const userElement = document
      .querySelector('.user__template').content
      .querySelector('.user')
      .cloneNode(true);

    return userElement;
  };

  _addAlbum(data) {
    const album = new Album(data);
    const albumElement = album.generateAlbum();
    return albumElement;
  };

  _handleOpen() {
    this._albumsContainer = document.createElement('ul');
    this._albumsContainer.classList.add('albums__list');
    this._api.getAlbums(this._userId)
    .then((data) => {
      console.log(data);
      // albums.map((item) => {
      //   this._albumsContainer.append(this._addAlbum(item));
      // })
    })
    .catch((err) => {console.log(err)});
  };


  _handleClose() {
    this._albumsContainer.remove();
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
