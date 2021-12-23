import { Api } from '../components/Api.js';
import { Section } from '../components/Section.js';
import { User } from '../components/User.js';

const api = new Api({
  url:'https://json.medrating.org/',
  headers: {
    'Content-Type': 'application/json'
  }
})

// export const chosenPics = localStorage.setItem('chosen', []);

api
  .getUsers()
  .then((data) => {
    usersSection.renderElements(data);
  })
  .catch((err) => {console.log(err)}
);

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
  const user = new User(data, api);
  const userElement = user.generateUser();
  return userElement;
}
