class Car {
    constructor(name, year, type, color) {
        this.name = name;
        this.year = year;
        this.type = type;
        this.color = color;
    }

    age() {
        let date = new Date();
     return date.getFullYear() - this.year
    }
}

 const myCar = new Car("Ford", 2014, "sportCar", "Black");
 let output = document.getElementById("demo");
  output.innerHTML = `my car is  ${myCar.name} and its a ${myCar.type} and got it in the year ${myCar.year} so that makes it ${myCar.age()} years`