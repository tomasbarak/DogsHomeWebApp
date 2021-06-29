function setLoading(isLoading){
    setTimeout(function (){
        LoadingDisplay(isLoading);
    }, 1500);
}

function LoadingDisplay(isLoading){
    if(isLoading === true){
        console.log("meshe");
        document.getElementById('loading-visible').id = 'loading-invisible';
    }else{

    }
}