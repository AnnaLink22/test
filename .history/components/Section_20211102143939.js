export class Section {
  constructor(renderer, listSelector, sectionSelector, templateSelector) {
    this._renderer = renderer;
    this._listSelector = document.querySelector(listSelector);
    this._sectionSelector = document.querySelector(sectionSelector);
    this._templateSelector = document.querySelector(templateSelector);
  }
  renderElements(elements) {
      elements.forEach(el => {
      this._renderer(el);
      })
  }


  addEl(el) {
    this._listSelector.append(el);
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
