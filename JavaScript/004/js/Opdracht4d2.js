var pictures = [1,2,3,4,5,6,7,8,9];
var counter = 0;
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('img/Cats1.jpg')";

slideholder.addEventListener("click", function() {
    slideholder.style.backgroundImage = "url('img/Cats" + getCats()+ ".jpg')";
});

function getCats() {
    if(counter >= pictures.length) {
        counter = 1;
    }
    else {
        counter++
    }
    console.log(counter);
    return counter;
}