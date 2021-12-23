export class Tooltip {
  constructor(picClass, titleText, subtitleText) {
    this._picClass = picClass;
    this._titleText = titleText;
    this._subtitleText = subtitleText;
  }

  add(containerSelector) {
    this._element = this._getTemplate();
    this._element.querySelector('.tooltip__pic').classList.add(this._picClass);
    this._element.querySelector('.tooltip__title').textContent = this._titleText;
    this._element.querySelector('.tooltip__subtitle').textContent = this._subtitleText;
    document.querySelector(containerSelector).append(this._element);
  }

  remove() {
    this._element.remove();
  }

  _getTemplate() {
    const sectionElement = document
      .querySelector('.tooltip__template').content
      .querySelector('.tooltip')
      .cloneNode(true);
    return sectionElement;
  };
}
