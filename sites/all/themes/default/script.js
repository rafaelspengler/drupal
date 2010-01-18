$(function(){
	// faz as mudancas de valor no onfocus de determinados campos
	$('#edit-search-block-form-1').val('Buscar:');

	$('#edit-search-block-form-1')
 		.focus(function(){
 			if($(this).val() == 'Buscar:'){
				 $(this).val('');
 		}})
 		.blur(function(){
			if($(this).val() == '' || $(this).val() == 'Buscar:'){
				$(this).val('Buscar:');
		}}); 
	// corrige a tradução do botão do formulario
	$("#edit-submit").val("Enviar");
	
	//valida o formulario
	/**
	* @author Maiquel Leonel
	*/
	var classeErro = 'error';
	$("#webform-client-form-7").validate({
		rules: {
			"submitted[nome]":{required: true ,minlength: 3},
			"submitted[email]":{required:true,email:true},
			"submitted[cidade]":{required:true},
			"submitted[estado]":{required:true},
			"submitted[assunto]":{required:true},
			"submitted[mensagem]":{required:true}
		},
		messages: {
			"submitted[nome]":{required: 'Campo obrigat&oacute;rio!', minlength: 'Pelo menos 03 letras.'},
			"submitted[email]":{required: 'Campo obrigat&oacute;rio!',email:'Email inv&aacute;lido.'},
			"submitted[cidade]":{ required: 'Campo obrigat&oacute;rio!'},
			"submitted[estado]":{ required: 'Campo obrigat&oacute;rio!'},
			"submitted[assunto]":{ required: 'Campo obrigat&oacute;rio!'},
			"submitted[mensagem]":{ required: 'Campo obrigat&oacute;rio!'}			
		},
		highlight: function(element, errorClass){
			$(element).prev().addClass(classeErro);
		},
		unhighlight: function(element, errorClass){
			$(element).prev().removeClass(classeErro);
		},
		errorPlacement: function(error, element){
			error.appendTo(element.prev());
		},
		errorElement: 'span',
		submitHandler: function(form) {
			$(form).ajaxSubmit();			
			$(form).slideUp(1500,function(){
				$('#messagem-sucesso').html('Sua mensagem foi enviada com sucesso! <br />Obrigado!').fadeOut(2500,function(){
					$(form).resetForm();
					$(form).slideDown('slow');
				});
			});		
		} 
	});	
});