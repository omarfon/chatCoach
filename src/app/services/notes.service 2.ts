import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
public SERVER = "https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/";
apiUrl = `${this.SERVER}mama/faq?groupby=categoria`

  constructor(public http:HttpClient) { }

  getNotes(){ 
    return this.http.get(this.apiUrl).pipe(
            map(data =>{
                return data
  })
    )
  }

}
