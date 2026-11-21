import {decodeRequest} from './codec.js';
self.onmessage=async({data})=>{
 try{
  const result=await decodeRequest(data),transfer=result.bytes?[result.bytes]:result.models.flatMap(m=>[m.position,m.normal,m.uv,m.index]);
  self.postMessage({id:data.id,...result},transfer);
 }catch(error){self.postMessage({id:data.id,error:error.message});}
};
self.postMessage({ready:true});
