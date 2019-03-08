window.onload = inicio;

var heridas = [];
var botones = [];
var btnHeridas = [];
var randomAnima = [];
var heridasCtd;
var camilla;
var puntaje = 0;
var heridaCurar;
var vistaPuntage;
var vistaPuntajeWin;
var lightboxPerdiste;
var countHeridas = 0;
var posicionAnimal = 0;

function inicio(){
    inicializarVariables();
    randomAnimales();
    verAnimales(posicionAnimal);
    asignarEventosHerramientas();
    verPuntaje();
}

function desaparecer(){
    var pantalla = document.getElementById("pantalla_carga");
    // pantalla.style.display = "none";
    pantalla.className="ocultar animated bounceOut"
    pantalla_introduccion.className="mostrar animated slideInUp";
}
setTimeout(desaparecer,3000);

function inicializarVariables(){
    intro = document.getElementById("pantalla_introduccion");
    creditos = document.getElementById("creditos");
    juego = document.getElementById("pantalla_juego");
    foca = document.getElementById("pantalla_foca");
    ballena = document.getElementById("pantalla_ballena");
    histTortuga = document.getElementById("historia_tortuga");
    histFoca = document.getElementById("historia_foca");
    histBallena = document.getElementById("historia_ballena");
    s=document.getElementById("segundos");
    camilla = document.getElementById("camilla");
    heridasCtd = document.getElementById("heridasCtd");
    vistaPuntage = document.getElementById("vistaPuntage");
    vistaPuntajeWin = document.getElementById("vistaPuntaje");
    lightboxPerdiste = document.getElementById("lightboxPerdiste");

    heridas.push(new herida("p", "img/imgHeridas/basura2Ballena.png", "ballena"));
    heridas.push(new herida("p", "img/imgHeridas/basuraBallena.png",  "ballena"));
    heridas.push(new herida("p", "img/imgHeridas/basuraFoca.png", "foca"));
    heridas.push(new herida("b", "img/imgHeridas/basuraTortuga.png", "tortuga"));
    heridas.push(new herida("a", "img/imgHeridas/Cortada.png", "todos"));
    heridas.push(new herida("c", "img/imgHeridas/herida1.png", "todos"));
    heridas.push(new herida("e", "img/imgHeridas/Herida2.png", "todos"));
    heridas.push(new herida("a", "img/imgHeridas/herida4.png", "todos"));
    heridas.push(new herida("p", "img/imgHeridas/PaloTortuga.png", "tortuga"));
    heridas.push(new herida("c", "img/imgHeridas/Quemadura2.png", "todos"));
    heridas.push(new herida("p", "img/imgHeridas/VidrioTortuga.png", "tortuga"));

    randomAnima.push(new animalHerido("tortuga","img/Tortuga.png","heridasTortuga"));
    randomAnima.push(new animalHerido("ballena","img/Ballena.png","heridasBallena"));
    randomAnima.push(new animalHerido("foca","img/Foca.png","heridasFoca"));

    boton("button1","p");
    boton("button2","e");
    boton("button3","a");
    boton("button4","c");
    boton("button5","b");
}

function btnPausa(){
    lightbox.className="mostrar animated fadeIn";
    play_pausa.addEventListener("click",()=>{
        lightbox.className="ocultar animated fadeOut";
    });
    reinicio_pausa.addEventListener("click",()=>{
        lightbox.className="ocultar animated fadeOut";
        cont_s=0;
        randomAnimales();
        verAnimales(posicionAnimal);
        asignarEventosHerramientas();
    });

    home_pausa.addEventListener("click", ()=>{
        lightbox.className="ocultar";
    });
}

function btnResume(){
    
}

function carga(){
    if (juego.style.display=="block") {
        cont_s = 2;
        
        window.setInterval(function(){
            s.innerHTML = cont_s;
            tiempo = cont_s;
            cont_s++;
            if (cont_s==32) {
                lightboxPerdedor.className="mostrar";
                ventanaPerdiste.className="mostrar animated rubberBand"
                inicio_perdiste.addEventListener("click",()=>{
                    lightboxPerdedor.className="ocultar";
                });
                reinicio_perdiste.addEventListener("click",()=>{
                    lightboxPerdedor.className="ocultar";
                    cont_s=0;
                });
            }
        },1000);
    }
}

