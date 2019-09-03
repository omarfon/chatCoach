import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ChatsService } from '../../chats.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public userResponse;

  constructor( private fb: FormBuilder,
               public routes: Router,
               public alertCtrl: AlertController,
               public chatSrv: ChatsService,
               public userSrv: UserService) {

 /*                const authorization = localStorage.getItem('authorizathion');
    if(authorization){
      this.userSrv.getKey().subscribe((data:any) =>{
        localStorage.setItem('authorization', data.authorization);
        localStorage.setItem('role', data.role);
        console.log(data);
      });
    } */
                }

  ngOnInit() {
   /*  this.loginForm = this.fb.group({
      email:['', [Validators.required]],
      password:['', [Validators.required]]
    }); */
    const authorization = localStorage.getItem('authorizathion');
    if(!authorization){
      this.userSrv.getKey().subscribe((data:any) =>{
        console.log(data);
        localStorage.setItem('authorization', data.authorization);
        localStorage.setItem('role', data.role);
      })
    }

  }

  onLogin(email, password){
   /* this.chatSrv.loginEmailUser(email, password).then((result:any) =>{
     console.log(result);
     localStorage.setItem('uid', result.user.uid );
     this.routes.navigate(['home']);
   }).catch(async err =>{
     const alert = await this.alertCtrl.create({
       header:'Error de Login',
       message: `${err.message}`,
       buttons: ['Reintentar']
     });
     await alert.present();
   })    */ 
   this.userSrv.doSignIn(email, password).subscribe((data:any)=>{
     this.userResponse = data;
      localStorage.setItem('authorization', data.authorization);
      localStorage.setItem('role', data.role);
      localStorage.setItem('firebaseToken', data.firebaseToken);
      localStorage.setItem('name', data.name);
      localStorage.setItem('surname1', data.surname1);
      localStorage.setItem('photoUrl', data.photoUrl);
      this.chatSrv.loginEmailUser(email, password).then((result:any) =>{
        console.log(result);
        localStorage.setItem('uid', result.user.uid )
      });
      this.routes.navigate(['home']);
   });
  }   


}
