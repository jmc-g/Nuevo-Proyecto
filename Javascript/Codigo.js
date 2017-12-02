
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
    $("#divintroduccion").html("My name is José Guánchez, I am of Venezuelan nationality, I am 30 years old and I have been living in Montevideo for almost 2 years. Complete university studies in Public Accounting. I am currently working in Biko SA, in the administrative part and one of my medium-term work goals, is to achieve employment in the field related to programming, because I feel it is my vocation and I am more passionate than accounting . In the medium term, I have set as a student and personal goal to make a career as an analyst in programming, since I must strengthen my knowledge and security in regard to the field, in order to have a better job development. He characterized me for being a respectful, kind, collaborative, responsible person, who likes to do things well and finish what I started, also taking into consideration that I must improve and further develop my ability to communicate to the public. I welcome you to my Website, where you can find information related to the world of Web Development and Transversal Competences. My main objective in this page, is to provide you with the most knowledge acquired during the course I did in Plan Ceibal.");
        var x=document.getElementById("divintroduccion");
        x.style.color ="black"
        var y=document.getElementById("divintroduccion")
        y.style.backgroundColor = "white"
        
 });
    
    
    $("#cambiaespanol").click(function(){
    $("#divintroduccion").html("Mi nobre es José Guánchez, soy de nacionalidad Venezolana , tengo 30 años de edad y estoy residenciado en Montevideo desde hace casí 2 años. Culmine estudios universitarios en Contaduría Pública. Actualmente me encuentro Laborando en Biko S.A, en la parte administrativa y una de mis metas laborales a mediano plazo, es lograr la inserción laboral en el ámbito relacionado a la programación, debido a que siento que es mi vocación y me apasiona más que la contaduría. A mediano plazo, tengo planteado como meta estudiantíl y personal realizar una carrera de analista en programación, ya que debo afianzar mis conocimientos y seguridad en lo que se refiere al campo, para así poder tener un mejor desenvolvimiento laboral. Me caracterizó por ser una persona respetuosa, amable, colaboradora, responsable, que le gusta hacer las cosas bien y terminar lo que comienzo, teniendo tambien en consideración que debo mejorar y desarrollar mas mi capacidad de comunicarme al público. Les doy la bienvenida a mi Página Web, donde podrán encontrar información relacionada al mundo del Desarrollo Web y Competencias Transversales. Mi principal objetivo en este página, es proporcionarles el mayor conocimiento adquirido durante el curso que realicé en el Plan Ceibal.");
        var a=document.getElementById("divintroduccion");
        a.style.color ="white"
        var b=document.getElementById("divintroduccion")
        b.style.backgroundColor = "black"
        
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

