import { Popup } from "./Popup.js";

export class Pic {
  constructor(data, userId, chosen) {
    this._pic = data;
    this._title = data.title;
    this._id = data.id;
    this._albumId = data.albumId;
    this._thumbnailUrl = data.thumbnailUrl;
    this._url = data.url;
    this._popup = new Popup();
    this._userId = userId;
    this.favorite = data.favorite;
    this.chosen = chosen;
  }


  _getTemplate() {
    const picElement = document
      .querySelector('.pics__template').content
      .querySelector('.pic')
      .cloneNode(true);
    return picElement;
  };

  _handleSaveDeletePic() {
    const initialChosenPics = JSON.parse(localStorage.getItem('chosen')) ?? [];
    const filteredChosenPics = initialChosenPics.filter(pic => pic.id !== this._id);

    if (initialChosenPics.length === filteredChosenPics.length) {
        filteredChosenPics.push(this._pic);
    }
    if (this.chosen) {
      this._element.remove();
    }
    localStorage.setItem('chosen', JSON.stringify(filteredChosenPics));
  };

  _toggleLike() {
    if (this._picStar.classList.contains('pic__star_active')) {
      this._picStar.classList.remove('pic__star_active')
    } else {
      this._picStar.classList.add('pic__star_active');
    }
    this._handleSaveDeletePic();
  }

  _handleOpen() {
    this._popup.openPopup(this._url, this._title);
  }

  _handleClose() {
    this._popup.closePopup();
  }

  _addPicTitle() {
    this._picTitle = document.createElement('span');
    this._picTitle.classList.add('pic__name');
    if (this.chosen) {
      this._picTitle.classList.add('pic__name_type_chosen');
    }
    this._picTitle.textContent = this._title;
    this._element.append(this._picTitle);
  }

  _removePicTitle() {
    this._picTitle.remove();
  }

  _setEventListeners() {
    this._popup.setEventListeners();
    this._element.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('pic__star')) {
        this._toggleLike();
      } else {
        this._handleOpen();
      }
    });
    if (!this.chosen) {
      this._element.addEventListener('mouseenter', () => {
        this._addPicTitle();
      });
      this._element.addEventListener('mouseleave', () => {
        this._removePicTitle();
      });
    }
  };

  generatePic() {
    this._element = this._getTemplate();
    this._picStar = this._element.querySelector('.pic__star');
    if (this.favorite || this.chosen) {
      this._picStar.classList.add('pic__star_active');
    }
    this._setEventListeners();
    const img = this._element.querySelector('.pic__img');
    img.src = this._thumbnailUrl;
    img.alt = this._title;
    return this._element;
  };

}
