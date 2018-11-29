var car = {
    color: "blue",
    brand: "Ford",
    speed: 0,

    givegas: function() {
        this.speed += 5
        console.log(this.speed);
    },

    toeteren: function() {
        console.log("toet!")
    }
}

console.log(car.color);
car.givegas();
car.givegas();
car.givegas();
car.givegas();
car.toeteren();