const request = require('request');
const breed = process.argv[2];

let URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

const requestCallback = function (error, response, body) {

    
    if (error) {
      console.log('Error');
      return; 
    }

    const data = JSON.parse(body);
    // console.log(data);

    console.log(typeof data); 

    if (!data.length) {
      console.log("Not found");
      return;  
    }

    const breed = data[0];
    console.log(breed.description);

};


request(URL,requestCallback);  









