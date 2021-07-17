var emailAndPasswordContainer = document.getElementById('email-and-password');


switch (actualInstance){
        //email y contraseña
    case 0:
        setInstanceVisibility('email-and-password');
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

function setInstanceVisibility(instanceIdName){
    var allInstances = document.getElementsByClassName('signup-instance')
    for(let key in allInstances){
        if(allInstances[key].id === instanceIdName){
            allInstances[key].id.style.display = 'flex';
        }else{
            allInstances[key].id.style.display = 'none';
        }
    }
}