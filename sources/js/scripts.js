$(document).ready(function(){
	$(".cesta").click(function(){
		var cesta = $(this).data('cesta');
		var titulo = $(this).data('titulo');
		var itens = $(this).data('itens');
		var preco = $(this).data('preco').split(',');

		$('#cesta .titulo-cesta p').html(titulo);
		$('#cesta .itens').html(itens+" CARNES");
		$('#cesta .preco').html("<span>R$</span> "+preco[0]+"<small>,"+preco[1]+"</small>");
		$('#cesta .pedido').attr('href', 'pedido.php?cesta='+titulo);
		//$('#cesta .carnes').load(cesta+".html");
		//$('#cesta .padrao').load("padrao.html");

		$('#cesta .seta').animate({bottom:'0'});
		setTimeout(sumir, 5000);
	});

	$('.ver-lista').click(function(){
		//alert();
		$(this).fadeOut(300);
		$('.padrao').slideDown(300);
	});

	$('.fechar').click(function(){
		$('.padrao').hide();
		$('.ver-lista').show();
		setTimeout(aparecer, 1000);
	});

	$('.fechaLigacao').click(function(){
		$('#blocoLigamos').fadeIn(300);
		//$('#ligacao').modal('hide');
	});

	$('.linkPagina').click(function(){
		var pagina = $(this).data('pagina');
		var estilo = $(this).data('estilo');

		if($('#pagina #estilo').hasClass('corPagamento')){
			$('#pagina #estilo').removeClass('corPagamento');
		}
		if($('#pagina #estilo').hasClass('corEntrega')){
			$('#pagina #estilo').removeClass('corEntrega');
		}
		if($('#pagina #estilo').hasClass('corAtendimento')){
			$('#pagina #estilo').removeClass('corAtendimento');
		}
 
		$('#pagina #estilo').addClass(estilo);
		$('#pagina .pagina-content').load(pagina+".html"); 
	});

	setTimeout(sumir, 3000);

});

function sumir(){
	$('.seta').animate({bottom:'-100px'});
}

function blinker() {
    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500); 
}
setInterval(blinker, 1000);

function aparecer(){
	$('#ligacao').modal('show');
}

$(window).load(function(){
	//$('#info').modal('show');
	
	$('#seguro').modal('show');
		
	//setTimeout(aparecer, 20000);
	//aparecer();
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) { //use `this`, not `document`
        $('.fixo').fadeOut(500);
    }
});