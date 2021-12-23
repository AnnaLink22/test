import { Api } from '../components/Api.js';
import { Section } from '../components/Section.js';
import { User } from '../components/User.js';

const api = new Api({
  url:'https://json.medrating.org/',
  headers: {
    'Content-Type': 'application/json'
  }
})

api
  .getUsers()
  .then((data) => {
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
}

// const handleSaveDeletePic = (pic) => {
//   let chosenPics = []
//   if (localStorage.getItem('chosen')) {  // если уже есть что-то в локалсторадж
//     chosenPics = JSON.parse(localStorage.getItem('chosen'));
//     const filteredArr = chosenPics.filter((el) => el.id !== pic._id)  // кладем в локалсторадж обновленные данные
//     chosenPics = filteredArr;
//     localStorage.setItem('chosen', JSON.stringify(filteredArr));
//   } else {  // если ничего еще нет в локалсторадж, то добавляем картинку в массив и кладем массив в локалсторадж
//     chosenPics.push(pic);
//     localStorage.setItem('chosen', JSON.stringify(chosenPics));
//   }
// }

const usersSection = new Section( (user) => {
  usersSection.addEl(createUser(user));
  }
  , '.users__list'
);

const chosenSection = new Section( (pic) => {
  chosenSection.addEl(addPic(pic));
  }
  , '.chosen__list'
);

const createUser = (data) => {
  const user = new User(data, api, handleSaveDeletePic);
  const userElement = user.generateUser();
  return userElement;
}
