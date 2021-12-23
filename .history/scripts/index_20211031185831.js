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


// const handleSaveDeletePic = (pic) => {
//   if (localStorage.getItem('chosen')) {
//     const storage = JSON.parse(localStorage['chosen']);
//     storage.map((el) => {
//       if (el.id === pic.id) {
//         console.log(pic);
//         const index = storage.indexOf(el);
//         const newStorage = storage.splice(index, 1);
//         localStorage.setItem('chosen', JSON.stringify(newStorage));
//       } else {
//         storage.push(pic);
//         localStorage.setItem('chosen', JSON.stringify(storage));
//       }
//     })
//   } else {
//     let chosenPics = [];
//     chosenPics.push(pic);
//     localStorage.setItem('chosen', JSON.stringify(chosenPics));
//   }
// }

const handleSaveDeletePic = (pic) => {
  let chosenPics = []
  if (localStorage.getItem('chosen')) {  // если уже есть что-то в локалсторадж
    chosenPics = JSON.parse(localStorage['chosen']);
    chosenPics.map((el) => {
      if (el.id === pic._id) {  // проверяем если уже сохранили картинку ранее
        const index = chosenPics.indexOf(el);  // удаляем ее по клику
        console.log(index);
        chosenPics.splice(index - 1, 1);
      } else {
        chosenPics.push(pic); // если не сохраняли ранее, то сохраняем
      }
      localStorage.setItem('chosen', JSON.stringify(chosenPics)); // кладем в локалсторадж обновленные данные
    })
  } else {  // если ничего еще нет в локалсторадж, то добавляем картинку в массив и кладем массив в локалсторадж
    chosenPics.push(pic);
    localStorage.setItem('chosen', JSON.stringify(chosenPics));
  }
}



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
