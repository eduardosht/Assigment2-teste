

class ContatoService {



    constructor() {
        this.db = firebase.firestore().doc('assingment1/lista');
        this._listarTodosOsContatos();
    }

    _listarTodosOsContatos() {
        const db = this.db;
        return new Promise(function (resolve, reject) {
            db.onSnapshot((querySnapshot) => {
                resolve(querySnapshot.data());
            }, err => reject(err));
        })
    }

    async function addContato(contato) {
        let contatos = [];

        let novoContato = Object.assign({}, contato);
        contatos = await this.obterContatos();
        if (contatos.contato) {
            contatos.contato.push(novoContato);
            this.db.set(contatos, { merge: true });
        } else {
            console.log(novoContato);
            novoContato ? console.log('não há dados') :
            this.db.set({ contato: [novoContato] }, { merge: true });
        }

    }

    async obterContatos() {
        let lista = await this._listarTodosOsContatos()
        return lista;
    }




}
