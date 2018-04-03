var texton = "";
var i=1;
var y=1;
Datando2();
Datando3();
async function Datando2(){

await firebase.database().ref("designer").on("value", function(snapshot){

  var x = snapshot.forEach(function (item){
var arr = i+" - "+item.val().data1.categoria + ";"+item.val().data1.nome+
";"+item.val().data1.email+";"+item.val().data1.userip+";"+item.val().data1.data_hora;

texton += arr+"\n";
i++;
});
});


}

async function Datando3(){

await firebase.database().ref("recrutador").on("value", function(snapshot){

  var x = snapshot.forEach(function (item){
var arr = y+" - "+item.val().data1.categoria + ";"+item.val().data1.nome+
";"+item.val().data1.email+";"+item.val().data1.userip+";"+item.val().data1.data_hora;

texton += arr+"\n";
y++;
});
console.log(texton);
});


}
