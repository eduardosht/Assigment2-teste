var arr = "nome;email;data_hora" + "\n";
convert_CSV();

async function convert_CSV() {
	await firebase.database().ref().on("value", function( data  ) {
		data.forEach( function ( item ) {
			var propiedades = item.val().data1;
			arr += propiedades.nome + ";";
			arr += propiedades.email + ";";
			//arr += propiedades.profissao + ";";
			arr += propiedades.data_hora + "\n";
		} );
	} );
}
setTimeout( function() {
	console.log(arr);
}, 10000);