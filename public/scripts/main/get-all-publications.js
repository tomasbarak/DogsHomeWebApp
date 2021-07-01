function getPublications(){
    var getData = firebase.database().ref('Publications/');
    getData.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        addPublications(data);
    });
}