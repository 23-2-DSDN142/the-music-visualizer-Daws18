// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  //rectMode(CENTER)
  ellipseMode(CENTER)
  textSize(24);
  


  let purple = color(147, 8, 194)
  let blue = color(48, 68, 194)
  let middleColor = lerpColor(purple,blue,0.6)

}

  let otherMap =map(other,0,100,5,7);
  let lenghtOfLine = 300;
  let LineStart = 100
  let lineEnd = LineStart+lenghtOfLine;

  stroke(purple)
  strokeWeight(3)
for(var i=1; 1 <5; i++){
  let lineStep = i*100;
  line(LineStart,lineStep, lineEnd,lineStep)
 


  // var ballSize= 70;
  // var bassMap= map(bass,0,100, 0+ballSize/2, ballSize); //map variable 
  
  

  // fill(middleColor); 
  // ellipse(width/2, 400, bassMap);
  
  // var ballSize= 40;
  // var drumHeight= map(drum,0,100, 0+ballSize/2,height ); 
 

  // fill(250); 
  // ellipse(width/2, drumHeight, ballSize);



  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;

 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);
}