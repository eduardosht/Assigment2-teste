( function($) {
    $(document).ready(function () {

    	var $form = $("#mc-embedded-subscribe-form");

		$('#mc-embedded-subscribe').on( 'click', function(e) {
			e.preventDefault();
			if ( $form.valid() ) {
				
				$(this).prop('disabled', true);
				
				enviaDataDB();
				
				setTimeout(
					function() {
						window.location = "http://entrenofluxo.com.br/obrigado";
					}, 1000
				);
			}
		});

		jQuery.validator.addMethod("fullName", function(value, element) {
		    var name_filtered = value.split(' ').filter(function(v){return v!==''});
		    if ( name_filtered.length > 1) {
		        //two or more words
		        return true;
		    } else {
		        //not enough words
		        return false;
		    }
		  return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test( value );
		}, 'Please enter a valid email address.');


		$form.validate({
			rules: {
				FNAME: {
					required: true,
					fullName: true
				},
				EMAIL: {
					required: true,
					email: true
				},
				PROFISSAO: "required"
			},
			messages: {

				FNAME: {
					required: "Por favor preencha com seu nome completo",
					fullName: "Digite seu nome completo"
				},
				EMAIL: {
					required: "Por favor preencha com seu e-mail",
					email: "Por favor preencha com um e-mail válido"
				},
				PROFISSAO: "Selecione uma das opções"
			}
		});
	});

	$('#dateTime').val( getDate_beautyFormat() );

} )( jQuery );