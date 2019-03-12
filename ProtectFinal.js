var can = document.getElementById("canvas1");
var ctx = can.getContext("2d");

var frame = 0;
var score = 0;
var vie = 30;

var audioB1 = new Audio;
audioB1.src = "Jumpsound.mp3";

var audioLose = new Audio;
audioLose.src = "youlose.mp3";

var accident = new Audio;
accident.src = "accident.mp3";

var bruitchat = new Audio;
bruitchat.src = "bruitchat.mp3";

var freinage = new Audio;
freinage.src = "freinage.mp3";

var bois = new Audio;
bois.src = "bois.mp3";

//Video

var img = new Image();
img.src = "testdiag.svg";

var img2 = new Image();
img2.src = "ciel.svg";

var img3 = new Image();
img3.src = "arbres.svg"

var img4 = new Image();
img4.src = "road2.svg";

var img5 = new Image();
img5.src = "mountain.svg";

var img6 = new Image();
img6.src = "vieux.svg";

var img7 = new Image();
img7.src = "lignecentraleeffet.svg";

var img8 = new Image();
img8.src = "lignecentraleeffet2.svg";

var img9 = new Image();
img9.src = "lignecentraleeffet3.svg";

var img10 = new Image();
img10.src = "nuagetest.svg";

var img12 = new Image();
img12.src = "voitureverte.svg"

var img13 = new Image();
img13.src = "voiturebleue.svg"

var img14 = new Image();
img14.src = "voitureorange.svg"

var img15 = new Image();
img15.src = "voituregrise.svg"

var img16 = new Image();
img16.src = "barriere.svg"

var img17 = new Image();
img17.src = "Tronc.svg"

var img18 = new Image();
img18.src = "chat.png"

var img19 = new Image();
img19.src = "kitty.svg"

var img20 = new Image();
img20.src = "barriereD.svg";

var imgWidth2 = 0;
var scrollSpeed2 = 0.5;
var imgWidth16 = 0;
var imgHeight16 = 0;

var imgWidth = 430;
var imgHeigthJump = 400;
var sVariable = 0.5;

var playerX = 100;
var playerY = 100;

var barriereX = 420;
var barriereY = 430;
var barriereL = 400;
var barriereH = 95;

var barriereGX = 5;
var barriereGY = 430;
var barriereGL = 400;
var barriereGH = 95;

var troncGX = 5;
var troncGY = 430;
var troncGL = 400;
var troncGH = 95;

var troncDX= 420;
var troncDY= 430;
var troncDL= 400;
var troncDH= 95;

var chatGX= 120;
var chatGY= 430;
var chatGL= 200;
var chatGH= 95;

var chatDX= 510;
var chatDY= 430;
var chatDL= 200;
var chatDH= 95;

var voituregaucheverteX= 120;
var voituregaucheverteY= 420;
var voituregaucheverteL=200;
var voituregaucheverteH=95;

var voituredroiteverteX = 500 ;
var voituredroiteverteY = 430 ;
var voituredroiteverteL = 200;
var voituredroiteverteH = 95;

var voituregaucheorangeX = 120;
var voituregaucheorangeY = 430;
var voituregaucheorangeL = 200;
var voituregaucheorangeH = 95;

var voituredroiteorangeX = 500;
var voituredroiteorangeY = 430;
var voituredroiteorangeL = 200;
var voituredroiteorangeH = 95;

var voituregauchebleueX = 120;
var voituregauchebleueY = 430;
var voituregauchebleueL = 200;
var voituregauchebleueH = 95;

var voituredroitebleueX = 500;
var voituredroitebleueY = 430;
var voituredroitebleueL = 200;
var voituredroitebleueH = 95;

var voituregauchegriseX = 120;
var voituregauchegriseY = 430;
var voituregauchegriseL = 200;
var voituregauchegriseH = 95;

var voituredroitegriseX = 500;
var voituredroitegriseY = 430;
var voituredroitegriseL = 200;
var voituredroitegriseH = 95;




window.randomFunction = function(){}


