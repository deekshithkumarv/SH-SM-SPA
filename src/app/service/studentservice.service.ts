import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError} from 'rxjs';
import { student } from '../model/student';
@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  private url :string="https://studentwebapi.azurewebsites.net/";
  constructor(private http: HttpClient) {
  
   }
   getstudents(){
    return this.http.get<[student]>(this.url+"api/Student/GetList");
   }
}
