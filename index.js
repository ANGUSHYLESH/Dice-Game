 var random=Math.floor(Math.random()*6)+1;

 var dice="dice" + random + ".png";

 var imgsrc="images/" + dice;

 var img1= document.querySelectorAll("img")[0];
 img1.setAttribute("src",imgsrc);

 var random2=Math.floor(Math.random()*6)+1;

 var dice2="dice" + random2 + ".png";

 var imgsrc2="images/" + dice2;

 var img2= document.querySelectorAll("img")[1];
 img2.setAttribute("src",imgsrc2);
 if(random > random2)
  document.querySelector("h1").innerHTML=" PLAYER 1 WINS";
else if (random < random2) {
  document.querySelector("h1").innerHTML=" PLAYER 2 WINS";
} 
else {
    document.querySelector("h1").innerHTML="DRAW";
}
