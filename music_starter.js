// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  //rectMode(CENTER)
  ellipseMode(CENTER)
  textSize(24);


  volumeBar(bass,color(240, 34, 19),color(240, 137, 19),0)//red to orange maping bass
  volumeBar(drum,color(19, 240, 63),color(19, 100, 240),100)//green to blue maping drum
  volumeBar(vocal,color(19, 240, 63),color(19, 100, 240),150)//green to blue maping vocal
  volumeBar(other,color(19, 240, 63),color(19, 100, 240),300)//green to blue maping drum

}
function volumeBar(track, softColor, brightColor, xPosition){

  let color1 = softColor;//color(237, 19, 19)red
  let color2 = brightColor;//color(237, 113, 19)orange

  let volumeMapForColor = map(track,0,100,0,1);
  let strokeColor = lerpColor(color1, color2, volumeMapForColor);
  strokeWeight(3);
  stroke(strokeColor);
  
  let volumeMapForLines =map(track,0,100,30,90)
  let lenghtOfLine = 30;
  let lineStart = 100;
  let lineEnd = lineStart+lenghtOfLine;
   
  
for(let i =1; i <= volumeMapForLines; i++) {
  let lineStep = i*10;
  line(lineStart + xPosition, lineStep, lineEnd + xPosition, lineStep);
 

}



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