var data1;

function enviaDataDB() {
  event.preventDefault();

  // Primeiro form
  var dateTime = document.getElementById('dateTime');

  var InputNome = document.getElementById('mce-FNAME');
  var InputEmail = document.getElementById('mce-EMAIL');
  var RadioProfissao = document.querySelector('.RadioCategoriaProfissional input:checked');

  createData1( dateTime.value, InputNome.value, InputEmail.value, RadioProfissao.value );

  createData();
}

function createData1( date, nome, email, profissao ) {
  data1={
    data_hora: date,
    nome:nome,
    email:email,
    profissao:profissao,
  };

  console.log(data1);
}


async function createData(){
  var data={data1};
  console.log(data);

  await firebase.database().ref().push(data);
}