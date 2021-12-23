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
    const picElement = document
      .querySelector('.pics__template').content
      .querySelector('.pic')
      .cloneNode(true);

    return picElement;
  };

  _handleOpen() {

  }

  _handleClose() {

  }

  _setEventListeners() {
    this._element.addEventListener('click', () => {
      if (popup.classList.contains('album__plus_opened')) {
        this._handleClose();
        plusBtn.classList.remove('album__plus_opened');
      } else {
        this._handleOpen();
        plusBtn.classList.add('album__plus_opened');
      }
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
