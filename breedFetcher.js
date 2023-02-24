
const request = require('request');
request('https://api.thecatapi.com/v1/breeds/search?q=cha', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('error: Breed not found', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log(typeof body);
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);

});

