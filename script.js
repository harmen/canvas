function drawFlag() {
  var flag = document.getElementById('flag');
  var context = flag.getContext('2d');

  context.fillStyle = 'red';
  context.fillRect(0,0, 250, 50);

  context.fillStyle = 'white';
  context.fillRect(0, 50, 250, 50);

  context.fillStyle = 'blue';
  context.fillRect(0, 100, 250, 50);
}

function drawCircle() {
  var circle = document.getElementById('circle');
  var context = circle.getContext('2d');

  context.beginPath();
  context.arc(75, 75, 50, 0, 2 * Math.PI);

  context.textAlign = "center";
  context.fillText("hello world", circle.width/2, circle.height/2);
  
  context.stroke();
}

function drawPyramid() {
  var pyramid = document.getElementById('pyramid');
  var context = pyramid.getContext('2d');

  context.beginPath();
  context.moveTo(75, 0);

  context.lineTo(0, 150);
  context.lineTo(150, 150);
  context.lineTo(75, 0);

  context.stroke();

  context.fillStyle = "pink";
  context.fill();
}


drawPyramid();
drawCircle();
drawFlag();