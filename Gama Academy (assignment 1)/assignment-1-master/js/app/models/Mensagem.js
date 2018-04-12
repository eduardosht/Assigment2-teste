class Mensagem {
    constructor(nome, email, empresa ) {
        this._nome      = nome; 
        this._email     = email;
        this._empresa   = empresa; 
        Object.freeze(this);
    }

    get nome() {
        return this._nome;
    }

    get email() {
        return this._email;
    }

    get empresa(){
        return this._empresa;

    }

     get toJSON() {
        return {
            nome: this.nome,
            email: this.email,
            empresa: this.empresa
        };
    }



}