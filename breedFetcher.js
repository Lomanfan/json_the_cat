const request = require('request');  //Step 1
const breed = process.argv[2];   //

let URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

const requestCallback = function (error, response, body) {
    // console.log(body); - to see what is returning
    
    if (error) {
      console.log('Error');
      return; //stop excecution 
    }

    const data = JSON.parse(body);// deserialization by parsing to convert the string into an object using JSON.parse
    // console.log(data);

    console.log(typeof data); //typeof would now tell us that data is an object.

    if (!data.length) {
      console.log("Not found");
      return; //stop excecution 
    }

    const breed = data[0];
    console.log(breed.description);

};

//Step 4
request(URL,requestCallback);   //2 parms for request









