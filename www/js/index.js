//var cronometro;

window.onload = inicio;
var heridas = [];
var botones = [];
var btnHeridas = [];
var randomAnima = [];
var heridasCtd;
var camilla;
var puntaje = 0;
var heridaCurar;

function inicio(){
    inicializarVariables();
    randomAnimales();
    verAnimales(0);
    verHeridas(0);
    asignarEventosHerramientas();
}

function inicializarVariables(){
    camilla = document.getElementById("camilla");
    heridasCtd = document.getElementById("heridasCtd");
    heridas.push(new herida("p", "img/imgHeridas/basura2Ballena.png",5, "ballena"));
    heridas.push(new herida("p", "img/imgHeridas/basuraBallena.png", 6, "ballena"));
    heridas.push(new herida("p", "img/imgHeridas/basuraFoca.png", 4, "foca"));
    heridas.push(new herida("b", "img/imgHeridas/basuraTortuga.png", 6, "tortuga"));
    heridas.push(new herida("a", "img/imgHeridas/Cortada.png", 3, "todos"));
    heridas.push(new herida("c", "img/imgHeridas/herida1.png", 4, "todos"));
    heridas.push(new herida("e", "img/imgHeridas/Herida2.png", 3, "todos"));
    heridas.push(new herida("a", "img/imgHeridas/herida4.png", 3, "todos"));
    heridas.push(new herida("p", "img/imgHeridas/PaloTortuga.png", 3, "tortuga"));
    heridas.push(new herida("c", "img/imgHeridas/Quemadura2.png", 3, "todos"));
    heridas.push(new herida("p", "img/imgHeridas/VidrioTortuga.png", 7, "tortuga"));
    randomAnima.push(new animalHerido("tortuga","img/Tortuga.png","heridasTortuga"));
    randomAnima.push(new animalHerido("ballena","img/Ballena.png","heridasBallena"));
    randomAnima.push(new animalHerido("foca","img/Foca.png","heridasFoca"));
    boton("button1","b");
    boton("button2","a");
    boton("button3","c");
    boton("button4","e");
    boton("button5","p");

}


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
   //camilla.className = "camilla "+randomAnima[animal];
   camilla.style.background = "url('"+randomAnima[animal].url+"') no-repeat";
   heridasCtd.className = randomAnima[animal].contenedorHeridas;
   
}
function verHeridas(animal){
    heridas = shuffle(heridas);
    var temp;
    for (const key in heridas) {
        if(randomAnima[animal].nombre == heridas[key].animal || "todos" == heridas[key].animal){
            heridasCtd.innerHTML = "<button onclick='tratarHerida(+heridas[key].herramienta+"')' class='btnsHeridas'><img src='"+heridas[key].urlImg+"'></button>"+heridasCtd.innerHTML;
            //temp = document.getElementById(heridas[key].urlImg);
            //temp.puntaje = heridas[key].puntos;
            //temp.herramienta = heridas[key].herramienta;
            //temp.addEventListener("click",tratarHerida);
            //btnHeridas.push(temp);
        }else{

        }
    }
   // asignarEventosHeridas();
}

function asignarEventosHerramientas(){
    for (const key in botones) {
        botones[key].addEventListener("click",elegirHerramienta);
    }
}

function tratarHerida(herramienta){
    if(heridaCurar == herramienta){
        puntaje+= 1;
        //console.log(puntos);
    }else{
         puntaje-= 1;
         //console.log(puntos);
    }
    heridaCurar = "";
}
function elegirHerramienta(){
    heridaCurar = event.target.herramienta;
    //console.log();
}

function animalHerido(nombre,url,contenedorHeridas){
    this.nombre = nombre;
    this.url = url;
    this.contenedorHeridas = contenedorHeridas;
}
function herida(herramienta, urlImg, puntos,animal){
    this.herramienta = herramienta;
    this.urlImg = urlImg;
    this.puntos = puntos;
    this.animal = animal;
    //this.boton = 
}
function boton(idBtn,herramienta){
    var temp;
    temp = document.getElementById(idBtn);
    temp.herramienta = herramienta;
    botones.push(temp);
}
