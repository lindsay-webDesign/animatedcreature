let sunrise = 0;

let rLegRotation = 0;



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(219, 112, 224);
  
  // Head
  stroke(0);
  fill(255);
  strokeWeight(5);
  ellipse(200,200,50,50);
  // Face
  ellipse(190, 190, 5, 5);
  ellipse(210, 190, 5, 5);
  curve(190, 190, 195, 200, 200, 200, 210, 190);
  // Body
  fill(235, 16, 195);
  strokeWeight(5);
  stroke(204, 207, 83)
  rect(175,230,60,60,15);
  strokeWeight(1)
  // Left Arm
  line(173,250,150,250);
  line(150,250,200,sunrise+400);
  // Right Arm
  line(235,250,270,250);
  line(270,250,200,sunrise+400);
  // Left Leg
  line(175,280,175,350);
  // Right Leg
  line(235,280,235,350);
  
  ellipse(200,sunrise+400, 50, 50);
  sunrise = sunrise-1;
  
  if (sunrise<-400) {
      sunrise=0
  }
  
}