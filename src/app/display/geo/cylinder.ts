import {  Mesh, MeshBasicMaterial, LineDashedMaterial ,LineSegments, EdgesGeometry , CylinderGeometry,Object3D} from 'three';
import { Colors } from './color';

export class Cylinder {
    rmin:number;
    rmax:number;
    height:number;
    color:number;//颜色
    linewidth:number;//线宽
    flag:boolean;//是否显示线框
    visible:boolean;//是否显示
    phi_start: number;
    delta_phi: number;
    entity:Object3D;
    constructor(
        rmin:number,
        rmax:number,
        height:number,
        phi_start: number,
        delta_phi: number,

        color:string = 'white',
        wireframe_flag:boolean=true,
        linewidth:number = 1,
        visible:boolean = true,

        
    ){
      
      this.rmin = rmin;
      this.rmax = rmax;
      this.height = height;
      this.phi_start = phi_start;
      this.delta_phi = delta_phi;

      this.linewidth = linewidth;
      this.visible = visible;
      this.flag = wireframe_flag;
      if(this.visible){
        this.color = new Colors().selectcolor(color);
      }
      else{this.color = 0x000000;}
      let smat = new MeshBasicMaterial({color:this.color,polygonOffset: true,polygonOffsetFactor: 1,polygonOffsetUnits: 1});
      let cylinder_o = new Mesh(new CylinderGeometry(this.rmax,this.rmax,this.height,32,1,false,this.phi_start,this.delta_phi),smat);
      let cylinder_i = new Mesh(new CylinderGeometry(this.rmin,this.rmin,this.height,32,1,false,this.phi_start,this.delta_phi),smat);
      let lmat = new LineDashedMaterial({color:this.color,linewidth: this.linewidth,scale:2,gapSize:1.5,});
      let wireframe_o = new LineSegments( new EdgesGeometry(cylinder_o.geometry), lmat);
      let wireframe_i = new LineSegments( new EdgesGeometry(cylinder_i.geometry), lmat);
      wireframe_o.computeLineDistances();
      wireframe_i.computeLineDistances();
      let wireframe = new Object3D();
      wireframe.add(wireframe_i);
      wireframe.add(wireframe_o);
      if(this.flag){
        
      this.entity = wireframe;
      }
      else this.entity = cylinder_o;//最外面的圆柱实体

    }
   

}
