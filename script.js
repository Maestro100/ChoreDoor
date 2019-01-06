var doorImage1 = document.getElementById('door1');
var doorImage2 = document.getElementById('door2');
var doorImage3 = document.getElementById('door3');
var numClosedDoors = 3;
var openDoor1;
var openDoor2;
var openDoor3;
var closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
var startButton = document.getElementById('start');
var currentlyPlaying = true;


isBot = (door) => {
  if(door.src===botDoorPath) return true;
  else return false;
}


isClicked = (door) => {
  if(door.src===closedDoorPath) return false;
  else return true;
}

playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors===0){
    gameOver('win');
  }
  else if(isBot(door)) gameOver('lose');
}

randomChoreDoorGenerator = () => {
  var choreDoor = Math.floor((numClosedDoors)*Math.random());
  if(choreDoor===0){
    openDoor1=botDoorPath;
    openDoor2=beachDoorPath;
    openDoor3=spaceDoorPath;
  }
  else if(choreDoor===1){
    openDoor2=botDoorPath;
    openDoor1=beachDoorPath;
    openDoor3=spaceDoorPath;
  }
  else{
    openDoor3=botDoorPath;
    openDoor1=beachDoorPath;
    openDoor2=spaceDoorPath;
  }
}

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

door1.onclick = () => {
  if(!isClicked(doorImage1)&& currentlyPlaying){
  doorImage1.src = openDoor1;
  playDoor(door1);
  }
}
door2.onclick = () => {
  if(!isClicked(doorImage2)&& currentlyPlaying){
  doorImage2.src = openDoor2;
  playDoor(door2);
  }
}
door3.onclick = () => {
  if(!isClicked(doorImage3)&& currentlyPlaying){
  doorImage3.src = openDoor3;
  playDoor(door3);
  }
}

startButton.onclick = () => {
  if(!currentlyPlaying) startRound();
}

gameOver = (status) => {
  if(status==='win') {
    startButton.innerHTML = 'You win! Play again?';
    getYourScore();
  }
  else {
    startButton.innerHTML = 'Game over! Play again?';
    score=0;
    currentStreak.innerHTML=score;
  }
  currentlyPlaying=false;
}

startRound = () => {
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
	randomChoreDoorGenerator();
}

let score = 0;
let highScore = 0;
let currentStreak = document.getElementById('score-number');
let bestStreak = document.getElementById('high-score-number');
currentStreak.innerHTML = score;
bestStreak.innerHTML = highScore;

const getYourScore = () => {
  score++;
  currentStreak.innerHTML = score;
  if (score > highScore) {
    highScore = score;
    bestStreak.innerHTML = highScore;
  }
}



startRound();