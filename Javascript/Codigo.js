
$(document).ready(function () {

	
	
		var contador_visitas
		contador_visitas = Math.round(Math.random()*50000);
		
		
	$("#vercurriculum").click(function() {
		alert("Usted es el visitante " + contador_visitas + " de esta documento.");
	});	
	
	
	$("#vercurriculum").click(function () {
		$("#Curriculum").fadeIn();
				
	});
	
	$("#ocultarcurriculum").click(function () {
		$("#Curriculum"). fadeOut();
		
				
	});
	
	 $('.carousel').carousel({
      interval: 8000
    });
	

	$('[data-toggle="popover"]').popover();
	
	 $('.example-popover').popover({
    container: 'modalmensaje'
  })


	$("#sebastian").click(function () {
		$("#contenedor").fadeIn();
		$("#fichasebastian").fadeIn();
		
	});
	
	$("#ocultarfichasebastian").click(function () {
		$("#fichasebastian").fadeOut();
		$("#contenedor").fadeOut();
	});
	
	$("#rita").click(function () {
		$("#contenedor").fadeIn();
		$("#ficharita").fadeIn();
		
	});
	
	$("#ocultarrita").click(function () {
		$("#ficharita").fadeOut();
		$("#contenedor").fadeOut();
	});
	
	$("#vercarta").click(function(){
		$("#cartapresentacion").fadeIn();
		$("#contenedor").fadeIn();
		
	});
	
	
	$("#contenedor").click(function () {
		$("#cartapresentacion").fadeOut();
		$("#contenedor").fadeOut();
		$("#fichasebastian").fadeOut();
		$("#ficharita").fadeOut();
		

	});
	
	$("#contenedor").click(function (event) {       //se usa event.stopPropagation(); para evitar que el click que es un evento y se propague al padre

		event.stopPropagation();
	});
	
	
	$('body').scrollspy({ target: '#navbarNavDropdown' })
    
    
    $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
  
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
	
	
	$("#cambiaaingles").click(function(){
    $("#pseccion1").html("Hola Cambio el Texto");
 });
	
    
    
    
    
    
    
	
	
	
	
	
	
	// Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    
    if (this.hash !== "") {
      
      event.preventDefault();

      // Store hash
      var hash = this.hash;

     
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
      }
    });
  });

		
	
	
	
	
});

