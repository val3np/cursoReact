let estadoLinterna = "apagado";

/*Divs*/
let container = document.querySelector(".container");
let imagen = document.querySelector("#batman");
let boton = document.querySelector("#bati_boton");

/*Sonido*/
let sonidoBatman = document.querySelector("#bati_encendido");
let sonidoBoton = document.querySelector("#bati_click");

boton.addEventListener("click",()=>{
    controlarBatman()
})

function controlarBatman(){
    if(estadoLinterna == "apagado"){
        estadoLinterna = "encendido";
        sonidoLinterna()
    
        //sonido
        imagen.classList.add("batman_activo");
    }else{
        estadoLinterna = "apagado";
        sonidoLinterna()
    
        //sonido
        imagen.classList.remove("batman_activo");
    }
}

function sonidoLinterna(){
    if(sonidoBatman.paused){
        sonidoBoton.play();
        sonidoBatman.play();
    }else{
        sonidoBoton.play();
        sonidoBatman.pause();
        sonidoBatman.currentTime=0;
    }
}