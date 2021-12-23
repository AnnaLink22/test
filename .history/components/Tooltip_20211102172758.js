export class Tooltip {
  constructor(containerSelector, classSelector, divSelector) {
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
      .querySelector(this._templateSelector).content
      .querySelector(this._sectionSelector)
      .cloneNode(true);

    return sectionElement;
  };
}
