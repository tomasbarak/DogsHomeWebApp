function getPublication(id){
    const dbRef = firebase.database().ref();
    dbRef.child("Publications").child(id).get().then((snapshot) => {
        if (snapshot.exists()) {
            var data = snapshot.val();
            console.log(data);
            document.getElementById("post-image").src = data.Photo;
            document.getElementById("primary-image-min").src = data.Photo;
            document.getElementById("post-image").alt = data.Name;
            document.getElementById("post-name").innerText = data.Name;
            document.getElementById("post-desc").innerText = data.SDescription;
            document.title = "DogsHome | " + data.Name;
            console.log("Cant images " + data.Images.length);

            document.getElementById("image-count-number").innerText = "1/" + (data.Images.length + 1);
            addSecondaryPhotos(data.Images);
            createSlider(data.Images, data.Photo);
            document.getElementById("error-container").className = "error-container-invisible";
        } else {
            throwDontMatchError();
        }
    }).catch((error) => {
        console.error(error);
        throwGenericError(error);
    });
}

