var data1;
var data2;
var data3;

function enviaDataDB_designer() {
  event.preventDefault();

  // Primeiro form
  var Userip = document.getElementById('Userip');
  var dateTime = document.getElementById('dateTime');

  var InputNome = document.getElementById('InputNome');
  var InputEmail = document.getElementById('InputEmail');
  var RadioCategoria = document.querySelector('.RadioCategoriaProfissional input:checked');
  var RadioExperiencia = document.querySelector('.RadioExperiencia input:checked');

  // Segundo form
  var RadioDesign1 = document.querySelector('.RadioDesign1 input:checked');
  var InputDesign1 = document.getElementById('InputDesign1');

  var RadioDesign2 = document.querySelector('.RadioDesign2 input:checked');

  var RadioDesign3 = document.querySelector('.RadioDesign3 input:checked');
  var InputDesign3 = document.getElementById('InputDesign3');

  var RadioDesign4 = document.querySelector('.RadioDesign4 input:checked');

  var RadioDesign5 = document.querySelector('.RadioDesign5 input:checked');
  var InputDesign5 = document.getElementById('InputDesign5');

  var RadioDesign6 = document.querySelector('.RadioDesign6 input:checked');
  var InputDesign6 = document.getElementById('InputDesign6');

  var RadioDesign7 = document.querySelector('.RadioDesign7 input:checked');
  var InputDesign7 = document.getElementById('InputDesign7');

  var ButtonFinaliza = document.querySelector('.FinalizaDesign');

  createData1(dateTime.value,Userip.value, InputNome.value,InputEmail.value,RadioCategoria.value,RadioExperiencia.value);
  createData2(RadioDesign1.value,InputDesign1.value,RadioDesign2.value,RadioDesign3.value,InputDesign3.value,
  RadioDesign4.value,RadioDesign5.value,InputDesign5.value,RadioDesign6.value,InputDesign6.value,
  RadioDesign7.value,InputDesign7.value);

  console.log(data2);

  createDataDesigner();
}
//Validator.validacoes(nameInput.value,emailInput.value,empresaInput.value);

function enviaDataDB_recrutador() {
  event.preventDefault();

  // Primeiro form
  var Userip = document.getElementById('Userip');
  var dateTime = document.getElementById('dateTime');

  var InputNome = document.getElementById('InputNome');
  var InputEmail = document.getElementById('InputEmail');
  var RadioCategoria = document.querySelector('.RadioCategoriaProfissional input:checked');
  var RadioExperiencia = document.querySelector('.RadioExperiencia input:checked');

  //Terceiro format
  var RadioRecrutador1 = document.querySelector('.RadioRecrutador1 input:checked');
  var InputRecrutador1 = document.getElementById('InputRecrutador1');

  var RadioRecrutador2 = document.querySelector('.RadioRecrutador2 input:checked');
  var InputRecrutador2 = document.getElementById('InputRecrutador2');

  var RadioRecrutador3 = document.querySelector('.RadioRecrutador3 input:checked');

  var RadioRecrutador4 = document.querySelector('.RadioRecrutador4 input:checked');

  var RadioRecrutador5 = document.querySelector('.RadioRecrutador5 input:checked');
  var InputRecrutador5 = document.getElementById('InputRecrutador5');

  var RadioRecrutador6 = document.querySelector('.RadioRecrutador6 input:checked');
  var InputRecrutador6 = document.getElementById('InputRecrutador6');

  var RadioRecrutador7 = document.querySelector('.RadioRecrutador7 input:checked');
  var InputRecrutador7 = document.getElementById('InputRecrutador7');

  var ButtonFinaliza2 = document.querySelector('.FinalizaRecrutador');

  createData1(dateTime.value,Userip.value,InputNome.value,InputEmail.value,RadioCategoria.value,RadioExperiencia.value);
  createData3(RadioRecrutador1.value,InputRecrutador1.value,RadioRecrutador2.value,InputRecrutador2.value,RadioRecrutador3.value,
  RadioRecrutador4.value,RadioRecrutador5.value,InputRecrutador5.value,RadioRecrutador6.value,InputRecrutador6.value,
  RadioRecrutador7.value,InputRecrutador7.value);

  console.log(data3);
  createDataRecrutador();
}


function createData1(date,userip,nome,email,categoria,experiencia){
data1={
userip: userip,
data_hora: date,
nome:nome,
email:email,
categoria:categoria,
experiencia:experiencia,
};

}


function createData2(RadioDesign1,InputDesign1,RadioDesign2,RadioDesign3,InputDesign3,RadioDesign4,
RadioDesign5,InputDesign5,RadioDesign6,InputDesign6,RadioDesign7,InputDesign7){
data2={
RadioDesign1:RadioDesign1,
RadioDesign2:RadioDesign2,
RadioDesign3:RadioDesign3,
RadioDesign4:RadioDesign4,
RadioDesign5:RadioDesign5,
RadioDesign6:RadioDesign6,
RadioDesign7:RadioDesign7,

InputDesign1:InputDesign1,
InputDesign3:InputDesign3,
InputDesign5:InputDesign5,
InputDesign6:InputDesign6,
InputDesign7:InputDesign7
};

}

function createData3(RadioRecrutador1,InputRecrutador1,RadioRecrutador2,InputRecrutador2,RadioRecrutador3,RadioRecrutador4,
RadioRecrutador5,InputRecrutador5,RadioRecrutador6,InputRecrutador6,RadioRecrutador7,InputRecrutador7){
data3={
RadioRecrutador1:RadioRecrutador1,
InputRecrutador1:InputRecrutador1,
RadioRecrutador2:RadioRecrutador2,
InputRecrutador2:InputRecrutador2,
RadioRecrutador3:RadioRecrutador3,
RadioRecrutador4:RadioRecrutador4,
RadioRecrutador5:RadioRecrutador5,
InputRecrutador5:InputRecrutador5,
RadioRecrutador6:RadioRecrutador6,
InputRecrutador6:InputRecrutador6,
RadioRecrutador7:RadioRecrutador7,
InputRecrutador7:InputRecrutador7,

};

}
async function verificaEmails(){

  await firebase.database().ref("designer").on("value", function(snapshot){

    console.log("comeco");
    var x = snapshot.forEach(function (item){

      console.log(item.val().data1.email);
    if(InputEmail.value == item.val().data1.email){
        return false;
    }

});
});
}

async function createDataDesigner(){
  var dataDesigner={data1,data2};
  console.log(dataDesigner);

  await firebase.database().ref().child("designer").push(dataDesigner);
}

async function createDataRecrutador(){
  var dataRecrutador={data1,data3};
  console.log(dataRecrutador);

  await firebase.database().ref().child("recrutador").push(dataRecrutador);
}