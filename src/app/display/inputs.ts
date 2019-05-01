export class Geometry {
    world: Volume;              // shape 为 box
    scanner: Systems;
    phantom: Volume | VoxelizedPhantom;
  }
  
  /////////////////////////////////////////////////////////////////////////////////
  
  export class System {
    base:Volume
  }
  
  export class Scanner extends System {
    level1: Volume;
    level2: Volume;
    level3: Volume;
    level4: Volume;
    level5: Volume;
  }
  
  export class CTscanner extends System {
    module: Volume;
    cluster: Volume[];         // max3
    pixel: Volume[];           // max3
  }
  
  export class CylindricalPET extends System {
    rsector: Volume;
    module?: Volume;
    submodule?: Volume;
    crystal: Volume;
    layer: Volume[];           // max4
  }
  
  export class CPET extends System {
    sector: Volume;
    cassette: Volume;
    module: Volume;
    crystal: Volume;
    layer: Volume[];          // max4
  }
  
  export class ECAT extends System {
    block: Volume;
    crystal: Volume;
  }
  
  export class ECATAccel extends System {
    block: Volume;
    crystal: Volume;
  }
  
  export class OPET extends System {
    rsector: Volume;
    module?: Volume;
    submodule?: Volume;
    crystal: Volume[];
    layer: Volume[];            // max8
  }
  
  export class SPECThead extends System {
    crystal: Volume;
    pixel: Volume;
  }
  

  export type Systems = Scanner | CTscanner | CylindricalPET | CPET | ECAT | ECATAccel | OPET |SPECThead;
  /////////////////////////////////////////////////////////////////////////////////
  
  export class Volume {
    name: string = '.';
    shape: Shapes;
    material: string = '.';
    attach: string = '.';
    appearance: Appearance;
  }
  
  /////////////////////////////////////////////////////////////////////////////////
  
  export class Shape {}
  
  export class Box extends Shape {
    size: Vec3;
  }
  
  export class Sphere extends Shape {
    rmin: Value;
    rmax: Value;
    phi_start: Value;
    delta_phi: Value;
    theta_start: Value;
    delta_theta: Value;
  }
  
  export class Cylinder extends Shape {
    rmin: Value;
    rmax: Value;
    height: Value;
    phi_start: Value ;
    delta_phi: Value;
  }
  
  export class Cone extends Shape {
    rmin1: Value;
    rmax1: Value;
    rmin2: Value;
    rmax2: Value;
    height: Value;
    phi_start: Value;
    delta_phi: Value;
  }
  
  export class Ellipsoid extends Shape {
    size: Vec3;
    z_bottom_cut: Value;
    z_top_cut: Value;
  }
  
  export class EllipticalTube extends Shape {
    long: Value;
    short: Value;
    height: Value;
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
    x1: Value;
    y1: Value;
    x2: Value;
    y2: Value;
    z: Value;
    box_size: Vec3;
    box_pos: Vec3;
  }
  
  export class Hexagone extends Shape {
    radius: Value;
    height: Value;
  }
  
  export class Wedge extends Shape {
    narrower_xlength: Value;
    size: Vec3;
  }

  export type Shapes = Box|Sphere|Cylinder|Cone|Ellipsoid|EllipticalTube|Tessellated|TetMeshBox|TRPD|Hexagone|Wedge;
 
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
    repeat_vector: Vec3;
    auto_center: boolean;
    target: RepeatObjects[];
  }
  
  export class RingRepeater {
    repeat_number: number;
    point1: Vec3;
    point2: Vec3;
    first_angle: Value;
    angular_span: Value;
    modulo_number: number;
    z_shift: [Value, Value, Value, Value, Value, Value, Value];
    auto_rotation: boolean;
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
    repeat_number_with_theta: number;
    repeat_number_with_phi: number;
    theta_angle: Value;
    phi_angle: Value;
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
    color: string ;
    visible: boolean ;
    line_width: number ;
    force_wireframe: boolean ;
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
  
  export class Physics {
    physics_list: string;
    cut_in_world: CutInRegion;
    cut_in_patient: CutInRegion;
    activate_step_limiter: string;
    process: Process[];
    mag_field: Vec3;
  }
  
  export class CutInRegion {
    gamma: Value;
    electron: Value;
    positron: Value;
    proton: Value;
    max_step: Value;
  }
  
  export class Process {
    add: boolean;
    process_name: string;
    particle: string;
    model: Model;
  }
  
  export class Model {
    set: boolean;
    model_name: string;
    particle: string;
    energy_range: boolean;
    e_max: SetE;
    e_min: SetE;
  }
  
  export class SetE {
    value: Value;
    particle: string;
    option: string;
  }
  
  /////////////////////////////////////////////////////////////////////////////////
  
  export class Dataset {
    set: boolean;
    model_name: string;
    particle: string;
    target: SetDatasetObjects[];
  }
  
  export type SetDatasetObjects = Process | Dataset;
  
  /////////////////////////////////////////////////////////////////////////////////
  
  