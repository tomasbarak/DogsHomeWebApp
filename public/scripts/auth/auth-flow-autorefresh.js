function refreshInstances(){
    switch (actualInstance){
        case undefined:
            setInstanceVisibility('email-and-password');
            break;
        case 0:
            setInstanceVisibility('email-and-password');
            break;
        //Nombre y apellido
        case 1:
            setInstanceVisibility('name-and-surname');
            break;
        //Tipo de cuenta
        case 2:
            setInstanceVisibility('account-type');
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
}

function setInstanceVisibility(instanceIdName){
    var allInstances = document.getElementsByClassName('signup-instance');
    for(let key in allInstances){
        //console.log(allInstances[key].id);
        if(allInstances[key].id !== undefined){
            if(allInstances[key].id === instanceIdName){
                console.log(allInstances[key]);
                allInstances[key].style.display = 'flex';
            }else{
                console.log(allInstances[key]);
                allInstances[key].style.display = 'none';
            }
        }
    }
}