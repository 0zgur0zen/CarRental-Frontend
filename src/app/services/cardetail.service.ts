import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {
  apiUrl='https://localhost:44322/api/';
  constructor(private httpClient:HttpClient) { }

  getCarDetail():Observable<ListResponseModel<Cardetail>>{
    let newPath=this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Cardetail>>(newPath);
  }
 
  getAllCarsByBrandId(Id:number):Observable<ListResponseModel<Cardetail>>{
    let newPath=this.apiUrl + "cars/getallcarsbybrandid?id=" + Id
    return this.httpClient.get<ListResponseModel<Cardetail>>(newPath);
  }
  
  getAllCarsByColorId(Id:number):Observable<ListResponseModel<Cardetail>>{
    let newPath=this.apiUrl + "cars/getallcarsbycolorid?id="+ Id
    return this.httpClient.get<ListResponseModel<Cardetail>>(newPath);
  }
}
