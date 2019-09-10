import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(public http: HttpClient) { }

  public apiUrl = "https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/";

  getNotas(patientid){

    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});

    return this.http.get(this.apiUrl + `ebooking/encuentros-paciente-contacto/${patientid}`, {headers}).pipe(
                    map((resp:any) =>{
                      return resp
                    })
              )
  }
}
