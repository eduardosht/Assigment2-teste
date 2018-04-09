var texton="";
var i=1;
var y=1;
Datando2();
Datando3();

async function Datando2(){

await firebase.database().ref("designer").on("value", function(snapshot){

  var x = snapshot.forEach(function (item){
var arr = i+" - ";
arr +="Eu sou? R:"+item.val().data1.categoria+";"+"Email R:"+item.val().data1.email+";";
arr +="Em um processo seletivo, o que você sente que valorizam mais em você? R:"+item.val().data2.RadioDesign1 + ";"+"Outro:"+item.val().data2.InputDesign1+";";
arr +="Você acha que as provas de habilidades específicas medem bem as habilidades necessárias? R:"+item.val().data2.RadioDesign2+";";
arr +="O que mais te frustra durante a realização destas provas técnicas em processos seletivos? R:"+item.val().data2.RadioDesign3 +";"+ "Outro:"+item.val().data2.InputDesign3+";";
arr +="Você já foi contratado pelas suas habilidades, mas raramente as utilizou? R:"+item.val().data2.RadioDesign4+";";
arr +="Se sim, como você se sentiu? R:"+item.val().data2.RadioDesign5+ ";"+"Outro:"+item.val().data2.InputDesign5+";";
arr +="O que é essencial para um bom processo seletivo de UX design? R:"+item.val().data2.RadioDesign6+ ";"+"Outro:"+item.val().data2.InputDesign6+";";
arr +="O que enfraquece um processo de seleção para UX Design? R:"+item.val().data2.RadioDesign7+ ";"+"Outro:"+item.val().data2.InputDesign7 +"\n";
texton += arr+"\n";
i++;
});


});
}

async function Datando3(){

await firebase.database().ref("recrutador").on("value", function(snapshot){

  var x = snapshot.forEach(function (item){
    var arr = y+" - ";
    arr +="Eu sou? R:"+item.val().data1.categoria+";"+"Email R:"+item.val().data1.email+";";
    arr +="Durante um processo seletivo, o que a sua empresa mais valoriza no candidato? R:"+item.val().data3.RadioRecrutador1 +";"+ "Outro:"+item.val().data3.InputRecrutador1+";";
    arr +="Em quais critérios sua empresa se baseia para definir um teste técnico? R:"+item.val().data3.RadioRecrutador2 + ";"+"Outro:"+item.val().data3.InputRecrutador2+";";
    arr +="Os critérios da empresa são validados através dos testes atuais? R:"+item.val().data3.RadioRecrutador3+";";
    arr +="A sua empresa já fez uma contratação equivocada devido a dificuldades na hora do recrutamento? R:"+item.val().data3.RadioRecrutador4+";";
    arr +="Caso tenha respondido “sim”, qual foi o equívoco? R:"+item.val().data3.RadioRecrutador5+ ";"+"Outro:"+item.val().data3.inputRecrutador5+";";
    arr +="O que vocês fazem quando identificam que um profissional contratado não se encaixa às competências necessárias? R:"+item.val().data3.RadioRecrutador6+ ";"+"Outro:"+item.val().data3.InputRecrutador6+";";
    arr +="Você tem interesse em contratar uma empresa para terceirizar o recrutamento de designers? R:"+item.val().data3.RadioRecrutador7+"\n";

texton += arr+"\n";
y++;
});
console.log(texton);
});
}
