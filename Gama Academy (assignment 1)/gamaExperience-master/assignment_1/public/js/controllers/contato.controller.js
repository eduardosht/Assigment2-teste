
class ContatoController {

    constructor() {
        this.contatoService = new ContatoService();
    }

    adicionarContato() {

        let $ = document.querySelector.bind(document);
        let empresa = $('#empresa').value;
        let nome = $('#nome').value;
        let email = $('#email').value;
        let contato = new ContatoModel(empresa, nome, email);
        
        this.contatoService.addContato(contato);

        let frm = document.getElementsByName('myForm')[0];
        frm.reset();
        $("#alert").innerHTML = '<p class="alert-info">Obrigado, por entra em contato.</p>';

        setTimeout(() => {
            $(".alert-info").remove();
        },7000);
      //  $("#alert").style.display="none";
    }

    obterContato() {
       return this.contatoService.obterContatos()
    }
}