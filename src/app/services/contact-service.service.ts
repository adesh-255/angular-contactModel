import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Contact } from '../contact/contact';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
 enPoint = environment.api_url + 'contacts'
 token = environment.token
 headers = new HttpHeaders({Authorization : `Bearer ${this.token}`})
  constructor(private httpClient : HttpClient) { }

  getAll() : Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(this.enPoint, {headers : this.headers})
  }
  postContact ( data : Contact ) : Observable<Contact>{
    return this.httpClient.post<Contact>(this.enPoint, data, {headers : this.headers})
  }
  getContact ( id :String) : Observable<Contact>{
    const url = `${this.enPoint}/${id}`
    return this.httpClient.get<Contact>(url, {headers : this.headers})
  }
  putContact (id : string , data : Contact){
    const url = `${this.enPoint}/${id}`
    return this.httpClient.put(url, data, {headers : this.headers})
  }
  deleteContact (id : string){
    const url = `${this.enPoint}/${id}`
    return this.httpClient.delete<Contact>(url, {headers : this.headers})
  }
}
