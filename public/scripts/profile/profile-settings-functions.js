function readUserData(userEmail){
    var getData = firebase.database().ref('Users/'+ userEmail.replaceAll('.', ':'));

    getData.on('value', (snapshot) => {
        const data = snapshot.val();
        //console.log(data);
        localStorage.setItem("userDataName", data.Name);
        localStorage.setItem("userDataSurname", data.Surname);
        localStorage.setItem("userDataImage", data.Photo);
        useData(data);
    });
}

function useData(data){
    setProfileImage(data.Photo);
    setProfileName(data.Name, data.Surname);
}

function setProfileImage(photo){
    document.getElementById("profile-pic").src = photo;
}

function setProfileName(name, surname){
    document.getElementById("profile-name").innerText = name + ' ' + surname;
}