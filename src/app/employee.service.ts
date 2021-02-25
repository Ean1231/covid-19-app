import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class Employee {

  apiUrl = 'https://coronavirus-19-api.herokuapp.com/';

  
  constructor(private http: HttpClient) { }
  getInfo(){
    return this.http.get(`${this.apiUrl}all`, );  }
  getData(){
    return this.http.get(`${this.apiUrl}countries`);
    
  }
}
 

 

