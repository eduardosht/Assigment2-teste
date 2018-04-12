import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../usuario';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() email: string;
  @Input() senha: string;
  _id: string;
  mensagem: string = '';
  meuForm: FormGroup;
  service: LoginService;
  usuario: Usuario;

  constructor(service: LoginService, fb: FormBuilder) {
    this.service = service;
  }

  async fazerLogin(event) {
    event.preventDefault();

    this.usuario = new Usuario(this.email,this.senha);
    var estado = await this.service.buscaUsuario(this.usuario);
    console.log("estado: "+estado);
    if(estado)  {
      this.mensagem ="Login efetuado com sucesso!!"
    } else {
      this.mensagem ="Email e senha não compatíveis!!"
    }
  }


  ngOnInit() {
  }

}