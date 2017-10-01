import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

export interface DragData {
  /*tag用来区分哪一级拖拽事件，到底是拖拽任务项，还是拖拽任务列表*/
  tag: string;
  /* 传递的数据*/
  data: any;
}

@Injectable()
export class DragDropService {


  constructor() {
  }

  private _dragData = new BehaviorSubject<DragData>(null);
  setDragData(data:DragData){
    this._dragData.next(data);
  }
  getDragData():Observable<DragData>{
    return this._dragData.asObservable();
  }
  clearDragData(){
    this._dragData.next(null);
  }

}
