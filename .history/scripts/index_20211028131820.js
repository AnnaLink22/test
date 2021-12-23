import { Api } from '../components/Api.js';
import { Section } from '../components/Section.js';




const api = new Api({
  url:'https://json.medrating.org/',
  headers: {
    'Content-Type': 'application/json'
  }
})


api
  .getUsers()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {console.log(err)}
);


const usersSection = new Section( (user) => {
  usersSection.addEl(addUser(user));
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


