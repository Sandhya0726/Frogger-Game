const canvas =document.getElementById('canvas1');
const ctx1=  canvas.getContext('2d');
canvas1.width= 400;
canvas1.height= 400;

const canvas2 =document.getElementById('canvas2');
const ctx2=  canvas.getContext('2d');
canvas2.width= 400;
canvas2.height= 400;

const canvas3 =document.getElementById('canvas3');
const ctx3=  canvas3.getContext('2d');
canvas3.width= 400;
canvas3.height= 400;

const canvas4=document.getElementById('canvas4');
const ctx4=  canvas.getContext('2d');
canvas4.width= 400;
canvas4.height= 400;

const canvas5=document.getElementById('canvas5');
const ctx5=  canvas.getContext('2d');
canvas5.width= 400;
canvas5.height= 400;



const grid= 80;
let keys= [];
let gameSpeed= 1;
let score= 0;
let collisionCount= 0;
let frame= 0;
 let safe=false;


const carsArray=[];
const logsArray=[];

const background_lvl1= new Image();
background_lvl1.src='https://www.frankslaboratory.co.uk/downloads/Frogger/background_lvl2.png';
  
const grass= new Image();
grass.src='https://www.frankslaboratory.co.uk/downloads/Frogger/grass.png';

const log= new Image();
log.src='log.png';
 
const turtle =new Image();
turtle.src='turtles.png';

const car= new Image();
car.src='cars.png';
let numberOfCars=3;

const frog= new Image();
frog.src="frog_spritesheet.png";