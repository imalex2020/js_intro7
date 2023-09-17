/*1. Create a "Course" class which has three properties: "title", "length" and "price" (all set up in the constructor). 
Instantiate the class twice (two dummy courses of your choice). Output the objects to the console.

2. Add two methods to the "Course" class: A method which calculates the length/price value ("how much length do you get for the amount paid") 
and one method that outputs a nice course summary (including title, length and price). Call these methods thereafter (and output the result 
    to the console).

3. Create two new, more specialized, classes: "PracticalCourse" and "TheoreticalCourse". Both should be based on the "Course" class 
but "PracticalCourse" should also have a "numOfExercises" property, "TheoreticalCourse" should have a "publish()" method (which just prints 
    something to the console). Instantiate both and use the new AND old properties and methods.
4. Use getters and setters to ensure that the "price" property can only be set to a positive value and is returned with a "$" in front of it.*/



class Course {
    constructor(title, length, price) {
        this.tittle = tittle;
        this.length = length;
        this.price = price;
    }
    thereafter(){
        console.log(`You have ${this.length} for ${this.price}`)
    }
    
    summery(){
        console.log(`You have ${this.tittle} ${this.length} for ${this.price}`)
}
}

const course1 = new Course("Math", "6", "$25")
const course2 = new Course("History", "7", "$26")

console.log()


class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercises){
        super(title, length, price,)
        this.numOfExercises = numOfExercises
    }

}
const pCourse = new PracticalCourse('Practical Course')
class TheoreticalCourse extends Course {
    publish(){
        return 'Course published today!';
    }
}





