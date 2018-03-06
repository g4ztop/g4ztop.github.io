var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 1, 1100 );

var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.DodecahedronGeometry( 40, 5);
var texture = new THREE.ImageUtils.loadTexture('orangeee.png');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(4,4);
var material = new THREE.MeshLambertMaterial( { map: texture});
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.rotation.x = -0;
cube.scale.x = -1;

var geometry2 = new THREE.DodecahedronGeometry( 40, 5);
var texture = new THREE.ImageUtils.loadTexture('orangeee.png');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(2,2);
var material = new THREE.MeshLambertMaterial( { map: texture});
var cube2 = new THREE.Mesh( geometry, material );
scene.add( cube2 );
cube2.rotation.x = -0;
cube2.scale.x = -1;

camera.position.z = 40;

var light = new THREE.AmbientLight( 0xFFFF00, 1 );
light.position.set( 0, -1, 0 );
scene.add( light );




var render = function () {
  requestAnimationFrame( render );
  cube.rotation.y += .001;
  cube.rotation.x += .001;
  cube2.rotation.y += -.001;

  camera.updateProjectionMatrix();

  renderer.render(scene, camera);

};

render();