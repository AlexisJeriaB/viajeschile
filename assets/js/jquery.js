

$(document).ready(function () {
    
    $("#enviarCorreo").click(function(otro){
        alert("El correo fue enviado correctamente");
    });

   
    $("#rojo1, #rojo2").on("dblclick change",function(){
        $(this).css({
            "color": "red"
        });
	});


    $(".tcard").click(function () {
        $(".pcard").toggle();
    });

});


