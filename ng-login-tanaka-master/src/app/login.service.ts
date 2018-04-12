import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

    http: Http;
    headers: Headers;
    url: string = 'https://test-57328.firebaseio.com/cadastro.json';

    constructor(http: Http) {
      this.http = http;
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
    }


   buscaUsuario(usuario: Usuario): boolean {

      var arr: Array<Object>;
      console.log(usuario);
      this.http
      .get(this.url)
      .subscribe( resposta => {
        console.log(resposta._body);
        let usuarios = JSON.parse(resposta._body);
        Object.keys(usuarios).forEach(function(key,index) {
          let u = usuarios[key];
           if( u.nome === usuario.email && u.senha === usuario.senha)
            return true;

        });
        
      });
      return false;

    }

}