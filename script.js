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
const start = document.querySelector('.start');
const lastButton = document.querySelector('.last-button');
const title = document.querySelector('.title');
const restartButton = document.querySelector('.restart-button');
const saveButton = document.querySelector('.save-button');

let h1 = document.createElement('h1');
let p = document.createElement('p');
let link = document.createElement('a');

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
let hoisting = new Data('Hoisting', 'In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.', 'https://www.w3schools.com/js/js_hoisting.asp')
let letKeyword = new Data('Let','Before ES2015 JavaScript did not have Block Scope. Variables declared with the let keyword can have Block Scope. Variables declared inside a block {} can not be accessed from outside the block')
let useStrict = new Data('Use Strict', 'The "use strict" directive was new in ECMAScript version 5. s not a statement, but a literal expression, ignored by earlier versions of JavaScript. The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables. All modern browsers support "use strict" except Internet Explorer 9 and lower', 'https://www.w3schools.com/js/js_strict.asp')
let thisKeyword = new Data('This', `The JavaScript this keyword refers to the object it belongs to. It has different values depending on where it is used: In a method, this refers to the owner object.
Alone, this refers to the global object. In a function, this refers to the global object.In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event. Methods like call(), and apply() can refer this to any object.`, 'https://www.w3schools.com/js/js_this.asp')
let constKeyword = new Data('Const', `Variables defined with const behave like let variables, except they cannot be reassigned. Declaring a variable with const is similar to let when it comes to Block Scope.
The keyword const is a little misleading. It does NOT define a constant value. It defines a constant reference to a value.
Because of this, we cannot change constant primitive values, but we can change the properties of constant objects.`, `https://www.w3schools.com/js/js_const.asp`)
let classKeyword = new Data('Class', `Use the keyword class to create a class, and always add a constructor method. 
The constructor method is called each time the class object is initialized.`, `https://www.w3schools.com/js/js_classes.asp`) 

arrOfData.push(scope, hoisting, letKeyword, useStrict,thisKeyword, constKeyword, classKeyword); 

let i = 0;

start.addEventListener('click', function evtFunc(evt){
    evt.preventDefault();
    addTopic();
    this.classList.add('hidden', true);
    flipButton.removeAttribute('id');
    nextButton.removeAttribute('id');
    restartButton.removeAttribute('id');
})


const addTopic = () => {
    if (card.hasChildNodes()){
        return;
    }
    card.appendChild(h1);
    h1.textContent = arrOfData[i].topic;
    h1.setAttribute('class', 'topic');
}

flipButton.addEventListener("click", function flip(evt){
    evt.preventDefault();
    if(card.hasChildNodes() === false){
        console.log('there is nothing to flip')
    } else {
        card.style.background = 'white';
        card.style.border = 'solid blue 1px';
        addInfo();
        addLink();
    }
})

const addInfo = () => {
    card.appendChild(p);
    p.textContent = arrOfData[i].info;
}

const addLink = () => {
    card.appendChild(link);
    link.setAttribute('href', arrOfData[i].link);
    link.setAttribute('target', '_blank');
    link.textContent = `Learn more about ${arrOfData[i].topic}`;
}

const nextCard = () => {
    i++;
    addTopic();
    console.log(i);
    card.style.background = null;
}

nextButton.addEventListener('click', function next (evt){
    evt.preventDefault();
    if(i >= arrOfData.length){
        alert(`thats all the cards we have! sorry :(`)
        return;
    }
    card.innerHTML = ''
    nextCard();
    console.log(card.childNodes)
})

nextButton.addEventListener('click', function makeLastButton(evt){
    evt.preventDefault();
    // lastButton.classList.toggle('hide-button', true);
    lastButton.removeAttribute('id')
})

const lastCard = () => {
    i--;
    card.innerHtml = ''
    console.log(i);
}

lastButton.addEventListener('click', function(evt){
    evt.preventDefault();
    lastCard();
} )

restartButton.addEventListener('click', function restart (){
    i = 0;
    card.innerHTML = ''
    addTopic(); 
    card.style.background = null;
})

saveButton.addEventListener('click', function(evt){
    evt.preventDefault();
    addLinkToList();
})

const savedLinks = document.querySelector('.saved-links');

const savedLinksArr = [];

const addLinkToList = () => {
    if(savedLinksArr.includes(arrOfData[i].topic)){
        return;
    }
    let li = document.createElement('li')
    let  a = document.createElement('a');
    savedLinks.appendChild(li);
    li.appendChild(a);
    a.setAttribute('href', arrOfData[i].link)
    a.textContent = arrOfData[i].topic
    savedLinksArr.push(arrOfData[i].topic)
}




// ADD AN EVENT LISTENER TO START BUTTTON   WHEN CLICKED
//  IT WILL CLASS LIST TOGGLE TO HIDDEN .HIDDEN IN CSS
// DISPLAY NONE



// MAKE A CSS BACKGROUND IMAGE FOR THE CARD ONLY APPEAR FOR THE FRONT
// WHILE THERES ONLY THE TOPIC

// MAKE A DIFFERENT CSS BACKGROUND FOR WHEN THE THE INFO AND LINKS ARE
//

// MAKE A START OVER BUTTON ONLY APPEAR WHEN YOU REACH THE END OF THE 
// CARDS??

// MAKE LETS GET STARTED DISAPEAR WHEN THE GAME IS STARTED???

// MKAE NEXT CARD AND LAST CARD ONLY APPEAR WHEN START BUTTON HAS BEEN 
// CLICKED 

// card.addEventListener('click', function clickedCard(evt){
//     evt.preventDefault();
//     console.log('clicked');
// })