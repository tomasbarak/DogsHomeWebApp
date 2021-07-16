function signUp(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("Registro exitoso");

            localStorage.setItem("userDataMail", email);
            console.log(email);
            authStateListener();
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}