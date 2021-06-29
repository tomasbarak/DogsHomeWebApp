function authStateListener() {
    // [START auth_state_listener]
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
                window.location = "/index.html";
            var uid = user.uid;
            // ...
        } else {
                window.location = "/signin.html";
            // ...
        }
    });
    // [END auth_state_listener]
}