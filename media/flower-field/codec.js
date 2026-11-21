import {MeshoptDecoder} from './vendor/meshopt_decoder.js';
export async function decodeRequest(data){
 await MeshoptDecoder.ready;
 if(data.kind==='environment'){
  const bytes=new Uint8Array(data.count*8);MeshoptDecoder.decodeVertexBuffer(bytes,data.count,8,new Uint8Array(data.bytes));return {bytes:bytes.buffer};
 }
 const source=new Uint8Array(data.bytes),models=[];
 for(const m of data.models){
  const packed=new Uint8Array(m.vertices*16),index=new Uint16Array(m.indexCount);
  MeshoptDecoder.decodeVertexBuffer(packed,m.vertices,16,source.subarray(m.vertexOffset,m.vertexOffset+m.vertexBytes));
  MeshoptDecoder.decodeIndexBuffer(new Uint8Array(index.buffer),m.indexCount,2,source.subarray(m.indexOffset,m.indexOffset+m.indexBytes));
  const input=new DataView(packed.buffer),position=new Float32Array(m.vertices*3),normal=new Int16Array(m.vertices*3),uv=new Uint16Array(m.vertices*2);
  for(let i=0;i<m.vertices;i++){
   for(let c=0;c<3;c++){position[i*3+c]=m.min[c]+input.getUint16(i*16+c*2,true)/65535*m.scale[c];normal[i*3+c]=input.getInt16(i*16+6+c*2,true);}
   uv[i*2]=input.getUint16(i*16+12,true);uv[i*2+1]=input.getUint16(i*16+14,true);
  }
  models.push({variant:m.variant,lod:m.lod,position:position.buffer,normal:normal.buffer,uv:uv.buffer,index:index.buffer});
 }
 return {models};
}
