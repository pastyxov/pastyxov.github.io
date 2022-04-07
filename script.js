let phrases = [
               {text: 'учиться'},
               {text: 'забить'}, 
               {text: 'нажраться'}, 
               {text: 'почитать'},
               {text: 'ничего нe хочу делать'}
];


function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');


button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  phrase.textContent = randomElement.text;
  
  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});