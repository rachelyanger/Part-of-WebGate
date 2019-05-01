import { Object3D, Box3 } from 'three';
export class Linear {
    constructor(){}
    repeat(repeat_number: number,repeat_vector:number[],auto_center: boolean,a:any,objold1:Object3D,b?:any,objold2?:Object3D){
        let layerin = new Object3D();
        let layer = new Object3D();
        for(let i=0;i<repeat_number;i++){
            let objnew1 = objold1.clone();
            
            if(repeat_vector[0]!==0){
                objnew1.translateX(repeat_vector[0]*i);
            }
            else if(repeat_vector[1]!==0){
                objnew1.translateY(repeat_vector[1]*i);
            }
            else {
                objnew1.translateZ(repeat_vector[2]*i);
          }
          layerin.add(objnew1);
        }
        //获取当前几何组合体中心并校正
        if(auto_center){
          let box = new Box3();
          let center = box.getCenter(box.expandByObject(layerin).max);
          layerin.position.set(-center.x,-center.y,-center.z);
        }
         layer.add(layerin);
        //下一层轮廓
        if(objold2){
            let objnew2 = objold2.clone();
            layer.add(objnew2);
            layer.translateX(b.translation.value[0]);
            layer.translateY(b.translation.value[1]);
            layer.translateZ(b.translation.value[2]); 
            switch(b.rotation.axis){
              case [1,0,0] :{
                layer.rotation.x = b.rotation.angle;
                return layer; 
              }
              case [0,1,0] :{
                layer.rotation.y = b.rotation.angle;
                return layer; 
              }
              case [0,0,1]:{
                layer.rotation.z = b.rotation.angle;
                return layer; 
              }
            }
          }
        return layer;
    }
}
