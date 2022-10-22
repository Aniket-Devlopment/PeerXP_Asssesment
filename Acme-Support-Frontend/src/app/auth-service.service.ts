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
}
