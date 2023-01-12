// GRAPHICS ASSIGNEMNT 1
// SET UP THE CANVAS AND GRAPHICS CONTEXT
let cnv = document.getElementById("canv");
let ctx = cnv.getContext("2d");

cnv.width = 800;
cnv.height = 600;

// IMAGE VARIABLE
let cloud = document.getElementById("cloud-img");

// BACKGROUNG COLOUR
ctx.fillStyle = "Blue";
ctx.fillRect(0, 0, 800, 400);

ctx.fillStyle = "Green";
ctx.fillRect(0, 400, 800, 200);

// GLOBAL VARIABLES
let circRed = 255;
let circBlue = 0;
let circGreen = 0;
let sunHeight = 400;
let sunRadius = 50;
let sunStartAng = Math.PI;
let sunEndAng = 0;
let cloud1X = 350;
let cloud2X = 400;

requestAnimationFrame(loop);
function loop() {
  sunHeight -= 5;
  sunRadius += 2;
  sunStartAng += Math.PI;
  sunEndAng += 2 * Math.PI;
  circBlue += 2;
  cloud1X += 2;
  cloud2X -= 2;

  // BACKGROUND COLOUR
  ctx.fillStyle = "Blue";
  ctx.fillRect(0, 0, 800, 400);

  ctx.fillStyle = "Green";
  ctx.fillRect(0, 400, 800, 200);

  // DRAW HALF CIRCLE
  ctx.lineWidth = 2;
  ctx.fillStyle = "rgb(" + circRed + " ," + circBlue + " , " + circGreen + ")";
  ctx.beginPath();
  ctx.arc(400, sunHeight, sunRadius, sunStartAng, sunEndAng);
  ctx.fill();

  // CLOUD IMAGE
  ctx.drawImage(cloud, cloud1X, 175);
  ctx.drawImage(cloud, cloud2X, 150);

  requestAnimationFrame(loop);
}
