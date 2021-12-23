export class Tooltip {
  constructor(containerSelector) {
    this._containerSelector = containerSelector;
  }

  add(classSelector) {
    this._element = this._getTemplate();
    this._element.classList.add(classSelector);
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
