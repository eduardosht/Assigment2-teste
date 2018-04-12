class MensagemController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputNome     = $("#nome");
        this._inputEmail    = $("#email");  
        this._inputEmpresa  = $("#empresa");

    }
    
    adiciona(event) {
        event.preventDefault();
        
        let mensagem  = this._criaMensagem();
        this._enviandoDados(JSON.stringify(mensagem.toJSON));
        this._limpaForm();
        this._mensagemDeEnvio();

    }

    _criaMensagem() {
        return new Mensagem (
            ValidaHelper.nulo(this._inputNome),   
            ValidaHelper.email(this._inputEmail), 
            ValidaHelper.nulo(this._inputEmpresa)
        );
        
    }
    
    _enviandoDados(dados) {
        let http = new XMLHttpRequest;
        let url = "https://solidade-assignment1.firebaseio.com/pessoas.json";

        // let url ="http://localhost:3000/Pessoas";
        http.open("POST", url);
        http.setRequestHeader("Content-Type", "application/json");

       
        http.addEventListener("load", function() {
            console.log(http);

            if(http.readyState == 4 && (http.status == 200 || http.status == 201 ) ) {
                 console.log(`Resposta: ${http.response}`);
            }else {
                console.log();
            }
            
        });
        
        http.send(dados);

    }

    _limpaForm(){
        this._inputNome.value     = '';
        this._inputEmail.value    = '';  
        this._inputEmpresa.value  = '';


    }

    _mensagemDeEnvio(){
        document.querySelector("#recebido").classList.remove("recebido-hiden");
    }

}