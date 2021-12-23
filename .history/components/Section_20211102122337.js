export class Section {
  constructor(renderer, listSelector, containerSelector) {
    this._renderer = renderer;
    this._listSelector = document.querySelector(listSelector);
    this._sectionSelector = document.querySelector(sectionSelector);
    this._container = document.querySelector(containerSelector);
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
      .querySelector('.user__template').content
      .querySelector('.user')
      .cloneNode(true);

    return sectionElement;
  };
}
