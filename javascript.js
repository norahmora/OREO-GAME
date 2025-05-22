// JavaScript Document
$(document).ready(function(){
	var aciertos= 0;
	var errores= 0;
	setInterval(gameover, 500);
	
	function gameover(){
		if(errores===2){
		    $("#escena-lose").fadeIn(1000);}
	}
	
  $("#start-btn").click(function(){
    $("#escena-01").fadeOut(1000);
    $("#escena-02").fadeIn(1000);
  });
	
	$("#inicio-btn").click(function(){
    $("#escena-02").fadeOut(1000);
    $("#escena-03").fadeIn(1000);
  });
	
	$("#tocadiscos-btn").click(function(){
    $("#escena-03").fadeOut(1000);
    $("#escena-04").fadeIn(1000);
  });
	
$("#pregunta-01-c-btn").click(function(){
   errores++;
	$("#escena-04").fadeOut(1000);
    $("#escena-05").fadeIn(1000);
  });
$("#pregunta-01-b-btn").click(function(){
   aciertos++;
	$("#escena-04").fadeOut(1000);
    $("#escena-05").fadeIn(1000);
  });
$("#pregunta-01-a-btn").click(function(){
   errores++;
	$("#escena-04").fadeOut(1000);
    $("#escena-05").fadeIn(1000);
  });
	
$("#reloj-btn").click(function(){
    $("#escena-05").fadeOut(1000);
    $("#escena-06").fadeIn(1000);
  });
$("#pregunta-02-a-btn").click(function(){
   errores++;
	$("#escena-06").fadeOut(1000);
    $("#escena-07").fadeIn(1000);
  });
$("#pregunta-02-b-btn").click(function(){
   errores++;
	$("#escena-06").fadeOut(1000);
    $("#escena-07").fadeIn(1000);
  });
$("#pregunta-02-c-btn").click(function(){
   aciertos++;
	$("#escena-06").fadeOut(1000);
    $("#escena-07").fadeIn(1000);
  });
$("#pregunta-03-a-btn").click(function(){
   aciertos++;
	$("#escena-08").fadeOut(1000);
    $("#escena-09").fadeIn(1000);
  });
$("#pregunta-03-b-btn").click(function(){
   errores++;
	$("#escena-08").fadeOut(1000);
    $("#escena-09").fadeIn(1000);
  });
$("#pregunta-03-c-btn").click(function(){
   errores++;
	$("#escena-08").fadeOut(1000);
    $("#escena-09").fadeIn(1000);
  });
$("#movil-btn-escena-07").click(function(){
    $("#escena-07").fadeOut(1000);
    $("#escena-08").fadeIn(1000);
  });
$("#leche-btn").click(function(){
    $("#escena-09").fadeOut(1000);
    $("#escena-10").fadeIn(1000);
      setTimeout(function(){
        $("#escena-11").fadeIn(1000);
      }, 2000);
  });
$("#retry-btn").click(function(){
    location.reload();
  });

	
});// fin del código