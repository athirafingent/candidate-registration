import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataSource= new BehaviorSubject('');
  currentData= this.dataSource.asObservable();

  constructor() { }

  setData(values: any) {
    this.dataSource.next(values);
  }

  getData() {
    return this.dataSource.asObservable();
  }
}
