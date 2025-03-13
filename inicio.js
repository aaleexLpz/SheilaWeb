function validarFormulario() {
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");

    if ((user.value == "sheila" && pass.value == "sheila") || (user.value == "alex" && pass.value == "alex")){
        return true;
    }else{
        alert("No eres bien recibido aqui 😡")
        return false;
    }

}

function mostrarOcultar(event) {
    event.preventDefault(); 

    let pass = document.getElementById("pass");
    let ojo = document.getElementById("ojo");

    if (ojo.src.includes("invisible.png")) {
        ojo.src = "imagenes/visible.png";
        pass.type = "text";
    } else {
        ojo.src = "imagenes/invisible.png";
        pass.type = "password";
    }

}