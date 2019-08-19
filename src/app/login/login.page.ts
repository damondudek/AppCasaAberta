import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  formularioLogin;

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder) { 
    this.formularioLogin = this.formBuilder.group({
      email: "",
      password: ""
    });
  }

  login(dadosLogin) {
    console.log(dadosLogin);
    console.log(dadosLogin.email);
    console.log(dadosLogin["email"]);

    //alert("Click");
    //this.navCtrl.navigateForward("/tabs");
  }




}
