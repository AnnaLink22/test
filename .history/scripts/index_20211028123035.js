import {Api} from '../components/Api.js';




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
