function enter(email, password, repeatPassword){
    if(event.key === 'Enter') {
        if(password === repeatPassword){
            signUp(email, password);
        }else{

        }
    }
}

function throwEmailExistsError(){
    Swal.fire({
            title: 'Error',
            text: 'Parece que el email ingresado ya existe',
            icon: 'error',
            confirmButtonColor: '#d33',
    }
    )
}

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
            if(errorCode === 'auth/email-already-in-use'){
                throwEmailExistsError();
            }
        });
}

function confirmIfMailExists(email){

}