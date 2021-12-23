export class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderElements(elements) {
      elements.forEach(el => {
      this._renderer(el);
      })
  }


  addEl(el) {
    this._container.append(el);
  }
}
