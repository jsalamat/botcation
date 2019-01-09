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

const isClicked = (door) => {
	if(door.src === closedDoorPath) {
		return false;
	} else {
		return true;
	}
};

const playDoor = () => {
	numCloseDoors--;
	if(numCloseDoors === 0) {
		gameOver('win');
	};
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
	if(!isClicked(doorImage1)){
		doorImage1.src = openDoor1;
  		playDoor();
	};
};

door2.onclick = () => {
	if(!isClicked(doorImage2)){
  		doorImage2.src = openDoor2;
  		playDoor();
  	};
};

door3.onclick = () => {
	if(!isClicked(doorImage3)){
	  	doorImage3.src = openDoor3;
 	  	playDoor();
 	};
};

const gameOver = (status) => {
	if (status === 'win') {
		startButton.innerHTML = "You win! Play again?";
	}
}

randomChoreDoorGenerator();
//Testing gameOver the start button to change with win argument when numClsedDoor reach 0
// when all dorrs is clicked