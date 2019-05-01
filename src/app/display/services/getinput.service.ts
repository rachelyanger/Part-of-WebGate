import { Injectable } from '@angular/core';
import { Geometry } from '../input';
@Injectable({
  providedIn: 'root'
})
export class GetinputService {

  constructor() { this.init()}
  a = new Geometry();
 
  init(){
    
    this.a.world = {
      shape:{
        size:[40,40,40],
      },
      appearance:{
        color:'white',
        visible: true ,
        line_width: 1 ,
        force_wireframe: true ,
      },
    };
    this.a.scanner = {
      base:{
        shape:{
          rmin: 13,
          rmax: 14.5,
          height: 8,
          phi_start: 0,
          delta_phi: 2*Math.PI,
        },
        appearance:{
          color:'white',
          visible: true ,
          line_width: 1 ,
          force_wireframe: true ,
        },
        translation:{
          value: [0, 0, 0]
        },
        rotation:{
          axis : [0,0,1],
          angle : 0,
        },
        repeat:{
          repeat_number: [1, 1, 1],
          repeat_vector: [0, 0, 0],
        }
      },
      level1:{
        shape:{
          size:[1,1.9,7.66],
        },
        appearance:{
          color:'white',
          visible: true ,
          line_width: 2 ,
          force_wireframe: true ,
        },
        translation:{
          value: [13.5, 0, 0]
        },
        rotation:{
          axis : [0,0,1],
          angle : 0,
        },
        repeat:{
          repeat_number: 42,
          point1: [0,0,1],
          point2: [0,0,0],
          first_angle:  0,
          angular_span: 2*Math.PI,
          modulo_number: 1,
          z_shift: [0, 0, 0, 0, 0, 0, 0, 0],
          auto_rotation: true,
        }
      },
      level2:{
        shape:{
          size:[0,0,0],
        },
        appearance:{
          color:'white',
          visible: true ,
          line_width: 1 ,
          force_wireframe: true ,
        },
        translation:{
          value: [0, 0, 0]
        },
        rotation:{
          axis : [0,0,1],
          angle : 0,
        },
        repeat:{
          repeat_number: [1, 1, 1],
          repeat_vector: [0, 0, 0],
        }
      },
      level3:{
        shape:{
          size:[1,1.9,1.9],
        },
        appearance:{
          color:'blue',
          visible: true ,
          line_width: 1 ,
          force_wireframe: true ,
        },
        translation:{
          value: [0, 0, 0]
        },
        rotation:{
          axis : [0,0,1],
          angle : 0,
        },
        repeat:{
          repeat_number: [1,1,4],
          repeat_vector: [0, 0, 1.92],
        }
      },

      level4:[{
        shape:{
          size:[1,0.22,0.22]
        },
        appearance:{
          color:'red',
          visible: true ,
          line_width: 1 ,
          force_wireframe: true ,
        },
        translation:{
          value: [0, 0, 0]
        },
        rotation:{
          axis : [0,0,1],
          angle : 0,
        },
        repeat:{
          repeat_number: [1, 8, 8],
          repeat_vector: [1, 0.24, 0.24],
        }
        }],
      level5:[{
        shape:{
          size:[1,0.22,0.22]
        },
        appearance:{
          color:'yellow',
          visible: true ,
          line_width: 1 ,
          force_wireframe: false,
        },
        translation:{
          value: [0, 0, 0]
        },
        rotation:{
          axis : [0,0,1],
          angle : 0,
        },
        repeat:{
          repeat_number: [1, 1, 1],
          repeat_vector: [0, 0, 0],
        }
      }],
    };

  }
}
