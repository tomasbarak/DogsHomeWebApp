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

            addSecondaryPhotos(data.Images);
            createSlider(data.Images, data.Photo);
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

