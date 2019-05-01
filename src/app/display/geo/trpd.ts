import { Mesh, MeshBasicMaterial, LineDashedMaterial ,LineSegments, EdgesGeometry, Object3D, BoxGeometry, Vector3 } from 'three';
import { Colors } from './color';
export class TRPD {
    
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    z: number;
    box_size: number[];
    box_pos: number[];

    color:number;
    linewidth:number;
    flag:boolean;
    visible:boolean;
    entity:Object3D; 
    constructor(            
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        z: number,
        box_size: number[],
        box_pos: number[],

        color:string = 'white',
        wireframe_flag:boolean = true,
        linewidth:number = 1,
        visible:boolean = true,
        ){
          this.x1 = x1;
          this.x2 = x2;
          this.y1 = y1;
          this.y2 = y2;
          this.z = z;
          this.box_pos = box_pos;
          this.box_size = box_size;
                    
          this.linewidth = linewidth;
          this.flag = wireframe_flag;
          this.visible = visible;
          if(this.visible){
            this.color = new Colors().selectcolor(color);
          }
          else{this.color = 0x000000;}
          ///////
          let smat = new MeshBasicMaterial({color:this.color,polygonOffset: true,polygonOffsetFactor: 1,polygonOffsetUnits: 1});
          let geometry = new BoxGeometry(1,1,1);
          geometry.vertices = [new Vector3(this.x1/2,this.y2/2,this.z/2),
                               new Vector3(this.x1/2,this.y2/2,-this.z/2),
                               new Vector3(this.x2/2,-this.y2/2,this.z/2),
                               new Vector3(this.x2/2,-this.y2/2,-this.z/2),
                               new Vector3(-this.x1/2,this.y1/2,-this.z/2),
                               new Vector3(-this.x1/2,this.y1/2,this.z/2),
                               new Vector3(-this.x2/2,-this.y1/2,-this.z/2),
                               new Vector3(-this.x2/2,-this.y1/2,this.z/2)];

          let trapezoidal = new Mesh(geometry,smat);//这里只是梯形
          ///这里需要减去一个box
          let trpd = trapezoidal;
          let lmat = new LineDashedMaterial({color:this.color,linewidth: this.linewidth,scale:2,gapSize:1.5,});
          let wireframe = new LineSegments( new EdgesGeometry(trpd.geometry), lmat);
          wireframe.computeLineDistances();

          if(this.flag)
            this.entity = wireframe;
          else this.entity  = trpd;
         

        
        }
      
      }