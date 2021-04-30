/* Add any JavaScript you need to this file. */
var filmButton = document.querySelector('#movie-icon'); //filmButton is the element with movie-icon id or
filmButton.addEventListener('click', function() {
  //event when click on film button
  let element = document.querySelector('#record-section'); //element is the element with record-section id or records
  element.style.display = 'none'; //hide records
  let shownElement = document.querySelector('#film-section');
  shownElement.style.display = 'block'; //show films
});

var recordButton = document.querySelector('#album-icon'); //recordButton is the element with album-icon id
recordButton.addEventListener('click', function() {
  //event when click on album button
  let element = document.querySelector('#film-section'); //element is element with film-section id or a section which has all the films
  element.style.display = 'none'; //hide films
  let shownElement = document.querySelector('#record-section');
  shownElement.style.display = 'block'; //show records
});

var allButton = document.querySelector('#all-icon'); //all button is where id is all-icon
allButton.addEventListener('click', function() {
  //event when click on all button
  let shownElementOne = document.querySelector('#film-section');
  shownElementOne.style.display = 'block'; //show films
  let shownElementTwo = document.querySelector('#record-section');
  shownElementTwo.style.display = 'block'; //show records
});


var problem = document.querySelector('#problem').value;
problem.addEventListener('click', function(){
let show = document.getElementById('ordernum');
show.display = 'block';
});

var question = document.querySelector('#question').value;
question.addEventListener('click', function(){
let show = document.getElementById('ordernum');
show.display = 'hidden';
});