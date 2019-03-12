
var canvas = document.getElementById('outrun');
var ctx = canvas.getContext('2d');

var img = new Image();
img.src="bandecouleurherbe.svg"

var img2 = new Image();
img2.src="bandeherbe1.svg"


var backgroundImage = {
    img: img, img2,
    x: 0,
    y: 400,
    speed: +1,

    move: function() {
        this.y += this.speed;
        this.y >400;
    },
    draw: function(){
        if(this.speed <0){
        ctx.drawImage(this.img, this.y, 0);
        //ctx.drawImage(this.img, this.y + canvas.height, 0);
        } else {
        ctx.drawImage(this.img, 0, this.y - this.img.height);
        //ctx.drawImage(this.img2, 0, this.y - (4*this.img2.height));
        }
        }
    }

    function updateCanvas(){
        backgroundImage.move();
        ctx.clearRect(0,0, canvas.width, canvas.height);
        backgroundImage.draw();



        requestAnimationFrame(updateCanvas);
    }
    img.onload = updateCanvas;





















//function updateCanvas(){
    //speed += 1;
    //speed1 += 1;
    //clearCanvas();

    //ciel
    //ctx.beginPath();
// ctx.fillStyle = "blue" ;
// ctx.fillRect(0, 0, 800, 250);
// ctx.closePath();

//herbe
// ctx.beginPath();
// let img = new Image();
// img.src = "bandecouleurherbe.svg"
// ctx.closePath();


// window.requestAnimationFrame(updateCanvas);
//   }
//   img.onload= function() {
//     ctx.drawImage(img,0, 250);
// }
// }
//  window.requestAnimationFrame(updateCanvas);
//  draw();

// function clearCanvas() {
//     ctx.clearRect(0,0,800,500);
//   }

  //function updateCanvas(){
    //speed += 1;
    //speed1 += 1;
    //clearCanvas();

//ctx.fillStyle = "rgb(0,255,0)";
//ctx.fillRect(0,speed1, 800, 25);

//ctx.moveTo(0, 275);
//ctx.fillStyle = "green";
//ctx.fillRect(0, 275,speed, 800, 25);

    //window.requestAnimationFrame(updateCanvas);
  //}

 // window.requestAnimationFrame(updateCanvas);
//ciel bleu du fond
//ctx.beginPath();
//ctx.fillStyle = "rgb(0, 127, 255)";
//ctx.fillRect(0, 0, 800, 250);
//ctx.closePath();

//ctx.beginPath();
//ctx.fillStyle = "#00C00";
//ctx.fillRect(0, 260, 800, 250);
//ctx.closePath();


//herbe des bas cotés test
//ctx.beginPath();
//ctx.fillStyle = "rgb(124, 252, 0)";
//ctx.moveTo(0, 250);
//ctx.fillRect(0, 250, 800, 250);
//ctx.closePath();

//Nuage par dessus fond
//ctx.globalCompositeOperation='source-atop'
//let img = new Image();
//img.src = "nuagesvg3.svg";
//imgScale = 100/50;

//Route
//ctx.globalCompositeOperation="source-atop";
//let imgr = new Image();
//imgr.src="road.svg";
//imgScale = 800/500;

