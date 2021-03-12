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


//NOTES:
//Step 1: Require "request" library.

//2. set up a variable for value to return to; and this is what we are looking for, when we type in  our command in the terminal "node breedFetcher.js Chartreux" ==> so, what we are looking for is the cat breed, and that = process.argv[2];

//3. set URL variable, let URL = https://api.thecatapi.com/v1/breeds/search?q=siberian (BUT, we replaced siberian with ${breed}, which the user input to the command line to the terminal "node")

//4. call request(URL,function) ; request has 2 parameters, and is function we get from the 'request' library;

//5. create the function for callback in request, in this case is requestCallback;

//6. Testing; Type "node breedFetcher.js xx", xx not such breed of xx, the terminal should return "Not found"



//Notes regarding question: 
//find the API docs for the API URL/endpoint which will return cat breed results.
// // print out the body content to the terminal
// console.log(typeof body); //We find that it's actually a string type.

//Access the first entry in the data array and print out the description for the user.

// Allow the user to specify the breed name using command-line arguments: 
// > node breedFetcher.js Chartreux
// RETURN: The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.








