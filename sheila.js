function seguro() {
    let link = document.getElementById("enlace");

    if(confirm("Estás seguro de que quieres ver ese contenido? (yo no lo haría)")) {
        window.location.href("pareja.html");
        return true;
    }else{
        alert("Haces bien");
        return false;
    }
}

function sandra() {
    let img = document.getElementById("sandra");
    if (img.src = "imagenes/sandra.jpeg") {
        img.src = "imagenes/sandra2.jpeg";
    }
}

function sandra2() {
    let img = document.getElementById("sandra");
    if (img.src = "imagenes/sandra2.jpeg") {
        img.src = "imagenes/sandra.jpeg";
    }
}

function cerrarSesion(){
    let signOut = document.getElementById("cerrarSesion");

    if(confirm("Quieres cerrar sesión?")){
        window.location.href("index.html");
        return true;
    }else{
        return false;
    }
}