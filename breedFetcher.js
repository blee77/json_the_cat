
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('error: Breed not found', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // console.log(typeof body);
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback("breed not found");
    }
    // console.log(data);
    // console.log(typeof data);


  });
 
};




module.exports = { fetchBreedDescription };