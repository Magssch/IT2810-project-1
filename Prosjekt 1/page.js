$(document).ready(function() {

  let doc = false;

  $(".d").click(
  function() {
    if(!doc) {
        $(".doc").css("margin-top", "10");
        $(".doc").css("height", "970");
      doc = true;
    } else {
        $(".doc").css("margin-top", "0");
        $(".doc").css("height", "0");
      doc = false;
    }
  });

  $("#canvas").on('click',
  function() {
    newDraw();
    clickCount += 1;
  });

  $("#canvas").on('mouseout',
  function() {
    initDraw(false);
    clickCount = 1;
  });

    $("#canvas").on('mouseover',
    function() {
      initDraw(true);
    });

    initDraw();

function getRand(min, max) {
  return Math.random() * (max - min) + min;
}


let clickCount = 1;

function initDraw(hover) {
var canvas = document.getElementById("canvas");
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var grd = ctx.createLinearGradient(0, 0, 200, 0);
  if(!hover)
  { grd.addColorStop(0, "blue");
    grd.addColorStop(1, "#89e00f"); }
  else
  { grd.addColorStop(0, "red");
    grd.addColorStop(1, "purple"); }

  ctx.fillStyle = grd;
  ctx.fillRect(10, 35, 200, 100);
  ctx.clearRect(45, 15, 80, 60);
  ctx.strokeRect(50, 50, 50, 50);

  ctx.beginPath();
  if(!hover) {ctx.fillStyle = '#FFA500';}else{ctx.fillStyle = 'cyan';}
  ctx.moveTo(305, 320);
  if(!hover) {ctx.lineTo(200, 175);}else{ctx.lineTo(100, 75);}
  ctx.lineTo(300, 25);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  if(!hover) {ctx.fillStyle = 'pink';}else{ctx.fillStyle = '#9bf442';}
  ctx.moveTo(100, 320);
  ctx.lineTo(100, 275);
  ctx.lineTo(300, 25);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  if(!hover) {ctx.arc(400,300,50,2,2*Math.PI);}else{ctx.arc(400,200,50,0.5,1.5*Math.PI);}
  if(!hover) {ctx.fillStyle = 'red';}else{ctx.fillStyle = 'blue';}
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  if(!hover) {ctx.fillStyle = 'yellow';}else{ctx.fillStyle = 'orange';}
  ctx.moveTo(400, 10);
  ctx.lineTo(400, 60);
  ctx.lineTo(450, 25);
  ctx.lineTo(480, 100);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  if(!hover) {ctx.fillStyle = 'red';}else{ctx.fillStyle = 'gray';}
  ctx.moveTo(500, 120);
  ctx.lineTo(200, 200);
  ctx.lineTo(350, 75);
  ctx.lineTo(480, 100);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(200,350,100,4,2*Math.PI);
  if(!hover) {ctx.fillStyle = 'magenta';}else{ctx.fillStyle = 'black';}
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(400,150,50,7,1*Math.PI);
  if(!hover) {ctx.fillStyle = 'green';}else{ctx.fillStyle = 'yellow';}
  ctx.fill();
  ctx.closePath();

  if(!hover) {ctx.fillStyle = 'gray';}else{ctx.fillStyle = 'teal';}
  ctx.fillRect(20,300,170,100);

  if(hover) {
    ctx.font = "20px Bebas Neue";
    ctx.fillStyle = "black";
    ctx.fillText("Trykk på meg ;-)", 150, 210);
  }

}
}

function newDraw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      for(let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.arc(getRand(1,500),getRand(1,500),getRand(8,60),getRand(0,15),getRand(0.5,2)*Math.PI);
            ctx.fillStyle = 'rgb('+ Math.round(getRand(0,255)) +','+Math.round(getRand(0,255))+',' + Math.round(getRand(0,255)) + ')';

            ctx.fill();
            ctx.closePath();
    }

    for(let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.fillRect(getRand(1,500), getRand(1,500), getRand(1,200), getRand(1,200));
            ctx.fillStyle = 'rgb('+ Math.round(getRand(0,255)) +','+Math.round(getRand(0,255))+',' + Math.round(getRand(0,255)) + ')';

            ctx.fill();
            ctx.closePath();
    }

    switch(clickCount) {
      case 1:
        ctx.fillStyle = "black";
        ctx.fillText("En gang til!", 100, 110);
        break;
      case 2:
        ctx.fillStyle = "black";
        ctx.fillText("Nå snakker vi!", 300, 310);
        break;
      case 3:
      ctx.fillStyle = "black";
      ctx.fillText("Wow!", 300, 60);
        break;
      case 4:
      ctx.fillStyle = "black";
      ctx.fillText("Fortsett slik!", 30, 370);
        break;
    }
  }
}

});
