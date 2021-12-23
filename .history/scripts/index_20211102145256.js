import { Api } from '../components/Api.js';
import { Section } from '../components/Section.js';
import { User } from '../components/User.js';
import { Pic } from '../components/Pic.js';




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
  .catch((err) => {console.log(err)}
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
  chosenSection.addEl(createPic(pic));
  }
  , '.chosen__list', '.chosen', '.chosen__template'
);


const switchToChosen = () => {
  if (localStorage.getItem('chosen')) {
    const chosenPics = JSON.parse(localStorage.getItem('chosen'));
    chosenSection.generateSection();
    chosenSection.renderElements(chosenPics);
  }
}

const btn = document.querySelector('.content__switch_type_chosen');
btn.addEventListener('click', () => switchToChosen);

const createUser = (data) => {
  const user = new User(data, api, handleSaveDeletePic);
  const userElement = user.generateUser();
  return userElement;
}

const createPic = (picture) => {
  const pic = new Pic(picture, this._userId, this._handleSaveDeletePic);
  const picElement = pic.generatePic();
  return picElement;
}




