function readUserImage(userEmail){
    var getVerification = firebase.database().ref('Users/'+ userEmail.replaceAll('.', ':') +'/Photo');
    getVerification.on('value', (snapshot) => {
        const data = snapshot.val();

        setProfilePhoto(data);
    });
}

function setProfilePhoto(photo){
    document.getElementById("profile-pic").src = photo;
    console.log(photo);
}