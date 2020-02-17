import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mobiles } from '../mobiles';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private url:string = "assets/mobiles.json"; 

  constructor(private http:HttpClient) { }


  getMobiles(): Observable<Mobiles[]> {
    return this.http.get<Mobiles[]>(this.url); 
  }

}