window.onload = function(){
    var imgHeight = 0;
    var scrollSpeed = 5;



function loop (){
    ctx.beginPath();
    ctx.drawImage(img, 0, imgHeight);
    ctx.drawImage(img, 0, imgHeight - 500)
    ctx.closePath();

    imgHeight += scrollSpeed

    if(imgHeight == 500)
      imgHeight = 0

    drawEverything()

    window.requestAnimationFrame(loop);
}
loop();

function barriereGcollision(){
    if ( !(barriereGX > imgWidth + playerX
|| barriereGX < imgWidth - barriereGL
|| barriereGX < playerX - barriereGL
|| barriereGY < playerY - barriereGH) ) {
    vie -= 1;
    accident.play();
}
}

function barriereDCollision() {
    if ( !(barriereX > imgWidth + playerX
|| barriereX < imgWidth - barriereL
|| barriereX < playerX - barriereL
|| barriereY < playerY - barriereH) ) {
    vie -= 1;
    accident.play();
}
}

function troncGCollision() {
    if ( !(troncGX > imgWidth + playerX
|| troncGX < imgWidth - troncGL
|| troncGX < playerX - troncGL
|| troncGY < playerY - troncGH) ) {
    vie -= 1;
}
bois.play();
}

function troncDCollision() {
    if ( !(troncDX > imgWidth + playerX
|| troncDX < imgWidth - troncDL
|| troncDX < playerX - troncDL
|| troncDY < playerY - troncDH) ) {
    vie -= 1;
}
bois.play();
}

function chatGCollision() {
    if ( !(chatGX > imgWidth + playerX
|| chatGX < imgWidth - chatGL
|| chatGX < playerX - chatGL
|| chatGY < playerY - chatGH) ) {
    vie -= 1;
}
bruitchat.play();
}

function chatDCollision() {
    if ( !(chatDX > imgWidth + playerX
|| chatDX < imgWidth - chatDL
|| chatDX < playerX - chatDL
|| chatDY < playerY - chatDH) ) {
    vie -= 1;
}
bruitchat.play();
}

function voitureGverteCollision() {
    if ( !(voituregaucheverteX > imgWidth + playerX
|| voituregaucheverteX < imgWidth - voituregaucheverteL
|| voituregaucheverteX < playerX - voituregaucheverteL
|| voituregaucheverteY < playerY - voituregaucheverteH) ) {
    vie -= 1;
}
freinage.play();
}

function voitureDverteCollision() {
    if ( !(voituredroiteverteX > imgWidth + playerX
|| voituredroiteverteX < imgWidth - voituredroiteverteL
|| voituredroiteverteX < playerX - voituredroiteverteL
|| voituredroiteverteY < playerY - voituredroiteverteH) ) {
    vie -= 1;
}
freinage.play();
}

function voitureGorangeCollision() {
    if ( !(voituregaucheorangeX > imgWidth + playerX
|| voituregaucheorangeX < imgWidth - voituregaucheorangeL
|| voituregaucheorangeX < playerX - voituregaucheorangeL
|| voituregaucheorangeY < playerY - voituregaucheorangeH) ) {
    vie -= 1;
}
freinage.play();
}

function voitureDorangeCollision() {
    if ( !(voituredroiteorangeX > imgWidth + playerX
|| voituredroiteorangeX < imgWidth - voituredroiteorangeL
|| voituredroiteorangeX < playerX - voituredroiteorangeL
|| voituredroiteorangeY < playerY - voituredroiteorangeH) ) {
    vie -= 1;
}
freinage.play();
}

function voitureGbleueCollision() {
    if ( !(voituregauchebleueX > imgWidth + playerX
|| voituregauchebleueX < imgWidth - voituregauchebleueL
|| voituregauchebleueX < playerX - voituregauchebleueL
|| voituregauchebleueY < playerY - voituregauchebleueH) ) {
    vie -= 1;
}
freinage.play();
}

function voitureDbleueCollision() {
    if ( !(voituredroitebleueX > imgWidth + playerX
|| voituredroitebleueX < imgWidth - voituredroitebleueL
|| voituredroitebleueX < playerX - voituredroitebleueL
|| voituredroitebleueY < playerY - voituredroitebleueH) ) {
    vie -= 1;
}
freinage.play();
}

function voitureGgriseCollision() {
    if ( !(voituregauchegriseX > imgWidth + playerX
|| voituregauchegriseX < imgWidth - voituregauchegriseL
|| voituregauchegriseX < playerX - voituregauchegriseL
|| voituregauchegriseY < playerY - voituregauchegriseH) ) {
    vie -= 1;
}
freinage.play();
}

function voitureDgriseCollision() {
    if ( !(voituredroitegriseX > imgWidth + playerX
|| voituredroitegriseX < imgWidth - voituredroitegriseL
|| voituredroitegriseX < playerX - voituredroitegriseL
|| voituredroitegriseY < playerY - voituredroitegriseH) ) {
    vie -= 1;
}
freinage.play();
}


function nuage(){

    ctx.beginPath();
    ctx.drawImage(img10,imgWidth2, 70, 700, 125);
    ctx.drawImage(img10,imgWidth2 - 800, 70, 700, 125);

    ctx.closePath();

    imgWidth2 += scrollSpeed2

    if(imgWidth2 == 800)
    imgWidth2 = 0;

}

function obstacleB(){

    if (frame % 1000  < 100* sVariable){
        ctx.drawImage(img16, 370, 250, 40, 5);
    }
    else if (frame % 1000   < 200* sVariable){
        ctx.drawImage(img16, 330, 270, 80,15 );
    }
    else if (frame % 1000 < 300* sVariable){
        ctx.drawImage(img16, 290, 290, 120, 25);
    }
    else if (frame % 1000 < 400* sVariable){
        ctx.drawImage(img16, 245, 310, 160, 35);
    }
    else if (frame % 1000 < 500* sVariable){
        ctx.drawImage(img16, 200, 330, 200, 45);
    }
    else if (frame % 1000 < 600* sVariable){
        ctx.drawImage(img16, 170, 350, 240, 55);
    }
    else if (frame % 1000 < 700* sVariable){
        ctx.drawImage(img16, 125, 370, 285, 65);
    }
    else if (frame % 1000 < 800* sVariable){
        ctx.drawImage(img16, 70, 390, 325, 75);
    }
    else if (frame % 1000 < 900* sVariable){
        ctx.drawImage(img16, 30, 410, 365, 85);
    }
    else if (frame % 1000 < 1000* sVariable){
        ctx.drawImage(img16, 5, 430, 400, 95);
        barriereGcollision();
    }
    frame ++;
}

function obstacleBD(){

    if (frame % 1000 < 100 * sVariable){
        ctx.drawImage(img20, 390, 250, 40, 5);
    }
    else if (frame % 1000 < 200 * sVariable){
        ctx.drawImage(img20, 390, 270, 80,15 );
    }
    else if (frame % 1000 < 300 * sVariable){
        ctx.drawImage(img20, 400, 290, 120, 25);
    }
    else if (frame % 1000 < 400* sVariable){
        ctx.drawImage(img20, 400, 310, 160, 35);
    }
    else if (frame % 1000 < 500* sVariable){
        ctx.drawImage(img20, 400, 330, 200, 45);
    }
    else if (frame % 1000 < 600* sVariable){
        ctx.drawImage(img20, 410, 350, 240, 55);
    }
    else if (frame % 1000 < 700* sVariable){
        ctx.drawImage(img20, 410, 370, 285, 65);
    }
    else if (frame % 1000 < 800* sVariable){
        ctx.drawImage(img20, 420, 390, 325, 75);
    }
    else if (frame % 1000 < 900* sVariable){
        ctx.drawImage(img20, 420, 410, 365, 85);
    }
    else if (frame % 1000 < 1000* sVariable){
        ctx.drawImage(img20, 420, 430, 400, 95);
        barriereDCollision();
    }
    frame ++;
}

function obstacleT(){

    if (frame % 1000 < 100 * sVariable){
        ctx.drawImage(img17, 380, 250, 40, 5);
    }
    else if (frame % 1000 < 200 * sVariable){
        ctx.drawImage(img17, 330, 270, 80,15 );
    }
    else if (frame % 1000 < 300 * sVariable){
        ctx.drawImage(img17, 290, 290, 120, 25);
    }
    else if (frame % 1000 < 400 * sVariable){
        ctx.drawImage(img17, 245, 310, 160, 35);
    }
    else if (frame % 1000 < 500 * sVariable){
        ctx.drawImage(img17, 200, 330, 200, 45);
    }
    else if (frame % 1000 < 600 * sVariable){
        ctx.drawImage(img17, 170, 350, 240, 55);
    }
    else if (frame % 1000 < 700 * sVariable){
        ctx.drawImage(img17, 125, 370, 285, 65);
    }
    else if (frame % 1000 < 800 * sVariable){
        ctx.drawImage(img17, 70, 390, 325, 75);
    }
    else if (frame % 1000 < 900 * sVariable){
        ctx.drawImage(img17, 30, 410, 365, 85);
    }
    else if (frame % 1000 < 1000 * sVariable){
        ctx.drawImage(img17, 5, 430, 400, 95);
        troncGCollision();
    }
    frame ++;
}

function obstacleTD(){

    if (frame % 1000 < 100 * sVariable){
        ctx.drawImage(img17, 400, 250, 40, 5);
    }
    else if (frame % 1000 < 200 * sVariable){
        ctx.drawImage(img17, 405, 270, 80,15 );
    }
    else if (frame % 1000 < 300 * sVariable){
        ctx.drawImage(img17, 405, 290, 120, 25);
    }
    else if (frame % 1000 < 400 * sVariable){
        ctx.drawImage(img17, 405, 310, 160, 35);
    }
    else if (frame % 1000 < 500 * sVariable){
        ctx.drawImage(img17, 410, 330, 200, 45);
    }
    else if (frame % 1000 < 600 * sVariable){
        ctx.drawImage(img17, 410, 350, 240, 55);
    }
    else if (frame % 1000 < 700 * sVariable){
        ctx.drawImage(img17, 410, 370, 285, 65);
    }
    else if (frame % 1000 < 800 * sVariable){
        ctx.drawImage(img17, 420, 390, 325, 75);
    }
    else if (frame % 1000 < 900 * sVariable){
        ctx.drawImage(img17, 420, 410, 365, 85);
    }
    else if (frame % 1000 < 1000 * sVariable){
        ctx.drawImage(img17, 420, 430, 400, 95);
        troncDCollision();
    }
    frame ++;
}

function obstacleC(){

    if (frame % 1000 < 100 * sVariable){
        ctx.drawImage(img18, 400, 250, 5, 5);
    }
    else if (frame % 1000 < 200 * sVariable){
        ctx.drawImage(img18, 390, 270, 25,15 );
    }
    else if (frame % 1000 < 300 * sVariable){
        ctx.drawImage(img18, 350, 290, 25, 25);
    }
    else if (frame % 1000 < 400 * sVariable){
        ctx.drawImage(img18, 310, 310, 50, 35);
    }
    else if (frame % 1000 < 500 * sVariable){
        ctx.drawImage(img18, 270, 330, 70, 45);
    }
    else if (frame % 1000 < 600 * sVariable){
        ctx.drawImage(img18, 230, 350, 110, 55);
    }
    else if (frame % 1000 < 700 * sVariable){
        ctx.drawImage(img18, 210, 370, 120, 65);
    }
    else if (frame % 1000 < 800 * sVariable){
        ctx.drawImage(img18, 190, 390, 150, 75);
    }
    else if (frame % 1000 < 900 * sVariable){
        ctx.drawImage(img18, 170, 410, 160, 85);
    }
    else if (frame % 1000 < 1000 * sVariable){
        ctx.drawImage(img18, 120, 430, 200, 95);
        chatGCollision();
    }
    frame ++;
}

function obstacleCD(){

    if (frame % 1000 < 100 * sVariable){
        ctx.drawImage(img18, 405, 250, 5, 5);
    }
    else if (frame % 1000 < 200 * sVariable){
        ctx.drawImage(img18, 420, 270, 25,15 );
    }
    else if (frame % 1000 < 300 * sVariable){
        ctx.drawImage(img18, 430, 290, 25, 25);
    }
    else if (frame % 1000 < 400 * sVariable){
        ctx.drawImage(img18, 450, 310, 50, 35);
    }
    else if (frame % 1000 < 500 * sVariable){
        ctx.drawImage(img18, 460, 330, 70, 45);
    }
    else if (frame % 1000 < 600 * sVariable){
        ctx.drawImage(img18, 470, 350, 110, 55);
    }
    else if (frame % 1000 < 700 * sVariable){
        ctx.drawImage(img18, 480, 370, 120, 65);
    }
    else if (frame % 1000 < 800 * sVariable){
        ctx.drawImage(img18, 490, 390, 150, 75);
    }
    else if (frame % 1000 < 900 * sVariable){
        ctx.drawImage(img18, 500, 410, 160, 85);
    }
    else if (frame % 1000 < 1000 * sVariable){
        ctx.drawImage(img18, 510, 430, 200, 95);
        chatDCollision();
    }
    frame ++;
}

function obstacleVGV(){

    if (frame % 1000 < 100 * sVariable){
        ctx.drawImage(img12, 375, 250, 5, 5);
    }
    else if (frame % 1000 < 200 * sVariable){
        ctx.drawImage(img12, 360, 270, 25,15 );
    }
    else if (frame % 1000 < 300 * sVariable){
        ctx.drawImage(img12, 350, 290, 25, 25);
    }
    else if (frame % 1000 < 400 * sVariable){
        ctx.drawImage(img12, 310, 310, 50, 35);
    }
    else if (frame % 1000 < 500 * sVariable){
        ctx.drawImage(img12, 270, 330, 70, 45);
    }
    else if (frame % 1000 < 600 * sVariable){
        ctx.drawImage(img12, 230, 350, 110, 55);
    }
    else if (frame % 1000 < 700 * sVariable){
        ctx.drawImage(img12, 210, 370, 120, 65);
    }
    else if (frame % 1000 < 800 * sVariable){
        ctx.drawImage(img12, 190, 390, 150, 75);
    }
    else if (frame % 1000 < 900 * sVariable){
        ctx.drawImage(img12, 170, 410, 160, 85);
    }
    else if (frame % 1000 < 1000 * sVariable){
        ctx.drawImage(img12, 120, 430, 200, 95);
        voitureGverteCollision();
    }
    frame ++;
}

function obstacleVDV(){

    if (frame % 1000 < 100 * sVariable){
        ctx.drawImage(img12, 410, 250, 5, 5);
    }
    else if (frame % 1000 < 200 * sVariable){
        ctx.drawImage(img12, 420, 270, 25,15 );
    }
    else if (frame % 1000 < 300 * sVariable){
        ctx.drawImage(img12, 430, 290, 25, 25);
    }
    else if (frame % 1000 < 400 * sVariable){
        ctx.drawImage(img12, 440, 310, 50, 35);
    }
    else if (frame % 1000 < 500 * sVariable){
        ctx.drawImage(img12, 450, 330, 70, 45);
    }
    else if (frame % 1000 < 600 * sVariable){
        ctx.drawImage(img12, 470, 350, 110, 55);
    }
    else if (frame % 1000 < 700 * sVariable){
        ctx.drawImage(img12, 480, 370, 120, 65);
    }
    else if (frame % 1000 < 800 * sVariable){
        ctx.drawImage(img12, 490, 390, 150, 75);
    }
    else if (frame % 1000 < 900 * sVariable){
        ctx.drawImage(img12, 500, 410, 160, 85);
    }
    else if (frame % 1000 < 1000 * sVariable){
        ctx.drawImage(img12, 500, 430, 200, 95);
        voitureDverteCollision();
    }
    frame ++;
}

function obstacleVGO(){

    if (frame % 1000 < 100 * sVariable){
        ctx.drawImage(img14, 375, 250, 5, 5);
    }
    else if (frame % 1000 < 200 * sVariable){
        ctx.drawImage(img14, 360, 270, 25,15 );
    }
    else if (frame % 1000 < 300 * sVariable){
        ctx.drawImage(img14, 350, 290, 25, 25);
    }
    else if (frame % 1000 < 400 * sVariable){
        ctx.drawImage(img14, 310, 310, 50, 35);
    }
    else if (frame % 1000 < 500 * sVariable){
        ctx.drawImage(img14, 270, 330, 70, 45);
    }
    else if (frame % 1000 < 600 * sVariable){
        ctx.drawImage(img14, 230, 350, 110, 55);
    }
    else if (frame % 1000 < 700 * sVariable){
        ctx.drawImage(img14, 210, 370, 120, 65);
    }
    else if (frame % 1000 < 800 * sVariable){
        ctx.drawImage(img14, 190, 390, 150, 75);
    }
    else if (frame % 1000 < 900 * sVariable){
        ctx.drawImage(img14, 170, 410, 160, 85);
    }
    else if (frame % 1000 < 1000 * sVariable){
        ctx.drawImage(img14, 120, 430, 200, 95);
        voitureGorangeCollision();
    }
    frame ++;
}

function obstacleVDO(){

    if (frame % 1000 < 100 * sVariable){
        ctx.drawImage(img14, 410, 250, 5, 5);
    }
    else if (frame % 1000 < 200 * sVariable){
        ctx.drawImage(img14, 420, 270, 25,15 );
    }
    else if (frame % 1000 < 300 * sVariable){
        ctx.drawImage(img14, 430, 290, 25, 25);
    }
    else if (frame % 1000 < 400 * sVariable){
        ctx.drawImage(img14, 440, 310, 50, 35);
    }
    else if (frame % 1000 < 500 * sVariable){
        ctx.drawImage(img14, 450, 330, 70, 45);
    }
    else if (frame % 1000 < 600 * sVariable){
        ctx.drawImage(img14, 460, 350, 110, 55);
    }
    else if (frame % 1000 < 700 * sVariable){
        ctx.drawImage(img14, 470, 370, 120, 65);
    }
    else if (frame % 1000 < 800 * sVariable){
        ctx.drawImage(img14, 480, 390, 150, 75);
    }
    else if (frame % 1000 < 900 * sVariable){
        ctx.drawImage(img14, 500, 410, 160, 85);
    }
    else if (frame % 1000 < 1000 * sVariable){
        ctx.drawImage(img14, 500, 430, 200, 95);
        voitureDorangeCollision()
    }
    frame ++;
}

function obstacleVGB(){

    if (frame % 1000 < 100 * sVariable){
        ctx.drawImage(img13, 375, 250, 5, 5);
    }
    else if (frame % 1000 < 200 * sVariable){
        ctx.drawImage(img13, 360, 270, 25,15 );
    }
    else if (frame % 1000 < 300 * sVariable){
        ctx.drawImage(img13, 350, 290, 25, 25);
    }
    else if (frame % 1000 < 400 * sVariable){
        ctx.drawImage(img13, 310, 310, 50, 35);
    }
    else if (frame % 1000 < 500 * sVariable){
        ctx.drawImage(img13, 270, 330, 70, 45);
    }
    else if (frame % 1000 < 600 * sVariable){
        ctx.drawImage(img13, 230, 350, 110, 55);
    }
    else if (frame % 1000 < 700 * sVariable){
        ctx.drawImage(img13, 210, 370, 120, 65);
    }
    else if (frame % 1000 < 800 * sVariable){
        ctx.drawImage(img13, 190, 390, 150, 75);
    }
    else if (frame % 1000 < 900 * sVariable){
        ctx.drawImage(img13, 170, 410, 160, 85);
    }
    else if (frame % 1000 < 1000 * sVariable){
        ctx.drawImage(img13, 120, 430, 200, 95);
        voitureGbleueCollision();
    }
    frame ++;
}

function obstacleVDB(){

    if (frame % 1000 < 100 * sVariable){
        ctx.drawImage(img13, 410, 250, 5, 5);
    }
    else if (frame % 1000 < 200 * sVariable){
        ctx.drawImage(img13, 420, 270, 25,15 );
    }
    else if (frame % 1000 < 300 * sVariable){
        ctx.drawImage(img13, 430, 290, 25, 25);
    }
    else if (frame % 1000 < 400 * sVariable){
        ctx.drawImage(img13, 440, 310, 50, 35);
    }
    else if (frame % 1000 < 500 * sVariable){
        ctx.drawImage(img13, 450, 330, 70, 45);
    }
    else if (frame % 1000 < 600 * sVariable){
        ctx.drawImage(img13, 460, 350, 110, 55);
    }
    else if (frame % 1000 < 700 * sVariable){
        ctx.drawImage(img13, 470, 370, 120, 65);
    }
    else if (frame % 1000 < 800 * sVariable){
        ctx.drawImage(img13, 480, 390, 150, 75);
    }
    else if (frame % 1000 < 900 * sVariable){
        ctx.drawImage(img13, 500, 410, 160, 85);
    }
    else if (frame % 1000 < 1000 * sVariable){
        ctx.drawImage(img13, 500, 430, 200, 95);
        voitureDbleueCollision();
    }
    frame ++;
}

function obstacleVGG(){

    if (frame % 1000 < 100 * sVariable){
        ctx.drawImage(img15, 375, 250, 5, 5);
    }
    else if (frame % 1000 < 200 * sVariable){
        ctx.drawImage(img15, 360, 270, 25,15 );
    }
    else if (frame % 1000 < 300 * sVariable){
        ctx.drawImage(img15, 350, 290, 25, 25);
    }
    else if (frame % 1000 < 400 * sVariable){
        ctx.drawImage(img15, 310, 310, 50, 35);
    }
    else if (frame % 1000 < 500 * sVariable){
        ctx.drawImage(img15, 270, 330, 70, 45);
    }
    else if (frame % 1000 < 600 * sVariable){
        ctx.drawImage(img15, 230, 350, 110, 55);
    }
    else if (frame % 1000 < 700 * sVariable){
        ctx.drawImage(img15, 210, 370, 120, 65);
    }
    else if (frame % 1000 < 800 * sVariable){
        ctx.drawImage(img15, 190, 390, 150, 75);
    }
    else if (frame % 1000 < 900 * sVariable){
        ctx.drawImage(img15, 170, 410, 160, 85);
    }
    else if (frame % 1000 < 1000 * sVariable){
        ctx.drawImage(img15, 120, 430, 200, 95);
        voitureGgriseCollision();
    }
    frame ++;
}

function obstacleVDG(){

    if (frame % 1000 < 100 * sVariable){
        ctx.drawImage(img15, 410, 250, 5, 5);
    }
    else if (frame % 1000 < 200 * sVariable){
        ctx.drawImage(img15, 420, 270, 25,15 );
    }
    else if (frame % 1000 < 300 * sVariable){
        ctx.drawImage(img15, 430, 290, 25, 25);
    }
    else if (frame % 1000 < 400 * sVariable){
        ctx.drawImage(img15, 440, 310, 50, 35);
    }
    else if (frame % 1000 < 500 * sVariable){
        ctx.drawImage(img15, 450, 330, 70, 45);
    }
    else if (frame % 1000 < 600 * sVariable){
        ctx.drawImage(img15, 460, 350, 110, 55);
    }
    else if (frame % 1000 < 700 * sVariable){
        ctx.drawImage(img15, 470, 370, 120, 65);
    }
    else if (frame % 1000 < 800 * sVariable){
        ctx.drawImage(img15, 480, 390, 150, 75);
    }
    else if (frame % 1000 < 900 * sVariable){
        ctx.drawImage(img15, 500, 410, 160, 85);
    }
    else if (frame % 1000 < 1000 * sVariable){
        ctx.drawImage(img15, 500, 430, 200, 95);
        voitureDgriseCollision()
    }
    frame ++;
}





//Si temps restant POWER UPS

/*creer des powerups 3-4 (essayer que certains permettent de détruire les obstacles)
sinon invincibilité, vitesse ralentie, point X2, +1 vie.
creer systeme de collision et animation apres collision pour les power ups*/


//creer page de lancement

// voir pour creer une video de fin pour l'atteinte d'un certain score


// slides de presentation



function blanche(){

        if (frame % 30 < 10){
            ctx.drawImage(img7, 400, 250, 10, 250);
        }
        else if (frame % 30 < 20){
            ctx.drawImage(img8, 400, 270, 10, 250);
        }
        else if (frame % 30 < 30){
            ctx.drawImage(img9, 400, 290, 10, 250);
        }
        frame ++;
}

function drawEverything () {
    ctx.globalCompositeOperation="";
    ctx.beginPath();
        ctx.drawImage(img2,0,0, 800, 250)
        ctx.closePath();

        ctx.globalCompositeOperation="";
        ctx.beginPath();
        ctx.drawImage(img4,0,251);
        ctx.closePath();

        ctx.globalCompositeOperation="";
        ctx.beginPath();
        ctx.drawImage(img5,0,195);
        ctx.closePath();

        ctx.globalCompositeOperation="";
        ctx.beginPath();
        ctx.drawImage(img3,0,230);
        ctx.closePath();


        blanche();
        nuage();

        var funcs = [obstacleB, obstacleBD,
             obstacleT, obstacleTD,
             obstacleC, obstacleCD, obstacleVGV, obstacleVDV,
             obstacleVGO, obstacleVDO, obstacleVGB, obstacleVDB,
             obstacleVGG, obstacleVDG];
        if (frame % 1000 === 10) {
            let rand = Math.floor(Math.random() * funcs.length)
            window.randomFunction = funcs[rand]
            score += 100;
        }


        function drawScore() {
            ctx.font = "16px Arial";
            ctx.fillStyle = "#000000";
            ctx.fillText("SCORE: "+score, 5, 20);
        }

        function drawLife() {
            ctx.font = "16px Arial";
            ctx.fillStyle = "#000000";
            ctx.fillText("LIFE:"+vie,700, 20);
        }

        function difficulty(){
    if( score == 500 ){
    sVariable = 0.6;
}else if (score == 1000){
    sVariable = 0.7;
}else if (score == 1500){
    sVariable = 0.8;
}else if (score == 2000){
    sVariable = 0.9;
}else if (score == 2500){
    sVariable = 1;
}
  }

  function clearCanvas(){
    ctx.clearRect(0, 0, 800, 500);
    }

  function gameOver() {
    if (vie <= 0) {
        audioLose.play();
        clearCanvas();
        // lancement vidéo puis
        ctx.font = "188px Crimes";
        ctx.fillStyle = "red";
        ctx.fillText("YOU LOSE !", 50, 300);
        // le faire jouer une seule fois.
    }
}

        drawLife();
        drawScore();
        difficulty();


        ctx.globalCompositeOperation="";
        ctx.beginPath();
        ctx.drawImage(img6,imgWidth,imgHeigthJump, 100, 100);
        ctx.closePath();


        window.randomFunction();
        gameOver();


}


document.addEventListener("keydown", function (event){
    let speedX = 10
    let speedY = 120
    if(event.keyCode == 37){
        imgWidth -= speedX
    }
    else if (event.keyCode == 39){
        imgWidth += speedX
    }
    else if (event.keyCode == 32){
        imgHeigthJump -= imgHeigthJump < 400 ? 0 : speedY
        }
    });
    document.addEventListener("keyup", function (event){
        let speedY = 120;
        if(event.keyCode == 32){
            imgHeigthJump += speedY
            audioB1.play();
        }
    })



    // function youWin() {
    //     if (score > 3000){
    //         clearCanvas();
    //         audio.pause();
    //         //lancement vidéo puis
    //         ctx.font = "20px Arial";
    //         ctx.textAlign = "center";
    //         ctx.fillText("YOU WIN PAPY!", 400, 250);
    //     }
    // }









}
