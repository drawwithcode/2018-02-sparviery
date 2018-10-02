function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(200);
  angleMode(DEGREES);
  frameRate(10);


}

function draw() {
  // put drawing code here
  //background(200);

////////////text
push();

translate(width/2,height/2);

noStroke();
fill(200);
rectMode(CORNER);
//rect(140,30,210,90);

rect(-600,-350,200,90);
rect(400,-350,200,90);

  noFill();
  stroke(30);
  strokeWeight(2);

  textSize(80);
  text(frameCount, -580,-280);

  noFill();
  stroke(30);
  strokeWeight(2);

  textSize(80);
  text(frameCount/2, 420,-280);

pop();


/*
translate(mouseX,mouseY);
translate(width/2,height/2);
rotate(frameCount*10);
*/

/////////////fiore
push();

//translate(mouseX,mouseY);
translate(width/2,height/2);
//rotate(frameCount*10);

  strokeWeight(0.2);

  rotate(45);
  rotate(frameCount);


  if (frameCount==90){
    noLoop();
  }

push();
  rotate(0);
  var angle = 180 * sin(frameCount*2);
  line(0, 0, -angle, angle);

pop();

push();
  rotate(90);
  var angle = 180 * sin(frameCount*2);
  line(0, 0, -angle, angle);

pop();

push();
  rotate(180);
  var angle = 180 * sin(frameCount*2);
  line(0, 0, -angle, angle);

pop();

push();
  rotate(270);
  var angle = 180 * sin(frameCount*2);
  line(0, 0, -angle, angle);

pop();

pop();

///////////centro

push();

translate(width/2,height/2);

stroke(30);
strokeWeight(2);

  push();
  line(0,0,0,100);
  pop();

  push();
  rotate(90);
  line(0,0,0,100);
  pop();

  push();
  rotate(180);
  line(0,0,0,100);
  pop();

  push();
  rotate(270);
  line(0,0,0,100);
  pop();

pop();

///////////centro2
/*
push();

translate(width/2,height/2);

stroke(30);
strokeWeight(2);

  push();
  line(0,0,0,1000);
  pop();

  push();
  rotate(90);
  line(0,0,0,1000);
  pop();

  push();
  rotate(180);
  line(0,0,0,1000);
  pop();

  push();
  rotate(270);
  line(0,0,0,1000);
  pop();

pop();
*/

/////////////pointer
push();

stroke(30);
strokeWeight(2);

translate(mouseX,mouseY);
rotate(frameCount*45);

  push();
  line(0,0,0,20);
  pop();

  push();
  rotate(90);
  line(0,0,0,20);
  pop();

  push();
  rotate(180);
  line(0,0,0,20);
  pop();

  push();
  rotate(270);
  line(0,0,0,20);
  pop();

pop();



}
