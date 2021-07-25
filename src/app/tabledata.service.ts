import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {

  constructor(private http : HttpClient) { }
  //GET method fetching data from a dummy API
  getUserDetails(){
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }
}
