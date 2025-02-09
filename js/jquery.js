$(document).ready(function(){
    // Slide up displayed paragraphs
    $("#ocultar").click(function(){
        $("#panel").slideUp();
    });
    
    // Slide down hidden paragraphs
    $("#mostrar").dblclick(function(){
        $("#panel").slideDown();
    });
});

$(document).ready(function() {
    $("#basic-form").validate();
  });

  