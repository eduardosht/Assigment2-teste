class ValidaHelper{

    constructor(){
        throw new Error ('esta class não pode ser instanciada');
    }

    static nulo(element) {
       
            if(element.value === "" || element.value == null ){
                this.addClasseErro(element);
                throw new Error (`Preencher o campo ${element.id}  `);
            }
            if(element.value != "" || element.value != null ){
               this.removeClassErro(element);
               return element.value;
           }
    

    }

   static email(element) {
        let email = element.value;
    
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) 
            || email === "" || email === null
        ){
            this.addClasseErro(element);
            throw new Error ("E-mail invalido");
        }
        this.removeClassErro(element);
        return email;
        

   }

    static addClasseErro(element) {
        element.focus();
        
        if(document.querySelector(`#erro-${element.id}`) == null){
            element.classList.add("input-erro");

            let mesagemErro = document.querySelector("#mesagem-erro");
            
            let listaErro = document.createElement('li');
            listaErro.setAttribute("id",`erro-${element.id}`);
            listaErro.textContent  = `o campo ${element.id} deve ser preenchido`;
            
            mesagemErro.appendChild(listaErro);
            console.log(mesagemErro);
        }
        return false;
            
    }

    static removeClassErro(element){
        
        if(document.querySelector(`#erro-${element.id}`)){
            document.querySelector(`#erro-${element.id}`).classList.add("mesagem-hidden");

        }
        element.classList.remove("input-erro");


    }

}