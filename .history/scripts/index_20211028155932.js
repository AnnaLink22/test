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


const usersSection = new Section( (user) => {
  usersSection.addEl(createUser(user));
  }
  , '.users__list'
);

const albumsSection = new Section( (album) => {
  albumsSection.addEl(addAlbum(album));
  }
  , '.albums__list'
);

const picsSection = new Section( (pic) => {
  picsSection.addEl(addPic(pic));
  }
  , '.pics__list'
);

const chosenSection = new Section( (pic) => {
  chosenSection.addEl(addPic(pic));
  }
  , '.chosen__list'
);

const handleOpenAlbums = (data) => {

}

const handleCloseAlbums = () => {

}

const createUser = (data) => {
  const user = new User(data, '.user__template', handleOpenAlbums, handleCloseAlbums);
  const userElement = user.generateCard();
  return userElement;
}
