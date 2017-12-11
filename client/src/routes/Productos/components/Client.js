/* eslint-disable no-undef */
function search(query, cb) {
  return fetch(`/api/productos/search?q=${query}`, {
    accept: 'application/json'
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb)
}

function insert(query, cb) {
  return fetch(`/api/pedidos/insert?q=${query}`, {
    accept: 'application/json'
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb)
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  //const error = new Error(`HTTP Error ${response.statusText}`);
  //error.status = response.statusText;
  //error.response = response;
  //console.log(error); // eslint-disable-line no-console
  //  throw error;
  //console.log(response.statusText)
}
function parseJSON(response) {
  return response ? response.json() : []
}

const Client = { search, insert }
export default Client
