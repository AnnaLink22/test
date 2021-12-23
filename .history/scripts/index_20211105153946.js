import { Api } from '../components/Api.js';
import { Section } from '../components/Section.js';
import { User } from '../components/User.js';
import { Pic } from '../components/Pic.js';
import { Tooltip } from '../components/Tooltip.js';

const api = new Api({
  url:'https://json.medrating.org/',
  headers: {
    'Content-Type': 'application/json'
  }
})

api
  .getUsers()
  .then((data) => {
    usersSection.generateSection();
    usersSection.renderElements(data);
  })
  .catch((err) => {

  }
);

const handleSaveDeletePic = selectedPic => {
  const initialChosenPics = JSON.parse(localStorage.getItem('chosen')) ?? [];
  const filteredChosenPics = initialChosenPics.filter(pic => pic.id !== selectedPic._id);

  if (initialChosenPics.length === filteredChosenPics.length) {
      filteredChosenPics.push(selectedPic);
  }

  localStorage.setItem('chosen', JSON.stringify(filteredChosenPics));
};


const usersSection = new Section( (user) => {
  usersSection.addEl(createUser(user));
  }
  , '.users__list', '.users', '.users__template'
);

const chosenSection = new Section( (pic) => {
  chosenSection.addEl(createChosenPic(pic));
  }
  , '.chosen__list', '.chosen', '.chosen__template'
);

const tooltipEmpty = new Tooltip('.content', 'tooltip__pic_type_empty', 'Список избранного пуст', 'Добавляйте изображения, нажимая на звездочки');
// const tooltipError = new Tooltip('.content', '.tooltip__pic_type_error', '')

const switchToChosen = () => {
  if (localStorage.getItem('chosen')) {
    if (localStorage.getItem('chosen').length !== 0) {
      usersSection.removeSection();
      console.log('em');
      tooltipEmpty.add();
    } else {
      const chosenPics = JSON.parse(localStorage.getItem('chosen'));
      usersSection.removeSection();
      chosenSection.generateSection();
      chosenSection.renderElements(chosenPics);
    }
  }
}

const switchToCatalog = () => {
  api
  .getUsers()
  .then((data) => {
    chosenSection.removeSection();
    usersSection.generateSection();
    usersSection.renderElements(data);

  })
  .catch((err) => {console.log(err)}
)}


const chosenBtn = document.querySelector('.content__switch_type_chosen');
chosenBtn.addEventListener('click', () => {
  catalogBtn.classList.remove('content__switch_active');
  chosenBtn.classList.add('content__switch_active');
  switchToChosen();
});

const catalogBtn = document.querySelector('.content__switch_type_catalog');
catalogBtn.addEventListener('click', () => {
  chosenBtn.classList.remove('content__switch_active');
  catalogBtn.classList.add('content__switch_active');
  switchToCatalog();
});

const createUser = (data) => {
  const user = new User(data, api, handleSaveDeletePic);
  const userElement = user.generateUser();
  return userElement;
}

const createChosenPic = (picture) => {
  const pic = new Pic(picture, picture._userId, true);
  const picElement = pic.generatePic();
  return picElement;
}




