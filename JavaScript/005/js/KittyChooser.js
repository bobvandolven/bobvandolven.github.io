pics = document.getElementById("pics")
createPicsHolders();
createKittyImages();

function createPicsHolders() {
    for(var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createKittyImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for(var i = 0; i < pictureHolders.length; i++) {
        favorite = document.createElement("div");
        favorite.className = "favorite";
        favorite.id = "favorite_" + (i+1);
        kittyImages = document.createElement("img");
        kittyImages.src = "img/Cats" + (i+1) + ".jpg";
        kittyImages.id = (i+1);
        kittyImages.addEventListener("click", function() {
           makeFavorite(this.id);
        });
        pictureHolders[i].appendChild(favorite);
        pictureHolders[i].appendChild(kittyImages);
    }
}

function makeFavorite(id) {
    console.log("Make me a favorite!" + id);
    notsofavorite = document.getElementsByClassName("favorite");

    for(var i = 0; i < notsofavorite.length; i++) {
        notsofavorite[i].style.backgroundImage = "none";
    }

    favorite = document.getElementById("favorite_" + id);
    favorite.style.backgroundImage = "url('img/fav1.jpg')";
}