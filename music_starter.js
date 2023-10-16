
let firstrun = true
let bullet1x = -100
let bullet1y = 100
let bullet2x = -150
let bullet2y = 150
let bullet3x = -300
let bullet3y = 300 
let bullet4x = -500
let bullet4y = 500

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (firstrun) {
    // Bullet image size is 500x250
    bullet = loadImage('assets/Bullet.png', img => {print("Image loaded")}, img => {print("Failed to load")})
    
    firstrun = false
  }
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  //rectMode(CENTER)
  ellipseMode(CENTER)
  textSize(24);

  // console.log(song.currentTime())
  //  fill(255)
  //  text(song.currentTime(), width / 2, height / 3);
  //start of song 
  if (song.currentTime() < 108.5 || song.currentTime() > 135) { // turns of volume bars and plays image sequence on loop
  if (song.currentTime() < 53.5 || song.currentTime() > 73) { // turns of volume bars and plays image sequence on loop
    if (song.currentTime() > 0 && song.currentTime() < 16.5) { // changes colour of voulme bars
      volumeBar(bass, color(0), color(255), 0) //black to white maping bass
      volumeBar(drum, color(0), color(255), 85) //black to white maping drum
      volumeBar(vocal, color(0), color(255), 170) //black to white maping vocal
      volumeBar(other, color(0), color(255), 250) //balck to white maping other


    } else {
      volumeBar(bass, color(240, 34, 19), color(240, 137, 19), 0) //red to orange maping bass
      volumeBar(drum, color(19, 240, 63), color(19, 100, 240), 85) //green to blue maping drum
      volumeBar(vocal, color(237, 26, 223), color(116, 25, 227), 170) //pink to purple maping vocal
      volumeBar(other, color(0), color(255), 250) //balck to white maping other
    }


  }
  else {
    drawBullet(bullet1x, bullet1y); //first bullet 
    bullet1x = bullet1x +5;
    if (bullet1x > width) {
      bullet1x = -100;

    }

    drawBullet(bullet2x, bullet2y); // second bullet
    bullet2x = bullet2x +5;
    if (bullet2x > width) {
      bullet2x = -150;

    }

    drawBullet(bullet3x, bullet3y); // third bullet
    bullet3x = bullet3x +5;
    if (bullet3x > width) {
      bullet3x = -200;

    }


    drawBullet(bullet4x, bullet4y); // forth bullet 
    bullet4x = bullet4x +5;
    if (bullet4x > width) {
      bullet4x = -500;

    }
  }
} //second image sequence  
else {
  drawBullet(bullet1x, bullet1y); //first bullet 
  bullet1x = bullet1x +5;
  if (bullet1x > width) {
    bullet1x = -100;

  }

  drawBullet(bullet2x, bullet2y); // second bullet
  bullet2x = bullet2x +5;
  if (bullet2x > width) {
    bullet2x = -150;

  }

  drawBullet(bullet3x, bullet3y); // third bullet
  bullet3x = bullet3x +5;
  if (bullet3x > width) {
    bullet3x = -200;

  }


  drawBullet(bullet4x, bullet4y); // forth bullet 
  bullet4x = bullet4x +5;
  if (bullet4x > width) {
    bullet4x = -500;

  }
}
  
}

function drawBullet(x, y) { // function allows me to draw multiple bullets 
  push()
  translate(x, y) // Position of top left corner
  scale(0.5) // Scale of image
  image(bullet, 0, 0)
  pop()
}

//equalizer bars function alls me to draw multiple in different positions
function volumeBar(track, softColor, brightColor, xPosition) {

  let color1 = softColor; //color(237, 19, 19)red
  let color2 = brightColor; //color(237, 113, 19)orange

  let volumeMapForColor = map(track, 0, 100, 0, 1);
  let strokeColor = lerpColor(color1, color2, volumeMapForColor);
  strokeWeight(5);
  stroke(strokeColor);

  let volumeMapForLines = map(track, 0, 100, 30, 90)
  let lenghtOfLine = 50;
  let lineStart = 100;
  let lineEnd = lineStart + lenghtOfLine;


  for (let i = 1; i <= volumeMapForLines; i++) {
    let lineStep = i * 10;
    line(lineStart + xPosition, lineStep, lineEnd + xPosition, lineStep);


  }

 
}