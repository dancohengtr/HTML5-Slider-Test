/***************************
This is JavaScript (JS), the programming language that powers the web (and this is a comment, which you can delete).

To use this file, link it to your markup by placing a <script> in the <body> of your HTML file:

  <body>
    <script src="script.js"></script>

replacing "script.js" with the name of this JS file.

Learn more about JavaScript at

https://developer.mozilla.org/en-US/Learn/JavaScript
***************************/
/***************************
This is JavaScript (JS), the programming language that powers the web (and this is a comment, which you can delete).

To use this file, link it to your markup by placing a <script> in the <body> of your HTML file:

  <body>
    <script src="script.js"></script>

replacing "script.js" with the name of this JS file.

Learn more about JavaScript at

https://developer.mozilla.org/en-US/Learn/JavaScript
***************************/



window.onload = function(){
  draw();
}

function draw(){

  var canvas = document.getElementById("myCanvas");
  var canvasContext = canvas.getContext("2d");
  
  var value = document.getElementById('slider').value;
  
  canvasContext.fillStyle = 'rgb(0,'+ (191 - value) + ', '+ (255 - value) + ')';
  canvasContext.fillRect(0,0, canvas.width, canvas.height);
  canvasContext.lineWidth  = 0.8;
  canvasContext.strokeRect(0, 0, canvas.width, canvas.height);
 
  
  //draw ground
  canvasContext.fillStyle = "#f4a460 ";
  canvasContext.fillRect(0, 135, 500, 50);
  canvasContext.lineWidth  = 0.8;
  canvasContext.strokeRect(0, 135, 500, 50);
  
  //draw palm trees
  var img1 = document.getElementById('palm');
  canvasContext.drawImage(img1,20,90,50,50);
  var img2 = document.getElementById('palm');
  canvasContext.drawImage(img2,200,90,50,50);

  
  canvasContext.beginPath();
  canvasContext.arc(25,25,20,0,2*Math.PI);
  canvasContext.fillStyle = 'rgb( 255, 255,'+ (0 + value) + ')';
  canvasContext.fill(); 
  canvasContext.stroke();
}






