new p5((p) => {
  let orange, ivy;
  let x = [],
      y = [],
    segNum = 40,
    segLength = 18;

  let m = -450;
  let k = -400;
  let j = -350;
  let h = -300;
  let g = -250;
  let f = -200;
  let d = -100;
  let c = -50;
  let b = 0;
  let e = -150;

  for (let i = 0; i < segNum; i++) {
    x[i] = 0;
    y[i] = 0;
}

p.preload = () => {
    orange = p.loadImage("/img/bg/orange.png");
    ivy = p.loadImage("/img/bg/invy.png");
}

  p.setup = () => {
    // Create canvas with full window dimensions
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    // Remove the style settings since we're handling it in CSS
    p.background(0, 0, 255); // Set background to match body color
  }

  p.windowResized = () => {
    // Ensure canvas resizes with window
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

  p.draw = () => {
      dragSegment(0, p.mouseX, p.mouseY);
      for(let i=0; i<x.length-5; i++) {
        dragSegment(i+1, x[i], y[i]);
    }
}

function dragSegment(i, xin, yin) {
      let dx = xin - x[i];
      let dy = yin - y[i];
      let angle = p.atan2(dy, dx);
      x[i] = xin - p.cos(angle) * segLength;
      y[i] = yin - p.sin(angle) * segLength;
    segment(x[i], y[i], angle);
}

function segment(x, y, a) {
    m = m - 0.001;
    k = k - 0.001;
    j = j - 0.001;
    h = h - 0.001;
    g = g - 0.001;
    f = f - 0.001;
    e = e - 0.001;
    d = d - 0.001;
    c = c - 0.001;
    b = b - 0.001;
    
      p.push();
      p.translate(x, y);
      p.rotate(a);
      let img = ivy;
      if (p.mouseIsPressed){
        img = orange;
    } else {
        img = ivy;
    }
      p.image(img, m,m);
      p.image(img,k,k);
      p.image(img,j,j);
      p.image(img,h,h);
      p.image(img,g,g);
      p.image(img, f, f);
      p.image(img,e,e);
      p.image(img,d,d);
      p.image(img,c,c);
      p.image(img,b,b);

      p.pop();
    
    if(m<=-500) m=0;
    if(k <= -500) k = 0;
    if(j<=-500) j = 0;
    if(h<=-500) h = 0;
    if(g <= -500) g = 0;
    if(f <= -500) f = 0;
    if(e <= -500) e = 0;
    if(b <= -500) b = 0;
    if(c <= -500) c = 0;
    if (d<= -500) d = 0;
}
});
