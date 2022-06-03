import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../contact/department';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  enPoint = environment.api_url + 'departments'
 token = environment.token
 headers = new HttpHeaders({Authorization : `Bearer ${this.token}`})
  constructor(private httpClient : HttpClient) { }
  getAll() : Observable<Department[]>{
    return this.httpClient.get<Department[]>(this.enPoint, {headers : this.headers})

  }
}
