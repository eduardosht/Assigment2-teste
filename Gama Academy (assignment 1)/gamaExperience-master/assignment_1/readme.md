
# GAMA Assigment 1

#### Upload do projeto

**Requisitos:**   Ter um conta Firebase e Nodejs instaldo.
No console do Firebase crie um novo projeto. https://console.firebase.google.com/u/1/

Depois de criar um novo projeto no arquivo **init.js** (js/firebase/)
adicione as configurações gerada, para o  aplicativo da Web, no site do Firebase.

```
var config =  { 
	apiKey:  "", 
	authDomain:  "", 
	databaseURL:  "", 
	projectId:  "", 
	storageBucket:  "", 
	messagingSenderId:  ""  
};
```

##### Passos

instalar o Firebase tools
>> npm install -g firebase-tools

Efetuar o login no Firebase no terminal
>> firebase login

No diretório do projeto. Iniciar as configurações do Firebase, para **hosting** e **firestore**
>>  firebase init

Por fim, realizar o deploy
>> firebase deploy