function cambioSeccion(seccion) {
    var i, tabContenido;
    pantalla_introduccion.className="tab ocultar";
	tabContenido = document.getElementsByClassName("tab");
	for (i = 0; i < tabContenido.length; i++) {
        tabContenido[i].style.display = "none";
	}	
    document.getElementById(seccion).style.display = "block";
    carga();
}

// efkjdwkefbkbkvbakbkvkagjkrfjvkjdkjvrjkarvjkr v jkr fvjkrvjkrvjkWVKJVJKSVJK KJV KJ KJRV <S VK 

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  function randomAnimales(){
      randomAnima = shuffle(randomAnima);
  }
  
  function verAnimales(animal){
     camilla.style.background = "url('"+randomAnima[animal].url+"') no-repeat";
     heridasCtd.className = randomAnima[animal].contenedorHeridas;
     heridasCtd.innerHTML = "";
    verHeridas(animal);
    countHeridas = 0;  
  }

  function verHeridas(animal){
      heridas = shuffle(heridas);
      var documentText = "";
      var temp = [];
      for (const key in heridas) {
          if(randomAnima[animal].nombre == heridas[key].animal || "todos" == heridas[key].animal){
              documentText += "<button class='btnsHeridas' id='"+heridas[key].urlImg+"'><img src='"+heridas[key].urlImg+"'></button>";
              temp.push(heridas[key]);
          }else{
  
          }
      }
      heridasCtd.innerHTML = documentText;
      crearBotonesHeridas(temp);
  }
  
  function crearBotonesHeridas(array){
    btnHeridas = [];
      for (const key in array) {
          btnHeridas[key] = document.getElementById(array[key].urlImg);
          btnHeridas[key].addEventListener("click",(valor = 1, herramienta =  array[key].herramienta, boton = btnHeridas[key]  )=>{
                if(heridaCurar ==  herramienta){
                    puntaje += 1000;
                    boton.style.visibility = "hidden";
                    countHeridas += 1;
                }else{
                   
                    lightboxPerdiste.className = "mostrar";
                    if(puntaje == 0){
                      puntaje = 0;
                    }else{
                      puntaje -= 1000;
                    }
                        
                    setTimeout(()=>{lightboxPerdiste.className = "ocultar";},500);

                }
            heridaCurar = "";
            verPuntaje();
            ganaste(randomAnima[posicionAnimal].nombre);

            } 
        );}
  }
  
  function asignarEventosHerramientas(){
      for (const key in botones) {
          botones[key].addEventListener("click",elegirHerramienta);
      }
  }
   

   function ganaste(animal){
       if (btnHeridas.length == countHeridas) {
            lightboxGanaste.className = "mostrar";
            ventanaGanaste.className="mostrar animated rubberBand"
            reiniciarGanaste.addEventListener("click",()=>{
                lightboxGanaste.className="ocultar animated fadeOut";
                cont_s=0;
                randomAnimales();
                verAnimales(posicionAnimal);
                asignarEventosHerramientas();
            });
            historiaGanaste.addEventListener("click",()=>{
                lightboxGanaste.className = "ocultar";
                var temp = "";
                if (animal == "tortuga") {
                temp = "historia_tortuga";
                }
                if (animal == "foca") {
                temp = "historia_foca";
                }
                if (animal == "ballena") {
                temp = "historia_ballena";
                }
                cambioSeccion(temp);
            });
        }
   }

   function volverJuego(){
    cambioSeccion('pantalla_juego');
    if(posicionAnimal == 2){
        posicionAnimal = -1;
    }
    
    verAnimales(posicionAnimal+=1);
    puntaje = 0;
}
   
  function elegirHerramienta(event){
      heridaCurar = event.target.herramienta;
  }

  function verPuntaje(){
      vistaPuntage.innerHTML = "<span class='valores'>"+puntaje+"</span>";
      vistaPuntajeWin.innerHTML = "<span class='valores'>"+puntaje+"</span>";
  }
  
  function animalHerido(nombre,url,contenedorHeridas){
      this.nombre = nombre;
      this.url = url;
      this.contenedorHeridas = contenedorHeridas;
  }

  function herida(herramienta, urlImg,animal){
      this.herramienta = herramienta;
      this.urlImg = urlImg;
      this.animal = animal;
  }

  function boton(idBtn,herramienta){
      var temp;
      temp = document.getElementById(idBtn);
      temp.herramienta = herramienta;
      botones.push(temp);
} 