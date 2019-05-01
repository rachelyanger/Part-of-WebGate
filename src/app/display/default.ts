  /////////////////////////////////////////////////////////////////////////////////
  
  export class Volume {
    name: string;
    shape: Shape;
    material: string;
    attach: string;
    appearance: Appearance;
  }
  
  /////////////////////////////////////////////////////////////////////////////////
  
export class Shape {}
  
export class Box extends Shape {
  size: Vec3;
}

export class Sphere extends Shape {
  rmin: Value;//内球半径
  rmax: Value;
  phi_start: Value ={
      num:0,
      unit:'rad'
  };
  delta_phi: Value ={
    num:Math.PI*2,
    unit:'rad'
};
  theta_start: Value ={
    num:0,
    unit:'rad'
};
  delta_theta: Value ={
    num:Math.PI*2,
    unit:'rad'
};
}

export class Cylinder extends Shape {
  rmin: Value;
  rmax: Value;
  height: Value;
  phi_start: Value ={
    num:0,
    unit:'rad'
};
  delta_phi: Value ={
    num:Math.PI*2,
    unit:'rad'
};
}

export class Cone extends Shape {
  rmin1: Value;
  rmax1: Value;
  rmin2: Value;
  rmax2: Value;
  height: Value;
  phi_start: Value ={
    num:0,
    unit:'rad'
};
  delta_phi: Value ={
    num:Math.PI*2,
    unit:'rad'
};
}

export class Ellipsoid extends Shape {
  size: Vec3;
  z_bottom_cut: Value;
  z_top_cut: Value;
}

export class EllipticalTube extends Shape {
  long: Value;//x
  short: Value;//z
  height: Value;//y
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
  x1: Value;//12分别是z轴方向的两端
  y1: Value;
  x2: Value;
  y2: Value;
  z: Value;
  box_size: Vec3;
  box_pos: Vec3={
      value:[0,0,0],
      unit:'cm'
  };
}

export class Hexagone extends Shape {
  radius: Value;//中心到顶点
  height: Value;
}

export class Wedge extends Shape {
  narrower_xlength: Value;
  size: Vec3;
}



/////////////////////////////////////////////////////////////////////////////////

export class PlacementTranslation {
  value: Vec3;
  target: PlacementObjects[];
}

export class PlacementRotation {
  axis: [number, number, number];
  angle: number;
  target: PlacementObjects[];
}

export type PlacementObjects = Volume | VoxelizedPhantom | PlacementTranslation | PlacementRotation;

/////////////////////////////////////////////////////////////////////////////////

export class MoveTranslation {
  speed: Vec3;
  target: MoveObjects[];
}

export class MoveRotation {
  speed: Value;
  axis: [boolean, boolean, boolean];
  target: MoveObjects[];
}

export class MoveOrbiting {
  speed: Value;
  point1: Vec3;
  point2: Vec3;
  auto_rotation: boolean;
  target: MoveObjects[];
}

export class MoveOscTrans {
  amplitude: Vec3;
  frequency: Value;
  period: Value;
  phase: Value;
  target: MoveObjects[];
}

export class MoveEccentRot {
  shifts: Vec3;
  speed: Value;
  target: MoveObjects[];
}

export type MoveObjects = Volume | VoxelizedPhantom | MoveTranslation
  | MoveRotation | MoveOrbiting | MoveOscTrans | MoveEccentRot;

/////////////////////////////////////////////////////////////////////////////////

export class LinearRepeater {
  repeat_number: number;
  repeat_vector: Vec3;//默认z轴
  auto_center: boolean = true;
  target: RepeatObjects[];
}

export class RingRepeater {
  repeat_number: number;
  point1: Vec3 ={
      value:[0,0,1],
      unit:'cm'
  };
  point2: Vec3 ={
    value:[0,0,0],
    unit:'cm'
};
  first_angle: Value ={
      num:0,
      unit:'rad'
  };
  angular_span: Value={
    num:Math.PI*2,
    unit:'rad'
};
  modulo_number: number = 1;
  z_shift: [Value, Value, Value, Value, Value, Value, Value,Value] = 
  [{num:0,
    unit:'cm'},
   {num:0,
    unit:'cm'},
   {num:0,
    unit:'cm'},
   {num:0,
    unit:'cm'},
   {num:0,
    unit:'cm'},
   {num:0,
    unit:'cm'},
   {num:0,
    unit:'cm'},
   {num:0,
    unit:'cm'},];
  auto_rotation: boolean = true;
  target: RepeatObjects[];
}

export class CubicArrayRepeater {
  repeat_number: [number, number, number];
  repeat_vector: Vec3;
  target: RepeatObjects[];
}

export class QuadrantRepeater {
  line_number: number;
  orientation: Value;
  copy_spacing: Value;
  max_range: Value;
  target: RepeatObjects[];
}

export class SphereRepeater {
  radius: Value;
  repeat_number_with_theta: number;//横向重复次数xz平面
  repeat_number_with_phi: number;//纵向重复次数xy平面
  theta_angle: Value;//横向两个重复体间隔角度
  phi_angle: Value;//纵向两个重复体间隔角度
  target: RepeatObjects[];
}

export class GenericRepeater {
  placements_filename: string;
  relative_translation: boolean;
  target: RepeatObjects[];
}

export type RepeatObjects = Volume | VoxelizedPhantom | LinearRepeater
  | RingRepeater | CubicArrayRepeater | QuadrantRepeater | SphereRepeater | GenericRepeater;

/////////////////////////////////////////////////////////////////////////////////

export class Appearance {
  color: string = 'white';
  visible: boolean = true ;
  line_width: number = 1;
  force_wireframe: boolean = true ;
}

/////////////////////////////////////////////////////////////////////////////////
export class Vec3 {
    value: [number, number, number];
    unit: string ;
  }
  
export class Value {
    num: number;
    unit: string ;
  }
    /////////////////////////////////////////////////////////////////////////////////
  
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
    density_tolerance: Value;
    output_material_database_filename: string;
    output_hu_material_filename: string;
    fictitious_energy: Value;
    gamma_discard_energy: Value;
    }