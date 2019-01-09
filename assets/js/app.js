let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
// *** need to create actual path image file for heroku to work
let botDoorPath = "https://jsbotcation.herokuapp.com/assets/images/robot.svg";
let beachDoorPath = "https://jsbotcation.herokuapp.com/assets/images/beach.svg";
let spaceDoorPath = "https://jsbotcation.herokuapp.com/assets/images/space.svg";


door1.onclick = () => {
  doorImage1.src = botDoorPath;
};
door2.onclick = () => {
  doorImage2.src = beachDoorPath;
};
door3.onclick = () => {
  doorImage3.src = spaceDoorPath;
};