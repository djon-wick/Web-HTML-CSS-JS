function drawPlatform() 
{
    ctx.beginPath();
    ctx.rect(platX, platY, platWidth, platHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function checkBallPosition() 
{	
	if (mainX < platX + platWidth &&
         mainX + radius > platX &&
         mainY < platY + platHeight &&
         mainY + radius > platY)
		angle = -angle;
}

function moving()
{
    ctx.fillStyle = document.getElementById("backgroundColor").value;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Вверхняя нижняя граница
    mainX += Math.cos(angle);
    mainY += Math.sin(angle);
	
	checkBallPosition();
	
    if(mainY < radius || mainY > canvasHeight - radius)
	{
        angle = -angle;
        moving();
    }
	
    // Левая правая граница
    if(mainX  < radius || mainX > canvasWidth - radius)
	{
        angle = Math.PI * 2 - angle;
        if(mainX  < radius)
            angle += Math.PI / 2;
        else
            angle -= Math.PI / 2;
		
        moving();
    }
		
    ctx.beginPath();
    ctx.fillStyle = document.getElementById("circleColor").value;
    ctx.arc(mainX, mainY, radius - 1, 0, Math.PI * 2, true);
    ctx.fill();
	ctx.closePath();
	
	if (mainX == 400)
		alert("прошла ");
	
    return;
}


function moving2(event)
{
  switch(event.key)
  {
    case 'ArrowRight':platX += 15; break;
    case 'ArrowLeft':platX -= 15; break;
	};
};

var stiilb = document.getElementById("stiilb");
var ctx = stiilb.getContext('2d');
var canvasWidth = stiilb.width;
var canvasHeight = stiilb.height;
var radius = 10;
var mainX = Math.floor(Math.random() * (canvasWidth - 2 * radius) + radius);
var mainY = Math.floor(Math.random() * (canvasHeight - 2 * radius) + radius);
var angle = Math.random() * 2 * Math.PI;

let platX = 300;
let platY = 200;
let platWidth = 105;
let platHeight = 15;

let ballDX = 3; 
let ballDY = 3;

function draw() 
{
	moving();

	drawPlatform();
	 
		if (mainX == 400)
			alert("прошла ");
}
	

document.addEventListener("keydown", moving2, false);

intervalID = window.setInterval(draw, 5);
