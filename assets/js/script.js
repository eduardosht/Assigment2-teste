( function($) {
    $(document).ready(function () {

		$( "#next" ).on( 'click', function() {

			if ( $("#main-form").valid() ) {
				
				var tipoUsuario = $('input[name=tipo]:checked').val();

				$('.first-step').fadeOut( "fast", function() {
					$( '.second-step-'+tipoUsuario ).fadeIn();
				});
			}

		}); 

		$('.finalizar-form').on( 'click', function() {
			$("#main-form").validate();
		});

	    $("input[type='radio']").change( function() {
	        var selectedValue 	  = $(this).val();
	        var showInput 		  = $(this).parent().find('.outro-input');
	        var cleanErrorMessage = $(this).parent().find('.error');

	        if (selectedValue == "Outro" || selectedValue == "Já o faço" ) {
	            showInput.show();
	        } else {
	            showInput.hide();
	            cleanErrorMessage.hide();
	        }
	    });

	    $("input[type='checkbox']").change( function() {
	        var selectedValues 	  = $('.checkeboxes-quest5 input[type="checkbox"]:checked');


			$( selectedValues ).each(function( index ) {
		        var showInput 		  = $(this).parent().find('.outro-input');
		        var cleanErrorMessage = $(this).parent().find('.error');

		        if ( $( this ).val() == "Outro" || $( this ).val() == "Já o faço" ) {
		            showInput.show();
		            return false;
		        } else {
		            showInput.hide();
		            cleanErrorMessage.hide();
		        }
			});

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

				b2c_quest_1: "required",
				b2c_quest_1_outro: "required",

				b2c_quest_2: "required",

				b2c_quest_3: "required",
				b2c_quest_3_outro: "required",

				b2c_quest_4: "required",

				b2c_quest_5: "required",
				b2c_quest_5_outro: "required",

				b2c_quest_6: "required",
				b2c_quest_6_outro: "required",

				b2c_quest_7: "required",
				b2c_quest_7_outro: "required",

				b2b_quest_1: "required",
				b2b_quest_1_outro: "required",

				b2b_quest_2: "required",
				b2b_quest_2_outro: "required",

				b2b_quest_3: "required",
				b2b_quest_4: "required",

				b2b_quest_5: "required",
				b2b_quest_5_outro: "required",

				b2b_quest_6: "required",
				b2b_quest_6_outro: "required",

				b2b_quest_7: "required",
				b2b_quest_7_outro: "required"
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

				b2c_quest_1: "Selecione uma das opções",
				b2c_quest_1_outro: "Esse campo é obrigatório",

				b2c_quest_2: "Selecione uma das opções",

				b2c_quest_3: "Selecione uma das opções",
				b2c_quest_3_outro: "Esse campo é obrigatório",

				b2c_quest_4: "Selecione uma das opções",

				b2c_quest_5: "Selecione uma das opções",
				b2c_quest_5_outro: "Esse campo é obrigatório",

				b2c_quest_6: "Selecione uma das opções",
				b2c_quest_6_outro: "Esse campo é obrigatório",

				b2c_quest_7: "Selecione uma das opções",
				b2c_quest_7_outro: "Esse campo é obrigatório",

				b2b_quest_1: "Selecione uma das opções",
				b2b_quest_1_outro: "Esse campo é obrigatório",

				b2b_quest_2: "Selecione uma das opções",
				b2b_quest_2_outro: "Esse campo é obrigatório",

				b2b_quest_3: "Selecione uma das opções",
				b2b_quest_4: "Selecione uma das opções",

				b2b_quest_5: "Selecione uma das opções",
				b2b_quest_5_outro: "Esse campo é obrigatório",

				b2b_quest_6: "Selecione uma das opções",
				b2b_quest_6_outro: "Esse campo é obrigatório",

				b2b_quest_7: "Selecione uma das opções",
				b2b_quest_7_outro: "Esse campo é obrigatório"

			}
		});
    });

} )( jQuery );