const onError = (res) => {
  if(res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export class Api {

  constructor(config) {
    this._url = config.url;
  }

  getUsers() {
    return fetch(`${this._url}users`, {
      method: 'GET',
      headers: this._headers
    }).then(onError)
  }

  getAlbums(userId) {
    return fetch(`${this._url}albums/?userId=${userId}`, {
      method: 'GET',
      headers: this._headers
    }).then(onError)
  }

  getPics(albumId) {
    return fetch(`${this._url}photos/?albumId=${albumId}`, {
      method: 'GET',
      headers: this._headers
    }).then(onError)
  }

}
