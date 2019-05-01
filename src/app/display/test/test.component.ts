import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { WebGLRenderer, Scene, PerspectiveCamera,  AxesHelper, Object3D,Mesh,BoxGeometry,MeshBasicMaterial, SphereGeometry, Matrix4, MeshNormalMaterial, Vector3,Geometry, PolyhedronGeometry, Box3, Layers, } from 'three';
import * as OrbitControls from 'three-orbitcontrols';
import { CreatsystemService } from '../services/creatsystem.service';
import { Cube } from '../geo/cube';
import { RepeatService } from '../services/repeat.service';
import { GeometryService } from '../services/geometry.service';
import * as STLLoader from 'three-stl-loader';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(private creatsystemService:CreatsystemService,
              private repeatService:RepeatService,
              private geometryService:GeometryService) { }
  
  renderer = new WebGLRenderer({antialias:true});
  @ViewChild('Canvas')
  myCanvas: ElementRef<HTMLElement>;
  scene = new Scene();
  camera = new PerspectiveCamera(45, 1000 / 750, 0.1, 1000);
  //坐标轴
  axes = new AxesHelper(60);
  //系统和仿体
  system = this.creatsystemService.init();
  phantom:Object3D;




//控制轨道

 controls = new OrbitControls(this.camera, this.renderer.domElement);
 con(){
  this.controls.enableDamping = true;
  this.controls.dampingFactor = 0.25;
  this.controls.enableZoom = true;   
 }
 

// ////////////   
  init() {
    this.con();
    this.camera = this.camera;
    this.renderer.setSize(750, 500);
    this.renderer.setClearColor(0x000000);
    this.myCanvas.nativeElement.appendChild(this.renderer.domElement);
    this.scene.add(this.axes);
    
//////
     let level4={
      shape:{
        rmin: 0,
        rmax: 3,
        height: 8,
        phi_start: 0,
        delta_phi: 2*Math.PI,
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
        axis: [0, 0, 1],
        angle: 0,
      },
      repeat:{
        line_number: 20,
        orientation: Math.PI,
        copy_spacing: 7,
        max_range: 120,
      },
      
    };
              /////
    var loader = new STLLoader();
    loader.load( '/home/rachel/Rachel/examples/Label89.stl', function ( geometry ) {
      var material = new MeshNormalMaterial();
      var mesh = new Mesh(geometry, material);
      this.scene.add(mesh)});

     
     this.scene.add(this.system);
/////
    this.camera.position.set(20,20,40);
    this.camera.lookAt(0,0,0);
    this.animate();
    //this.renderer.render(this.scene, this.camera);
  }
  animate() {
    requestAnimationFrame(() => this.animate());
    //this.s.rotation.y += 0.08;
    this.renderer.render(this.scene, this.camera);
  }
  ngOnInit() {
    this.init();
    
    //this.initcontrols();
    
  }
}
