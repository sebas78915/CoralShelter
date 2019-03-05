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
var vistaPuntage;

function inicio(){
    inicializarVariables();
    randomAnimales();
    verAnimales(0);
    verHeridas(0);
    asignarEventosHerramientas();
    verPuntaje();
}

function inicializarVariables(){
    camilla = document.getElementById("camilla");
    heridasCtd = document.getElementById("heridasCtd");
    vistaPuntage = document.getElementById("vistaPuntage");
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
    for (const key in array) {
        btnHeridas[key] = document.getElementById(array[key].urlImg);
        btnHeridas[key].addEventListener("click",(valor = 1, herramienta =  array[key].herramienta, boton = btnHeridas[key]  )=>{
                    if(heridaCurar ==  herramienta){
                        puntaje+= 1000;

                        boton.style.visibility = "hidden";
                        
                    }else{
                         puntaje-= 1000;
                         //console.log(puntos);
                    }
                heridaCurar = "";
                verPuntaje();
                } 
            );
    }
}

function asignarEventosHerramientas(){
    for (const key in botones) {
        botones[key].addEventListener("click",elegirHerramienta);
    }
}
 
 
function elegirHerramienta(){
    heridaCurar = event.target.herramienta;
    //console.log();
}
function verPuntaje(){
    vistaPuntage.innerHTML = "<span class='valores'>"+puntaje+"</span>";
    
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
    //this.boton = 
}
function boton(idBtn,herramienta){
    var temp;
    temp = document.getElementById(idBtn);
    temp.herramienta = herramienta;
    botones.push(temp);
}
