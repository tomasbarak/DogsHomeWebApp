function getAccountStats(email){

    var getData = firebase.database().ref('Users/'+ email.replaceAll('.', ':'));

    getData.on('value', (snapshot) => {
        const data = snapshot.val();

        document.getElementById("profile-view-image").src = data.Photo;
        document.getElementById("profile-view-image-mobile").src = data.Photo;

        var Stats = data.Stats;

        var PostsCount = data.PostsIds.length - 1;

        setAccountStats(Stats, PostsCount);
    });
}

function setAccountStats(Stats, PostsCount){
    document.getElementById("profile-following").innerText = Stats.Following.length
    document.getElementById("profile-followers").innerText = Stats.Followers.length
    document.getElementById("profile-posts").innerText = PostsCount;
}