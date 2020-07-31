//Consumo del servicio de spotyfy para
//traer canciones de un artista


//DEFINIR LA VARIABLE PARA RECIBIR LA ETIQUETA DE IMG1

//1.Definir Objeto AJAX
let objetoAJAX = new XMLHttpRequest();

//2. Definir la URL del servicio
let url = "https://api.spotify.com/v1/artists/13JJKrUewC1CJYmIDXQNoH/top-tracks?country=us";

//3. Definir el token o permiso de acceso
let token = "Bearer BQABQjZddV38U2qWcefMZWnsYsSCBiNovtIg3fA--TZbhOulQ4DD5wh-ZnqJ65vEWjxUK4uQPSJsEcErnO0cooCsYGxfS7l0zQ_qCW6u2jl0Bo_6sXmPpKmYvmrHEKV1m2V7JAu26UyvHmJZXCqX3hhHiIrEKJI";




//4. Abrir la conexion
objetoAJAX.open('GET', url, true);

//5. crear encabezado de conexion
objetoAJAX.setRequestHeader('Authorization', token);

//6. cargamos los datos del servicio
objetoAJAX.onload = function() {
    let respuesta = JSON.parse(this.responseText);
    
    console.log(respuesta.tracks[0].preview_url);
    console.log(respuesta.tracks[0].album.images[0].url);
    console.log(respuesta.tracks[0].album.name);

    let imagen1= document.getElementById("imagen1");
    imagen1.src= respuesta.tracks[0].album.images[0].url;

    let titulo1=document.getElementById("titulo1");
    titulo1.textcontent = respuesta.tracks[0].album.name;

    let audio1=document.getElementById("audio1");
    audio1.src=textcontent = respuesta.tracks[0].preview_url;

    let imagen2= document.getElementById("imagen2");
    imagen2.src= respuesta.tracks[2].album.images[2].url;

    let titulo2=document.getElementById("titulo2");
    titulo2.textcontent = respuesta.tracks[2].album.name;

    let audio2=document.getElementById("audio2");
    audio2.src=textcontent = respuesta.tracks[2].preview_url;

    let imagen3= document.getElementById("imagen3");
    imagen3.src= respuesta.tracks[1].album.images[1].url;

    let titulo3=document.getElementById("titulo3");
    titulo3.textcontent = respuesta.tracks[4].album.name;

    let audio3=document.getElementById("audio3");
    audio3.src=textcontent = respuesta.tracks[4].preview_url;

   

    

}

//7. enviamos la peticion
objetoAJAX.send();