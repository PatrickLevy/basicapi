/**********************************************************************
 *  Server Settings
 * ********************************************************************/
// const API_BASE_URL = 'https://aqueous-hollows-70414.herokuapp.com'
const API_BASE_URL = 'http://localhost:3001'

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

  // Put the API_BASE_URL on the page to help people understand what they are connected to
  $('#apiServerURL').text('This page is getting data from the backend api server at: ' + API_BASE_URL)

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
      $('#dataWillGoHere').text('Success! Data from server running at ' + API_BASE_URL + ': '  + myJson.data.message)
    })
    .catch(function(error) {
      console.error(error);
      $('#dataWillGoHere').text('We are not connected to our API Server! If you are trying to connect to a server running in your terminal, check that it is running on the same port as the variable "API_BASE_URL" in the file "appscript.js"')
    });

});



