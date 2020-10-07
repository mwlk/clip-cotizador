import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DivizaService {
  _urlAPI = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
  constructor(private http:HttpClient) {

    console.log('servicio diviza');
  }

  getDiviza() {
    let header = new HttpHeaders()
    .set('Content-Type','application/json')

    return this.http.get(this._urlAPI,{
      headers:header
    });
  }
}
