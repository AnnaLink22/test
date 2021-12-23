export class Section {
  constructor(renderer, listSelector, sectionSelector, templateSelector) {
    this._renderer = renderer;
    this._listSelector = listSelector;
    this._sectionSelector = sectionSelector;
    this._templateSelector = templateSelector;
  }
  renderElements(elements) {
      elements.forEach(el => {
      this._renderer(el);
      })
  }


  addEl(el) {
    document.querySelector(this._listSelector).append(el);
  }


  _getTemplate() {
    const sectionElement = document
      .querySelector(this._templateSelector).content
      .querySelector(this._sectionSelector)
      .cloneNode(true);

    return sectionElement;
  };

  generateSection() {
    this._element = this._getTemplate();
    return this._element;
  };

}
