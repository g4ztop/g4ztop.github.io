import * as THREE from './vendor/three.module.js';
import {AssetStore} from './assets.js';
const renderer=new THREE.WebGLRenderer({antialias:true});renderer.setSize(innerWidth,innerHeight*.9);renderer.setPixelRatio(1);document.body.append(renderer.domElement);renderer.outputColorSpace=THREE.SRGBColorSpace;
const camera=new THREE.OrthographicCamera(-10.8,10.8,5.2,-5.2,.1,100);camera.position.set(0,15,24);camera.lookAt(0,0,0);
let store=null;const scene=new THREE.Scene();scene.background=new THREE.Color('#121312');let busy=false;
async function show(before=false){
 if(busy)return;busy=true;const status=document.querySelector('#state');status.textContent='Loading…';
 for(const child of [...scene.children]){scene.remove(child);child.material?.dispose();}store?.dispose();store=new AssetStore(renderer);await store.initialize();
 if(before)store.manifest=await(await fetch('./uv-before.json')).json();
 const tier=document.querySelector('#tier').value;await Promise.all([0,1,2,3].map(lod=>store.loadLod(lod)));const maps=await store.loadTextures(tier);
 for(let lod=0;lod<4;lod++)for(let v=0;v<8;v++){
  const geometry=store.geometry(v,lod),material=new THREE.MeshBasicMaterial({map:maps[v+(geometry.userData.bakedUv?8:0)],side:THREE.DoubleSide});const flower=new THREE.Mesh(geometry,material);flower.position.set((v-3.5)*2.6,(1.5-lod)*2.8-1,0);flower.rotation.y=.3;scene.add(flower);
 }
 renderer.render(scene,camera);status.textContent=(before?'Before':'Rebaked')+' · '+tier+' · Ready';busy=false;
}
document.querySelector('#old').onclick=()=>show(true);document.querySelector('#new').onclick=()=>show(false);document.querySelector('#tier').onchange=()=>show(false);void show();
