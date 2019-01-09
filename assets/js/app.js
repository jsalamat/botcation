let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");
let botDoorPath = "https://jsbotcation.herokuapp.com/assets/images/robot.svg";
let beachDoorPath = "https://jsbotcation.herokuapp.com/assets/images/beach.svg";
let spaceDoorPath = "https://jsbotcation.herokuapp.com/assets/images/space.svg";
let closedDoorPath = "https://jsbotcation.herokuapp.com/assets/images/closed_door.svg";
let numCloseDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

const isBot = (door) => {
	if (door.src === botDoorPath) {
		return true;
	} else {
		return false;
	}
};

const isClicked = (door) => {
	if (door.src === closedDoorPath) {
		return false;
	} else {
		return true;
	}
};

const playDoor = (door) => {
	numCloseDoors--;
	if (numCloseDoors === 0) {
		gameOver('win');
	} else if (isBot(door)) {
		gameOver('lose');
	}
}

const randomChoreDoorGenerator = () => {
	const choreDoor = Math.floor(Math.random() * numCloseDoors);
	if (choreDoor === 0) {
		openDoor1 = botDoorPath;
		openDoor2 = beachDoorPath;
		openDoor3 = spaceDoorPath;
	} else if ( choreDoor === 1) {
		openDoor1 = beachDoorPath;
		openDoor2 = spaceDoorPath;
		openDoor3 = botDoorPath;
	}	else if (choreDoor === 2) {
		openDoor1 = spaceDoorPath;
		openDoor2 = botDoorPath;
		openDoor3 = beachDoorPath;
	}
};

		
door1.onclick = () => {
	if(currentlyPlaying && !isClicked(doorImage1)){
		doorImage1.src = openDoor1;
  		playDoor(door1);
	};
};

door2.onclick = () => {
	if(currentlyPlaying && !isClicked(doorImage2)){
  		doorImage2.src = openDoor2;
  		playDoor(door2);
  	};
};

door3.onclick = () => {
	if(currentlyPlaying && !isClicked(doorImage3)){
	  	doorImage3.src = openDoor3;
 	  	playDoor(door3);
 	};
};

const gameOver = (status) => {
	if (status === 'win') {
		startButton.innerHTML = "You win! Play again?";
	} else {
		startButton.innerHTML = "Game Over! Play again?";
	}
	currentlyPlaying = false;
}

randomChoreDoorGenerator();

// GameOver lose works but logic to win still happen when all door open
// currentPlaying added to fix logic - it prevent from opening the door once gameOver