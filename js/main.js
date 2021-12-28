// /* Funcion para numero aleatorio */
function numeroAleatorio() {
    // var aleatorio = Math.round(Math.random() * 5000);
    // Número aleatorio
    var aleatorio = Math.floor(Math.random() * (0010 - 0500)) + 0500;
    // Selección de span para insertar el random
    var texto = document.querySelector("#random");
        // Inserrtamos el numero aleatorio
    texto.innerHTML = aleatorio;
}

numeroAleatorio();

/* Smooth scrolling para anclas */
$("a.smooth").on("click", function (e) {
    e.preventDefault();
    var $link = $(this);
    var anchor = $link.attr("href");
    $("html, body").stop().animate({
        scrollTop: $(anchor).offset().top - 100 + "px"        
    }, 1000);
});

/* Barra de menu aparece en la sección noticias */
$(window).scroll(function () {
    var news = $("#news").offset().top;
    if ($(window).scrollTop() < news) {
        $(".navbar").fadeOut();
    } else {
        $(".navbar").fadeIn();
    }
});

/* Validacion ajax en formulario  */
$(".form-contact").bind("submit", function () {
    $.ajax({
        type: $(this).attr("method"),
        url: $(this).attr("action"),
        data: $(this).serialize(),
        success: function () {
            $("#alert-contacto").fadeIn();
            $("#send-contact").addClass("hide");
        },
        error: function () {
            alert("error");
        }
    });

    return false;
});

/* Validacion de formulario de contacto */
$("#btn-enviar").on("click", function () {
    let nombre = $("#name").val();
    let email = $("#email").val();
    let telefono = $("#phone").val();
    let message = $("#message").val();

    //Preguntamos si la variable nombre esta vacia
    if (nombre == "") {
        //Si esta vacia agregamos la clase alert-input y pocicionamos el focus en ese input
        $("#name").addClass("alert-input").focus();
        //Retornamos falso para que se detenga la ejecución de la función
        return false;
    } else {
        //Si nombre no esta vacia removemos la clase alert-input
        $("#name").removeClass("alert-input");
    }
    if (email.length == 0) {
        $("#email").addClass("alert-input").focus();
        return false;
    } else {
        $("#email").removeClass("alert-input");
    }
    if (telefono.length == 0) {
        $("#phone").addClass("alert-input").focus();
        return false;
    } else {
        $("#phone").removeClass("alert-input");
    }
    if (message.length == 0) {
        $("#message").addClass("alert-input").focus();
        return false;
    } else {
        $("#message").removeClass("alert-input");
    }
});


/* ***** Modal Noticias ***** */
$('#modalNavidad').modal('show');

$(function () {

    $('.bloxPopup').lightboxController({
        appendRegion: '.contentWrap',
        opened: function () {
            console.log("overlay opened");
        },
        closed: function () {
            console.log("overlay closed");
        }
    });

});

var images = [
    "../images/Home/01_home.jpg",
    "../images/Home/02_home.jpg",
    "../images/Home/03_home.jpg",
    "../images/Home/04_home.jpg",
    "../images/Home/05_home.jpg",
    "../images/Home/06_home.jpg"
  ]

  var imageHead = document.querySelector(".home");

  var i = 0;
setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 5000);
