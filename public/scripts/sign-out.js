function signOut(){
    firebase.auth().signOut().then(() => {
        window.location.href = "signin.html";
    }).catch((error) => {
        // An error happened.
    });
}