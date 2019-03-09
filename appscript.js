//const API_BASE_URL = 'http://localhost:3001'
const API_BASE_URL = 'https://www.codingclub.dev/api'

function sayHello () {
  console.log('hello from a function on the front end')
}

/*******************************
 * When Document is Loaded...
 *******************************/
document.addEventListener("DOMContentLoaded", function(event) { 
  console.log('document ready, starting script...');
  
  // Start running code (open browser dev tools console to see this)
  sayHello();

  // Make a request to the backend server
  // see: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const requestEndpoint = API_BASE_URL + '/arbitrary'; 
  fetch(requestEndpoint)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      // Do some stuff with your data, put it on your page, etc.
      // For now, check your browser console and you should see it
      console.log(myJson);
      $('#dataWillGoHere').text(myJson.data.message)
    })
    .catch(function(error) {
      console.error(error);
      $('#dataWillGoHere').text('We are not connected to our API Server!')
    });

});



