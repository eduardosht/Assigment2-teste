export class Usuario {
 constructor(private _email: string, private _senha: string) {
      this._email = _email;
      this._senha = _senha;
  }

  get email(): string {
      return this._email;
  }

  get senha(): string {
      return this._senha;
  }

  set email(email) {
    this._email = email;
  }

  set senha(senha) {
    this._senha = senha;
  }
}
