var pictures  = [1,2,3];
var pictures2 = [1,2,3];
var pictures3 = [1,2,3];

var counter  = 0;
var counter2 = 0;
var counter3 = 0;

var slideholder = document.getElementById("slideholder1");
var slideholder = document.getElementById("slideholder2");
var slideholder = document.getElementById("slideholder3");

slideholder1.style.backgroundImage = "url('img/WPL1.jpg')"; // WP = Wallpaper
slideholder2.style.backgroundImage = "url('img/WPM1.jpg')"; // L / M / R = Left, Middle, Right
slideholder3.style.backgroundImage = "url('img/WPR1.jpg')";

slideholder1.addEventListener("click", function() {
    slideholder1.style.backgroundImage = "url('img/WPL" + counting()+ ".jpg')";
});

slideholder2.addEventListener("click", function() {
    slideholder2.style.backgroundImage = "url('img/WPM" + counting2()+ ".jpg')";
});

slideholder3.addEventListener("click", function() {
    slideholder3.style.backgroundImage = "url('img/WPR" + counting3()+ ".jpg')";
});

function counting() {
    if(counter >= pictures.length) {
        counter = 1;
    }
    else {
        counter++
    }
    console.log(counter)
    return counter;
}

function counting2() {
    if(counter2 >= pictures2.length) {
        counter2 = 1;
    }
    else {
        counter2++
    }
    console.log(counter2)
    return counter2;
}

function counting3() {
    if(counter3 >= pictures3.length) {
        counter3 = 1;
    }
    else {
        counter3++
    }
    console.log(counter3)
    return counter3;
}