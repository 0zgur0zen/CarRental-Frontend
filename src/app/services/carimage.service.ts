import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carimage } from '../models/carimage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarimageService {
  apiUrl = 'https://localhost:44322/api/';

  constructor(private httpClient: HttpClient) {}

  getCarImages(Id: number): Observable<ListResponseModel<Carimage>> {
    let newPath = this.apiUrl + 'carimages/getimagesbycarid?id=' + Id;
    return this.httpClient.get<ListResponseModel<Carimage>>(newPath);
  }
}
