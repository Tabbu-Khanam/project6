const qwerty = document.getElementById("qwerty");
const phrase2 =  document.getElementById("phrase");
const startButton = document.querySelector(".btn__reset");
const button = document.getElementsByTagName("button");
const hearts = document.getElementsByTagName("img");
const title = document.querySelector('.title');
let missed = 0;
const overlay = document.querySelector("#overlay");

startButton.addEventListener('click', (e) => {
let replayButton = e.target;
if(replayButton.textContent = "Replay" && missed >= 5) {
 location.reload();
}else if (replayButton.textContent = "Replay" && missed >= 1) {
  location.reload();
} else {
  overlay.style.display = 'none';
}

 });

 
let phrases = [
'smooth like butter',
'hard like stone',
'who made you angry',
'i am happy today',
'you are smart'
]

function getRandomPhraseAarry(arr)  {
 const random = Math.floor(Math.random() * arr.length);
  const phraseSplit = arr[random].split('');
  return phraseSplit;
}
function addPhraseToDisplay(arr) {
  for(let i = 0; i < arr.length; i++) {
    const ul = document.querySelector('#phrase ul');
    const listItem = document.createElement("li");
    listItem.textContent = arr[i];
   if(listItem.textContent !== " ") {
     listItem.className = "letter";
   } else {
    listItem.className = "space";
   }
   ul.appendChild(listItem);
  }

}
function checkLetter(clickedButton) {
  const checkLetter = document.querySelectorAll("li");
  let match = null;
  for(let i = 0; i < checkLetter.length; i++) {
     if(clickedButton === checkLetter[i].textContent) {
      checkLetter[i].className = 'letter show';
       match += checkLetter[i].textContent;
     }

  }
  return match;
}

qwerty.addEventListener('click', (e) => {
  let button = e.target;
  if(button.tagName === 'BUTTON' && button.className !== 'chosen') {
     button.className += 'chosen';
     button.disabled = true;
     let checkResult = checkLetter(button.textContent);
        
        if(checkResult === null) {
        hearts[missed].src = 'images/lostHeart.png';
       missed++;
        
       }
    }
    checkWin();
});

function checkWin() {
  const classLetter = document.getElementsByClassName('letter'); 
  const classShow =  document.getElementsByClassName('show'); 
  if(classLetter.length === classShow.length) {
      overlay.className = 'win';
      title.textContent = 'won';
      overlay.style.display = 'flex';
      startButton.textContent = 'Replay';
  } else if(missed >= 5) {
    overlay.className = 'lose';
    title.textContent = 'lost';
    overlay.style.display = 'flex';
    startButton.textContent = 'Replay';
  }
}

let getRandom = getRandomPhraseAarry(phrases);
addPhraseToDisplay(getRandom);





