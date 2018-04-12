# Assignments - 1!
Projeto destinado para o Assignments  da Gama
# Upload para o servidor
este projeto esta hospedado no Heroku neste [link](https://solidade-assignment1.herokuapp.com/)

e para utilizar este servidor foi necessário instalar  a ferramenda do heroku para realizar operações via interface de comandos
após esta instalação foi criado um app no servido para receber e rodar a aplicação

criando aplicação
>heroku apps:create example

subindo uma copia do repositório do gitHub
>git push heroku master

Para persistência de dados foi utilizado o firebase [neste link](https://solidade-assignment1.firebaseio.com/pessoas.json) é possível acessar os dados do banco.

obs* para realizar a configuração do banco foi muito simples por este motivo foi utilizado, o banco esta aberto para todas requisições REST (GET, POST, PUT, PATCH, DELETE, OPTIONS)