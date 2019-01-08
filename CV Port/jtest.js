

$('#ed').on('click', function(){

	$('html, body').animate({
                    scrollTop: $("#divs_ed").offset().top -window.innerHeight/10
                }, 500);

})
				
$('#it_skills').on('click', function(){
				
					$('html, body').animate({
                    scrollTop: $("#divs_it").offset().top -window.innerHeight/10
                }, 500);
				
				$( "#it_title" ).css( "display", "block" );
})
				
$('#skills').on('click', function(){				
					$('html, body').animate({
                    scrollTop: $("#divs_sk").offset().top -window.innerHeight/10
                }, 500);
})
				
$('#p_q').on('click', function(){				
					$('html, body').animate({
                    scrollTop: $("#divs_pq").offset().top -window.innerHeight/10
                }, 500);
})
				
$('#ach').on('click', function(){				
					$('html, body').animate({
                    scrollTop: $("#divs_ach").offset().top -window.innerHeight/10
                }, 500);
	

	
})







$('#city_e').on('click', function(){

	$('html, body').animate({
                    scrollTop: $("#c_e").offset().top
                }, 500);

})
				
$('#seaside').on('click', function(){
				
					$('html, body').animate({
                    scrollTop: $("#sea").offset().top
                }, 500);
})
				
$('#ap_re').on('click', function(){				
					$('html, body').animate({
                    scrollTop: $("#a_r").offset().top
                }, 500);
})
				
$('#e_re').on('click', function(){				
					$('html, body').animate({
                    scrollTop: $("#e_r").offset().top
                }, 500);
})
				
$('#c_cities').on('click', function(){				
					$('html, body').animate({
                    scrollTop: $("#c_c").offset().top 
                }, 500);
	

	
})

$('#glas').on('click', function(){				
					$('html, body').animate({
                    scrollTop: $("#g_l").offset().top 
                }, 500);
	

	
})

$('#c_coding').on('click', function(){				
					$('html, body').animate({
                    scrollTop: $("#code").offset().top
                }, 500);
	

	
})



$( window ).scroll(function() {
	
  $( "span.to_top" ).css( "display", "block" );
});

$('#tops').on('click', function(){				
	$('html, body').animate({
		scrollTop: $("div.anchor").offset().top
		}, 500);

	$( "span.to_top" ).css( "display", "none" );
	
	$( "#it_title" ).css( "display", "block" );
	

})




