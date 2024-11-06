import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {


   private apiUrl = 'http://192.168.1.101:8081/test/getemp';


 constructor(private http: HttpClient) { }


  handlewelcomeData(empId: number, name: string): Observable<any> {
    // Set the headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });


    // Create the request payload
    const body = {
      empid: empId,
      name: name
    };

    return this.http.post(this.apiUrl, body, { headers });

  }

  handlewelcomeData1()
  {

  }

}
