import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { FormBuilder } from '@angular/forms';

import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  formularioLogin;

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder, private usuarioService: UsuarioService) { 
    this.formularioLogin = this.formBuilder.group({
      email: "",
      password: ""
    });
  }

  login(dadosLogin: any) {
    const formData = new FormData();
    formData.append("email", dadosLogin.email);
    formData.append("senha", dadosLogin.password);

    this.usuarioService.login(formData).subscribe((data: any) => {
      console.log(data);

      if (data.sucesso) {
        this.navCtrl.navigateForward("/home");
      } else {
        alert("Usuário não encontrado!");
      }
    });

    //alert("Click");
    //this.navCtrl.navigateForward("/tabs");
  }

  cadastrar() {
    this.navCtrl.navigateForward("/cadastrar-usuario");
  }   





}
