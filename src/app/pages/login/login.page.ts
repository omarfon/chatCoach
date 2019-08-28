import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;

  constructor( private fb: FormBuilder,
               public routes: Router,
               public alertCtrl: AlertController) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:['', [Validators.required]],
      password:['', [Validators.required]]
    });
  }

 async onLogin(email, password){
    /* console.log(this.loginForm.value()); */
    console.log(email, password);
    if(email == 'juana.perez@aviva.pe' && password == '12345678@aviva'){
      this.routes.navigate(['home']);
    }else{
      const alert = await this.alertCtrl.create({
        header:'Error de Login',
        message:'talvez el email o password estan equivocados',
        buttons: ['Reintentar']
      });
      await alert.present();
    }
  }

}
