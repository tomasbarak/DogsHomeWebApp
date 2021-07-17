var actualInstance;

function setInicialInstance(){
    actualInstance = 0;
}

function submitInstance(){
    console.log(actualInstance);
    switch (actualInstance){
        //email y contraseña
        case 0:
            signUp(document.getElementById('mail').value, document.getElementById('password').value, document.getElementById('password-repeat').value);
            break;
        //Nombre y apellido
        case 2:
            break;
        //Tipo de cuenta
        case 3:
            break;
        //Nombre del refugio
        case 4:
            break;
        //Foto de perfil
        case 5:
            break;
        //Telefono(s)
        case 6:
            break;
        //Descripcion corta
        case 7:
            break;
        //Descripcion larga
        case 8:
            break;
        //Sitio web
        case 9:
            break;
        //Redes sociales
        case 9:
            break;
        //Terminos y condiciones
        case 10:
            break;
    }
    actualInstance ++;
}