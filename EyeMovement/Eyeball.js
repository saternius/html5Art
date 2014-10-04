// ----------------------------------------
// Actual game code goes here.

// 
//Global 
//vars


fps = null;
 
canvas = null;

ctx = null;


// ----------------------------------------

// Our 'game' variables

var posX = 0;

var posY = 0;

var velX = 100;

var velY = 100;

var sizeX = 80;

var sizeY = 40;

var time=0;


var mouseX=0;

var mouseY=0;

var rotation=0;


var messages="NOTHING";


var imageObj = new Image();

imageObj.src = 'images/background.png';

var SpecialEyes = new Image();

SpecialEyes.src = 'images/Eye.png';


var head = new Image();
head.src='images/head.png'




window.onload = function () {
    
	canvas = document.getElementById("screen");
    
	ctx = canvas.getContext("2d");
   
	 fps = new FPSMeter("fpsmeter", document.getElementById("fpscontainer"));
	

canvas.addEventListener('mousemove', function(evt) {
  
	      var mousePos = getMousePos(canvas, evt);
       
	      var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
 
              mouseX = mousePos.x;
  
              mouseY= mousePos.y;
   
	   }, false);



       
        


  

GameLoopManager.run(GameTick);


};








function GameTick(elapsed)
{

    
	fps.update(elapsed);

   
        posX += velX*elapsed;
   
        posY += velY*elapsed;
    
   if ( (posX <= 0 && velX < 0) || (posX >= canvas.width-sizeX && velX > 0) ){

        velX = -velX;
  
   }
  if ( (posY <= 0 && velY < 0) || (posY >= canvas.height-82-sizeY && velY > 0) )
{       
	 velY = -velY;

 
  }  
	ctx.fillStyle = "green";
  
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        ctx.strokeRect(posX, posY, sizeX, sizeY);
   
        //ctx.fillStyle = "red";
   
        //fillCircle(ctx);

    
        ctx.fillStyle = "#f1e5e4";
    
        ctx.fillRect(100,100,350,400);

   

    
  
  var distX=35;

        var distY=0;
 
        time+=.04;
  
        distX=Math.sin(time)*-20;
  
        distY=Math.cos(time)*20;
  
  
        var pupX=15;
  
        var pupY=0;
  
       





var pupX=35;
  var pupY=0;
  pupX=Math.sin(rotation/57)*-30;
  pupY=Math.cos(rotation/57)*-30;
  
 
 /*
  rotation++;
  if(rotation>360){
  rotation=0;
  }
  messages=String(rotation);
*/

var fex = (180-posX);
var fi = 305-posY;
var t_angle = Math.atan(fi/fex)/(Math.PI/180);

if(fex<0){
  t_angle-=180;
}
if(fex>=0 && fi<0){
  t_angle+=360;
}
rotation=(t_angle*-1)+90;









	
ctx.drawImage(imageObj, 0, 0);


	//ctx.drawImage(SpecialEyes, 180+distX, 305+distY);

	ctx.drawImage(SpecialEyes,180+pupX,305+pupY);


ctx.drawImage(head, 0, 0);
ctx.font = 'bold 15pt Calibri';
ctx.fillText(messages, posX+10, posY+25);
	
/*
  ctx.beginPath();
  
	ctx.fillStyle="#000000"
;
	ctx.arc(250+distX, 250+distY, 10, 0, 2 * Math.PI);
 
        ctx.arc(450+pupX, 250+pupY, 10, 0, 2 * Math.PI);
  
	ctx.fill();
    */
    
  

}






function fillCircle(ctx)
{
  
	ctx.beginPath();

        ctx.fillStyle="#FF4422"
; 
        ctx.arc(250, 250, 70, 0, 2 * Math.PI);
  
	ctx.arc(450, 250, 70, 0, 2 * Math.PI);
  
	ctx.fill();
  
 

}


 
function getMousePos(canvas, evt) {
       
 var rect = canvas.getBoundingClientRect();
       
 return {
         
	 x: evt.clientX - rect.left,
       
         y: evt.clientY - rect.top
       
 };
     
 }