export class Tooltip {
  constructor(containerSelector, classSelector) {
    this._containerSelector = containerSelector;
    this._classSelector = classSelector;
  }

  add() {
    this._element = this._getTemplate();
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
