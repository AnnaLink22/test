import { Api } from '../components/Api.js';
import { Section } from '../components/Section.js';
import { User } from '../components/User.js';

const api = new Api({
  url:'https://json.medrating.org/',
  headers: {
    'Content-Type': 'application/json'
  }
})

let chosenPics = [];

api
  .getUsers()
  .then((data) => {
    usersSection.renderElements(data);
  })
  .catch((err) => {console.log(err)}
);


const handleSaveDeletePic = (pic) => {
  if (localStorage.getItem('chosen')) {
    chosenPics = JSON.parse(localStorage.getItem('chosen'));
    console.log(chosenPics);
    chosenPics.map((el) => {
      if (el.id === pic._id) {
        const index = chosenPics.indexOf(el);
        chosenPics.splice(1, index);
      }
      else {
        chosenPics.push(pic);
      }
    })
  } else {
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
