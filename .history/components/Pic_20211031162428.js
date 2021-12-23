import { Popup } from "./Popup.js";
// import { chosenPics } from "../scripts/index.js";

export class Pic {
  constructor(data, userId) {
    this._pic = data;
    this._title = data.title;
    this._id = data.id;
    this._albumId = data.albumId;
    this._thumbnailUrl = data.thumbnailUrl;
    this._url = data.url;
    this._popup = new Popup();
    this._userId = userId;
    this._chosenPics = [];
  }


  _getTemplate() {
    const picElement = document
      .querySelector('.pics__template').content
      .querySelector('.pic')
      .cloneNode(true);
    return picElement;
  };

  _checkIsLiked() {
    return this._likes.some(i => i === this._userId);
  }

  _toggleLike() {
    const picStar = this._element.querySelector('.pic__star');
    if (localStorage.getItem('chosen')) {
      const chosenPics = localStorage.getItem('chosen');
      chosenPics.map((i) => {
        if (i === this._pic) {
          const index = chosenPics.indexOf(i);
          chosenPics.splice(1, index);
          picStar.classList.remove('pic__star_active')
        }
        else {
          chosenPics.push(this._pic);
          picStar.classList.add('pic__star_active');
        }
      })
    } else {
      localStorage.setItem('chosen', [this._pic]);
    }
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
    this._element.addEventListener('mouseenter', () => {
      this._addPicTitle();
    });
    this._element.addEventListener('mouseleave', () => {
      this._removePicTitle();
    });
  };

  generatePic() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const img = this._element.querySelector('.pic__img');
    img.src = this._thumbnailUrl;
    img.alt = this._title;
    return this._element;
  };

}
