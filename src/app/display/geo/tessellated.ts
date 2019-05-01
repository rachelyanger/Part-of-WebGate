import { Mesh, MeshBasicMaterial, LineDashedMaterial ,LineSegments, EdgesGeometry, Object3D, MeshNormalMaterial } from 'three';
import { Colors } from './color';
//import { STLLoader } from 'three-stl-loader';
export class Tessellated {
    
    path_to_vertices_file: string;

    color:number;
    linewidth:number;
    flag:boolean;
    visible:boolean;
    entity:Object3D; 
    constructor(            
        path_to_vertices_file: string,

        color:string = 'white',
        wireframe_flag:boolean = true,
        linewidth:number = 1,
        visible:boolean = true,
        ){
          this.path_to_vertices_file = path_to_vertices_file;
          
          this.linewidth = linewidth;
          this.flag = wireframe_flag;
          this.visible = visible;
          if(this.visible){
            this.color = new Colors().selectcolor(color);
          }
          else{this.color = 0x000000;}
          ///////
          // var loader = new STLLoader();
          // loader.load( './models/stl/slotted_disk.stl', function ( geometry ) {
          //   var material = new MeshNormalMaterial();
          //   var mesh = new Mesh(geometry, material);

          // });
        }
      
    }