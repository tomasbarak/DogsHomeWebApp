function getQuery(link){
    var query = link.substring(link.indexOf("=")+1, link.length);
   //var id = Math.random().toString(16).slice(2);
    //console.log(id);
    document.getElementById("post-image").src = "animations/image-loading.gif";
    document.getElementById("primary-image-min").src = "animations/image-loading.gif";
    getPublication(query);
    console.log(query);
}