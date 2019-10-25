import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  const apiRegister ="https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/auth/fcm-register"
  const apiNoti = "https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/auth/fcm-notify?patient_id=2281";

  constructor(public http: HttpClient) { }


  registerToken(token){
    const authorization  = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDIzYThmODEwMGMwNDkwYjYwMGI5NWQiLCJhcHAiOiJtYW1hIiwidXNlclJvbGUiOiJ1c2VyIiwidXNlclN0YXR1cyI6InZhbGlkYXRlZCIsInBhdGllbnRJZCI6MjI4MSwic2Vzc2lvbklkIjoiNWRiMzFlYjY1YmE0YTIwZWYzMDgzY2ZmIiwiaWF0IjoxNTcyMDE5ODk0fQ.k9pwOVqeL_VcFsmiq-v0qGQzz-x4xR2YbzwQ2T6ezn8";
    let headers = new HttpHeaders({"Authorization": authorization})
      
    this.http.post(`this.apiRegister/${token}`, {headers}).pipe(
            map(resp =>{
              return resp;
            })
        )
  }


  sendNotification(id, texto){
    const params = {texto: texto};
      this.http.post(`this.apiNoti/${id}`, {params})
          return           
  }

}
