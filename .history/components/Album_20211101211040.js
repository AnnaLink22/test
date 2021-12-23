import { Pic } from "./Pic.js";

export class Album {
  constructor(album, api, handleSaveDeletePic) {
    this._album = album;
    this._title = album.title;
    this._api = api;
    this._albumId = album.id;
    this._userId = album.userId;
    this._handleSaveDeletePic = handleSaveDeletePic;
  }


  _getTemplate() {
    const albumElement = document
      .querySelector('.album__template').content
      .querySelector('.album')
      .cloneNode(true);

    return albumElement;
  }

  _addPic(picture) {
    const pic = new Pic(picture, this._userId, this._handleSaveDeletePic);
    const picElement = pic.generatePic();
    return picElement;
  }

  _getChosenPictures() {
    return JSON.parse(localStorage.getItem('chosen')) ?? [];
  }

  _handleOpen() {
    this._picsContainer = document.createElement('ul');
    this._picsContainer.classList.add('pics__list');
    const pictures = this._api.getPics(this._albumId);
    const chosenPictures = this._getChosenPictures();
    console.log(chosenPictures);
    pictures
    .then(pictures => {
      pictures.forEach(picture => {
        const isFavorite = chosenPictures.some((pic) => pic.id === picture.id)

        picture.favorite = isFavorite;

        this._picsContainer.append(this._addPic(picture));
      })
      this._element.append(this._picsContainer);
    })
    .catch((err) => {console.log(err)});
  }

  _handleClose() {
    this._picsContainer.remove();
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
