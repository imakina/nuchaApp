/* eslint-disable no-undef */
function search(query, cb) {
  return fetch(`api/food?q=${query}`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function productos(query, cb) {
  return fetch(`api/productos/search?q=${query}`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function pedido(query, cb) {
  return fetch(`api/pedido`, {
    method: "POST",
    body: query
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  // const error = new Error(`HTTP Error ${response.statusText}`);
  // error.status = response.statusText;
  // error.response = response;
  // console.log(error); // eslint-disable-line no-console
  // throw error;
  console.log(response.statusText)
}

function parseJSON(response) {
  return response.json();
}

const Client = { search, productos };
export default Client;
