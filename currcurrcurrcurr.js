(){
  var x = [],
  y = [],
  segNum = 40,
  segLength = 18;
  m = -450;
  k = -400;
  k = -400;
  k = -400;
  j = -350;
  h = -300;
  g = -250;
  f = -200;
  d = -100;
  c = -50;
  b = 0;
  e = -150;

for (var i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function preload(){
	orange = loadImage("orange.png");
}
function setup(){
	createCanvas(1000, 1000);
	strokeWeight(9);
  	stroke(255,0,0);

}

function draw(){
	background(255,0,0);
	dragSegment(0, mouseX, mouseY);
  for( var i=0; i<x.length-5; i++) {
    dragSegment(i+1, x[i], y[i]);
  }
}

function dragSegment(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  m = m -.01;
  k = k - .01;
  j = j - .01;
  h = h - 0.01;
  g = g - .01;
  f = f - 0.01;
  e = e - .01;
  d = d - .01;
  c = c - .01;
  b = b - .01;
  push();
  translate(x, y);
  rotate(a);
  image(orange, m,m);
  image(orange,k,k);
  image(orange,j,j);
  image(orange,h,h);
  image(orange,g,g);
  image(orange, f, f);
  image(orange,e,e);
  image(orange,d,d);
  image(orange,c,c);
  image(orange,b,b);

  pop();
  if(m<=-500){
  	m=0;
  }
  if(k <= -500){
  	k = 0;
  }
  if(j<=-500){
  	j = 0;
  }
  if(h<=-500){
  	h = 0;
  }
  if(g <= -500){
  	g = 0;
  }
  if(f <= -500){
  	f = 0;
  }
  if(e <= -500){
  	e = 0;
  }
  if(b <= -500){
  	b = 0;
  }
  if(c <= -500){
  	c = 0;
  }
  if (d<= -500){
  	d = 0;
  }
}
}