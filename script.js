console.log('up and running!!')


// THE DATA
// data will be organized into an array of objects
// each object will have a topic key value pair
// as well as info or answer key value pair
// lastly it will have a links portion w links to 
// w3 schools pages about the topic

// the next card will change the card to the next object in the arr

//The trivia card will start with an image of a topic
// the trivia card will constantly be switching text content
// it will default to the topic on the front side
// after clicking the flip me button...
// the card will change and will show information about the topic with 
// a links portion at the bottom
// next card will go to the next topic


// in the future we can sort through differnet data sets to study from
// ie sorting methods array methods string methods
// 

const flipButton = document.querySelector('.flip-button');
const nextButton = document.querySelector('.next-button');
const card = document.querySelector('.card');

let arrOfData  = [

]

class Data{
    constructor(topic,info,link){
        this.topic = topic;
        this.info = info;
        this.link = link;
    }
}

let scope = new Data('Scope','JavaScript has function scope: Each function creates a new scope. Scope determines the accessibility (visibility) of these variables. Variables defined inside a function are not accessible (visible) from outside the function.', 'https://www.w3schools.com/js/js_scope.asp')
let hoisting = new Data('hoisting', 'In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.', 'https://www.w3schools.com/js/js_hoisting.asp')
let letKeyword = new Data('let','Before ES2015 JavaScript did not have Block Scope. Variables declared with the let keyword can have Block Scope. Variables declared inside a block {} can not be accessed from outside the block')
// console.log(scope);

arrOfData.push(scope, hoisting, letKeyword)
console.log(arrOfData);