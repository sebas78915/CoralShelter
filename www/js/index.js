//var cronometro;
var intro, creditos, tortuga, foca, ballena, histTortuga, histFoca, histBallena;

function desaparecer(){
    var pantalla = document.getElementById("pantalla_carga");
    pantalla.style.display = "none";
}
setTimeout(desaparecer,3000);

function inicializarVariables(){
    intro = document.getElementById("pantalla_introduccion");
    creditos = document.getElementById("creditos");
    tortuga = document.getElementById("pantalla_tortuga");
    foca = document.getElementById("pantalla_foca");
    ballena = document.getElementById("pantalla_ballena");
    histTortuga = document.getElementById("historia_tortuga");
    histFoca = document.getElementById("historia_foca");
    histBallena = document.getElementById("historia_ballena");
}

function btnCreditos(){
    inicializarVariables();
    intro.style.display = "none";
    creditos.style.display = "block";
    tortuga.style.display = "none";
    foca.style.display = "none";
    ballena.style.display = "none";
    histTortuga.style.display = "none";
    histFoca.style.display = "none";
    histBallena.style.display = "none";
}

function btnHome(){
    inicializarVariables();
    intro.style.display = "block";
    creditos.style.display = "none";
    tortuga.style.display = "none";
    foca.style.display = "none";
    ballena.style.display = "none";
    histTortuga.style.display = "none";
    histFoca.style.display = "none";
    histBallena.style.display = "none";
}

function vector(){
    var array = [];
    inicializarVariables();
    array[0]=tortuga.style.display;
    array[1]=foca.style.display;
    array[2]=ballena.style.display;

    return array;
}


function btnPlay(){
    var random;
    var vector=[];
    inicializarVariables();
    intro.style.display = "none";
    creditos.style.display = "none";
    tortuga.style.display = "block";
    foca.style.display = "none";
    ballena.style.display = "none";
    histTortuga.style.display = "none";
    histFoca.style.display = "none";
    histBallena.style.display = "none";
    carga();
}

function btnPausa(){
    inicializarVariables();
    lightbox.className="mostrar";
    btnCerrar.addEventListener("click",()=>{
        lightbox.className="ocultar";
    });
}

function carga(){
    inicializarVariables();
    if (tortuga.style.display=="block") {
        cont_s = 0;
        s=document.getElementById("segundos");

        window.setInterval(function(){
            s.innerHTML = cont_s;
            cont_s++;
            if (cont_s==30) {
                
            }
        },1000);
    }
    if (foca.style.display=="block") {
        cont_s = 0;
        s=document.getElementById("segundos2");

        window.setInterval(function(){
            s.innerHTML = cont_s;
            cont_s++;
            if (cont_s==30) {
                
            }
        },1000);
    }
    if (ballena.style.display=="block") {
        cont_s = 0;
        s=document.getElementById("segundos3");

        window.setInterval(function(){
            s.innerHTML = cont_s;
            cont_s++;
            if (cont_s==30) {
                
            }
        },1000);
    }   
}
