import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Http } from '@capacitor-community/http';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Employee {

  apiUrl = 'https://coronavirus-19-api.herokuapp.com/';

  
  constructor(private http: HttpClient) { }
  getInfo(){
    console.log(this.apiUrl)
    return this.http.get(`${this.apiUrl}all`, );  }
  getData(){
    return this.http.get(`${this.apiUrl}countries`);
    
  }

   doGet = () => {
    const options = {
      url: 'https://newsapi.org/v2/everything?q=covid-19&sortBy=publishedAt&apiKey=9f5d4ef1ea5b44c9bf855efbe62b9fdb',
      // headers: { 'X-Fake-Header': 'Max was here' },
      // params: { size: 'XL' },
    };
  
return from(Http.get(options))
   
  };
}

//https://newsapi.org/v2/everything?q=ukraine&sortBy=publishedAt&apiKey=9f5d4ef1ea5b44c9bf855efbe62b9fdb
 

 

