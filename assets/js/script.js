( function($) {
    $(document).ready(function () {

		$( "#next" ).on( 'click', function() {

			if ( $("#main-form").valid() ) {
				
				var tipoUsuario = $('input[name=tipo]:checked').val();

				$('.first-step').fadeOut( "fast", function() {
					$( '.second-step-'+tipoUsuario ).fadeIn();
				});
				console.log('valido');
			} else {
				console.log('nao valido');
			}

		}); 

		$("#main-form").validate({
			rules: {
				nome: "required",
				email: {
					required: true,
					email: true
				},
				tipo: "required",
				experiencia: "required",
				desejo_mdigital: "required",
				teste: "required",
				teste: "required"
			},
			messages: {

				nome: "Por favor preencha com seu nome completo",
				email: {
					required: "Por favor preencha com seu e-mail",
					email: "Por favor preencha com um e-mail válido"
				},
				tipo: "Selecione uma das opções",
				experiencia: "Selecione uma das opções",
				desejo_mdigital: "Selecione uma das opções",
				teste: "teste error",
				teste: "teste2 error"
			}
		});
    });

} )( jQuery );