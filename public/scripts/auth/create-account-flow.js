var actualInstance;

function setInicialInstance(){
    actualInstance = 0;
    refreshInstances();

}

function submitInstance(){
    console.log(actualInstance);
    switch (actualInstance){
        //email y contraseña
        case 0:
            signUp(document.getElementById('mail').value, document.getElementById('password').value, document.getElementById('password-repeat').value);
            break;
        //Nombre y apellido
        case 1:
            break;
        //Tipo de cuenta
        case 2:
            break;
        //Nombre del refugio
        case 3:
            break;
        //Foto de perfil
        case 4:
            break;
        //Telefono(s)
        case 5:
            break;
        //Descripcion corta
        case 6:
            break;
        //Descripcion larga
        case 7:
            break;
        //Sitio web
        case 8:
            break;
        //Redes sociales
        case 9:
            break;
        //Terminos y condiciones
        case 10:
            break;
    }
    refreshInstances();
    actualInstance ++;
}