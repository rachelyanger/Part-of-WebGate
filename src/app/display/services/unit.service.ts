import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor() { }

    correct(vec:{value: number[];unit: string,}){
    let num:number[];
    num = vec.value.slice();
    switch(vec.unit){
        case 'cm':{
          return num;}
        case 'mm':{
          num[0]=num[0]/10;
          num[1]=num[1]/10;
          num[2]=num[2]/10;
          return num;
        }
        
    }
}
}
