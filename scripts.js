//Código de otra versión de este curriculum (que incluía galería de imágenes). Aquí no se utiliza.
function mostrarFormulario(){
    document.getElementById("formulario").style.display= 'block';
}

function mensajeEnviado(){
    alert("Mensaje enviado exitosamente!");
}

function agrandarImagen(nombreImagen){
    //Obtiene el tamaño del viewport y según eso 
    //ejecuta un flujo para el tamaño de la imagen.
    var widthWindow= window.innerWidth;
    var x=  document.getElementById("imagenVariable");
    if(innerWidth > 500){
        if(nombreImagen == 'imagen7.jpeg'){
            x.src= "imagenes2/"+nombreImagen;
            x.style.height= "432px";
            x.style.width= "369px";
        }else{
            x.src= "imagenes2/"+nombreImagen;
            x.style.height= "400px";
            x.style.width= "600px";
        }
    }else{
        if(nombreImagen == 'imagen7.jpeg'){
            x.src= "imagenes2/"+nombreImagen;
            x.style.height= "370px";
            x.style.width= "318px";
        }else{
            x.src= "imagenes2/"+nombreImagen;
            x.style.height= "311px";
            x.style.width= "450px";
        }
    }
    this.añadirBordeActivo(nombreImagen);
}

function añadirBordeActivo(nombreImagen){
    //Eliminar borde de activo para todas las imagenes
    var y= document.getElementById("imagen1.JPG");
    y.className= "elementoImagen";
    var y= document.getElementById("imagen2.JPG");
    y.className= "elementoImagen";
    var y= document.getElementById("imagen3.JPG");
    y.className= "elementoImagen";
    var y= document.getElementById("imagen4.JPG");
    y.className= "elementoImagen";
    var y= document.getElementById("imagen5.JPG");
    y.className= "elementoImagen";
    var y= document.getElementById("imagen6.JPG");
    y.className= "elementoImagen";
    var y= document.getElementById("imagen7.jpeg");
    y.className= "elementoImagen";
    
    
    //Añadir borde de activo a imagen clickeada
    var y= document.getElementById(nombreImagen);
    y.className+= " imagenActiva"
}



