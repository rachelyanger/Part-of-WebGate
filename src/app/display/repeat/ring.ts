import { Object3D } from 'three';


export class Ring {
    constructor() { }

    repeat(n:number,point1:number[],first_angle:number,angular_span:number,modulo_number:number,
      z_shift:number[],auto_rotation:boolean,a:any,objold1:Object3D,b:any,objold2:Object3D):Object3D{
      let layer=new Object3D();
      let layerin = new Object3D();//里层
      var x:number;

      //判断旋转的半径
      for(let i=0;i<3;i++){
        if(a.translation.value[i]!==0)
         x = a.translation.value[i];
      };
      //判断旋转轴
      if(point1[0]!==0){//绕x轴，初始位移必须是y轴
        for(let k=0;k<n;k++){
          let objnew1= objold1.clone();
          objnew1.position.set(0,x*Math.cos(first_angle+1/n*k*angular_span),x*Math.sin(first_angle+1/n*k*angular_span));
          if(auto_rotation){objnew1.rotation.x = first_angle+1/n*k*angular_span;}
          layer.add(objnew1);
         }
      }
      else if(point1[1]!==0){//绕y轴，初始位移x
        for(let k=0;k<n;k++){
          let objnew1= objold1.clone();
          objnew1.position.set(x*Math.cos(first_angle+1/n*k*angular_span),0,-x*Math.sin(first_angle+1/n*k*angular_span));
          if(auto_rotation){objnew1.rotation.y = -first_angle+1/n*k*angular_span;}
          layer.add(objnew1);
         }
      }
      else{
        for(let j=0;j<modulo_number;j++){
          let objnew1= objold1.clone();
          objnew1.position.set(x*Math.cos(first_angle+1/n*j*angular_span),x*Math.sin(first_angle+1/n*j*angular_span),z_shift[j]);
          if(auto_rotation){objnew1.rotation.z = first_angle+1/n*j*angular_span;}
          layerin.add(objnew1);
        }
        for(let k=0;k<n/modulo_number;k++){
          let objnew = layerin.clone();
          objnew.rotation.z = first_angle+modulo_number/n*k*angular_span;
          layer.add(objnew);
        }

      }

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
