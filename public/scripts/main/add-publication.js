function addPublications(allPublications){
    for (let key in allPublications) {
        console.log(key, allPublications[key]);
        var publicationCreatedContainer = document.createElement('div');
        publicationCreatedContainer.className = 'publication';
        publicationCreatedContainer.onclick = function (){window.location = "dog.html" + '?publication=' + allPublications[key].Id};

        var publicationContainer = document.getElementById("content-show").appendChild(publicationCreatedContainer);

        var publicationCreatedImage = document.createElement('img');
        publicationCreatedImage.className = 'publication-photo';
        publicationCreatedImage.src = allPublications[key].Photo;

        var publicationImage = publicationContainer.appendChild(publicationCreatedImage);

        var publicationCreatedName = document.createElement('h1');
        publicationCreatedName.className = 'publication-name';
        publicationCreatedName.innerText = allPublications[key].Name;

        var publicationName = publicationContainer.appendChild(publicationCreatedName);

        var publicationCreatedDesc = document.createElement('p');
        publicationCreatedDesc.className = 'publication-description';
        publicationCreatedDesc.innerText = allPublications[key].SDescription;

        var publicationDesc = publicationContainer.appendChild(publicationCreatedDesc);

    }
    setLoading(false)
}