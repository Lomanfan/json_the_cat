const request = require('request'); 
// const breed = process.argv[2];  


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);  
    const breedData = data[0];  //{}  

    if (breedData) {
      return callback(null, breedData.description);

    } else {
      return callback(null, "No description found.");
    }
  })
};

module.exports = { fetchBreedDescription };

