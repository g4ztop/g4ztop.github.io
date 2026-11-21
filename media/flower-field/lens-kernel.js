// The approved 16-point golden-angle disk, calculated once rather than per pixel.
export function diskKernel(count=16){return Array.from({length:count},(_,i)=>{const f=i+.5,a=f*2.399963,r=Math.sqrt(f/count);return [Math.cos(a)*r,Math.sin(a)*r];});}
export function depthAtDistance(distance,near,far){return (far-near*far/distance)/(far-near);}
export function focusSamples(count=16){
 return diskKernel(count).map(([x,y])=>`{
  vec2 sampleUv=vUv+vec2(${x.toFixed(10)},${y.toFixed(10)})*radiusUv;
  float w=texture2D(depth,sampleUv).r<foregroundDepth?.25:1.;
  col+=texture2D(image,sampleUv).rgb*w;weight+=w;
 }`).join('\n');
}
