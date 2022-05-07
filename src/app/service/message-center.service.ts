import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageCenterService {
private _trigger =new Subject<any>()
message=this._trigger.asObservable()
sendData(message:any){
  this._trigger.next(message);
  
}
constructor() { }

}
