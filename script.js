class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  const Leo = new Movie("Leo", "Sun Pictures", "PG-13");
  
  console.log(Leo);
 //////////////////////////////////////////////////////////////////// 
  class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
      return this.radius;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    getColor() {
      return this.color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    toString() {
      return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  class Person {
    constructor(firstName, lastName, age, gender) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getGender() {
      return this.gender;
    }
  
    setFirstName(firstName) {
      this.firstName = firstName;
    }
  
    setLastName(lastName) {
      this.lastName = lastName;
    }
  
    setAge(age) {
      this.age = age;
    }
  
    setGender(gender) {
      this.gender = gender;
    }
  
    toString() {
      return `Person[name=${this.getFullName()}, age=${this.age}, gender=${this.gender}]`;
    }
  }
//////////////////////////////////////////////////////////////////////////////////////////////
class UberPriceCalculator {
    constructor(baseFare, costPerKm) {
      this.baseFare = baseFare;
      this.costPerKm = costPerKm;
    }
  
    calculatePrice(distanceInKm) {
      if (distanceInKm < 0) {
        throw new Error("Distance cannot be negative");
      }
  
      const totalPrice = this.baseFare + this.costPerKm * distanceInKm;
      return totalPrice.toFixed(2); 
    }
  }
  
  
  
  
  
  
  