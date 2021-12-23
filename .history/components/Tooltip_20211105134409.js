export class Tooltip {
  constructor(containerSelector, picClass) {
    this._containerSelector = containerSelector;
    this._picClass = picClass;
  }

  add(classSelector) {
    this._element = this._getTemplate();
    this._element.classList.add(classSelector);
    this._element.querySelector('.tooltip__pic').classList.add(this._picClass);
    document.querySelector(this._containerSelector).append(this._element);
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
