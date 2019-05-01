 export class Geometry {
    world: Volume;              
    scanner: System;
    phantom: Volume | VoxelizedPhantom;
  }
 export class System {
    base:Volume;
    level1: Volume;
    level2: Volume;
    level3: Volume;
    level4: Volume[];
    level5: Volume[];
  }
////////////////////////////
 export class Volume { 
    shape: any;////
    appearance: Appearance;
    translation?: PlacementTranslation;
    rotation?: PlacementRotation;
    repeat?: any;////
  }
  /////////////////////////////////////////////////////////////////////////////////
  
  export class Shape {}
  
  export class Box extends Shape {
    size: [number, number, number];
  }
  
  export class Sphere extends Shape {
    rmin: number;
    rmax: number;
    phi_start: number;
    delta_phi: number;
    theta_start: number;
    delta_theta: number;
  }
  
  export class Cylinder extends Shape {
    rmin: number;
    rmax: number;
    height: number;
    phi_start: number;
    delta_phi: number;
  }
  
  export class Cone extends Shape {
    rmin1: number;
    rmax1: number;
    rmin2: number;
    rmax2: number;
    height: number;
    phi_start: number;
    delta_phi: number;
  }
  
  export class Ellipsoid extends Shape {
    size: [number,number,number];
    z_bottom_cut: number;
    z_top_cut: number;
  }
  
  export class EllipticalTube extends Shape {
    long: number;
    short: number;
    height: number;
  }
  
  export class Tessellated extends Shape {
    path_to_vertices_file: string;
  }
  
  export class TetMeshBox extends Shape {
    path_to_ele_file: string;
    unit_of_length: string;
    path_to_attribute_map: string;
  }
  
  export class TRPD extends Shape {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    z: number;
    box_size: [number,number,number];
    box_pos: [number,number,number];
  }
  
  export class Hexagone extends Shape {
    radius: number;
    height: number;
  }
  
  export class Wedge extends Shape {
    narrower_xlength: number;
    size: [number,number,number];
  }

  export type Shapes = Box|Sphere|Cylinder|Cone|Ellipsoid|EllipticalTube|Tessellated|TetMeshBox|TRPD|Hexagone|Wedge;
 
  /////////////////////////////////////////////////////////////////////////////////
 
  export class PlacementTranslation {
    value: [number, number, number];
  }
  
  export class PlacementRotation {
    axis: [number, number, number];
    angle: number;
  }
  
  /////////////////////////////////////////////////////////////////////////////////
  export class Appearance {
    color: string  = 'yellow';
    visible: boolean  = true;
    line_width: number  = 1;
    force_wireframe: boolean = true;
  }
  /////////////////////////////////////////////////////////////////////////////////
  export class LinearRepeater {
    repeat_number: number;
    repeat_vector: [number,number,number];
    auto_center: boolean;
  }
  export class RingRepeater {
    repeat_number: number;
    point1: [number,number,number];
    point2: [number,number,number];
    first_angle:  number;
    angular_span: number;
    modulo_number: number;
    z_shift: [number, number, number, number, number, number, number,number];
    auto_rotation: boolean;
  }
  
  export class CubicArrayRepeater {
    repeat_number: [number, number, number];
    repeat_vector: [number, number, number];
  }
  
  export class QuadrantRepeater {
    line_number: number;
    orientation: number;
    copy_spacing: number;
    max_range: number;
  }
  
  export class SphereRepeater {
    radius: number;
    repeat_number_with_theta: number;
    repeat_number_with_phi: number;
    theta_angle: number;
    phi_angle: number;
  }
  
  export class GenericRepeater {
    placements_filename: string;
    relative_translation: boolean;
  }
  export type Repeater = RingRepeater | CubicArrayRepeater | QuadrantRepeater | SphereRepeater | GenericRepeater;
  //////////////////////////////////////////
  export class VoxelizedPhantom {
    name: string;
    insert: string;
    image: string;
    material_database: string;
    range_to_material_file: string;
    hu_to_material_file: string;
    attach: string;
    skip_equal_materials: boolean;
    material_table: string;
    density_table: string;
    density_tolerance: number;
    output_material_database_filename: string;
    output_hu_material_filename: string;
    fictitious_energy: number;
    gamma_discard_energy: number;
  }