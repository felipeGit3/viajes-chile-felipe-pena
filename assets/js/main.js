$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    
    $('#enviarCorreo').click(function(){
        alert("El correo fue enviado correctamente...");
    });
    $('.transforma-verde').dblclick(function(){
        $(this).css("color",'green');
    });

    $('.card-title').click(function(){
        $('.card-text').toggle();
    });

});

