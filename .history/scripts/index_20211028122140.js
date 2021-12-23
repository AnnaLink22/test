import {Api} from '../components/Api.js';




const api = new Api({
  url:'https://json.medrating.org/',
  headers: {
    'Content-Type': 'application/json'
  }
})


