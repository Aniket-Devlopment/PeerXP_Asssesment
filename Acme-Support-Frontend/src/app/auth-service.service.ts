import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  userlogin(data: any):Observable<any>{
    return this.http.post('http://localhost:8000/Acme_Support/userlogin',data);
  }
  addnewuser(data: any):Observable<any>{
    return this.http.post('http://localhost:8000/Acme_Support/createuser',data);
  }
  addnewdept(data: any):Observable<any>{
    return this.http.post('http://localhost:8000/Acme_Support/createdept',data);
  }
  assignnewdept(data: any):Observable<any>{
    return this.http.post('http://localhost:8000/Acme_Support/assigndept',data);
  }
  updatedept(data: any):Observable<any>{
    return this.http.post('http://localhost:8000/Acme_Support/updatedept',data);
  }
  deletedept(data: any):Observable<any>{
    return this.http.post('http://localhost:8000/Acme_Support/deletedept',data);
  }
}
