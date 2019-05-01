import { Injectable } from '@angular/core';
import { Object3D } from 'three';
import { Cubicarray } from '../repeat/cubicarray';
import { Generic } from '../repeat/generic';
import { Linear } from '../repeat/linear';
import { Quadrant } from '../repeat/quadrant';
import { Sphere } from '../repeat/sphere';
import { Ring } from '../repeat/ring';

@Injectable({
  providedIn: 'root'
})
export class RepeatService {

  constructor() { }
  createntity(a:any,objold1:Object3D,b?:any,objold2?:Object3D){
    let entity :Object3D;
    switch(Object.keys(a.repeat).length){
      case 2 :{
        if(Object.keys(a.repeat)[0]=='repeat_number'){
          entity = new Cubicarray().repeat(a.repeat.repeat_number,a.repeat.repeat_vector,a,objold1,b,objold2);
          return entity;
        }
        else{
          entity = new Generic().repeat(a.repeat.placements_filename,a.repeat.relative_translation,a,objold1,b,objold2);
          return entity;
        }
      };
      case 3 :{
        entity = new Linear().repeat(a.repeat.repeat_number,a.repeat.repeat_vector,a.repeat.auto_center,a,objold1,b,objold2);
        return entity;
      };
      case 4 :{
        entity = new Quadrant().repeat(a.repeat.line_number,a.repeat.orientation,a.repeat.copy_spacing,a.repeat.max_range,objold1);
        return entity;
      };
      case 5 :{
        entity = new Sphere().repeat(a.repeat.radius,a.repeat.repeat_number_with_theta,a.repeat.repeat_number_with_phi,a.repeat.theta_angle,a.repeat.phi_angle,a,objold1,b,objold2);
        return entity;
      };
      case 8 :{
        entity = new Ring().repeat(a.repeat.repeat_number,a.repeat.point1,a.repeat.first_angle,a.repeat.angular_span,a.repeat.modulo_number,a.repeat.z_shift,a.repeat.auto_rotation,a,objold1,b,objold2);
        return entity;
      };
    }
  }
}

