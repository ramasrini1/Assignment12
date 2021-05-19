// STEP 1
console.log("Step 1 - Created classes Cat and Dog");
function Cat(){}
const Dog = function(){};

// STEP 2
console.log("Step 2 - Created new instances of Cat and Dog");
const fluffyCat = new Cat();
const poodle    = new Dog();

// STEP 3
console.log("Step 3");
class Animal {
    constructor() {
        console.log("The Animal has been created");
    }
}
const bull = new Animal();

// STEP 4
console.log("Step 4")
class animal {
    constructor(message) {
        console.log(message);
    }
}
const bear = new animal("Animal class instantiated");

// STEP 5
console.log("Create new class and pass arugments through constructor");
class NewAnimal {
    constructor(type, breed, color, height, length){
        this.propArray = [];
        this.type   = type;
        this.breed  = breed;
        this.color  = color;
        this.height = height;
        this.length = length;
        
        this.propArray.push(this.type);
        this.propArray.push(this.breed);
        this.propArray.push(this.color);
        this.propArray.push(this.height);
        this.propArray.push(this.length);

        console.log("----New Animal Created-----");
        //console.log(`Type: ${type} Breed: ${breed} Color: ${color} Height: ${height} Length: ${length} ` );
    }
    
    displayProperties = function() {
        //Looping and displaying the properties
        let length = this.propArray.length;
        console.log("Characteristics of Animal\nLooping and displaying the properties");
        let prop;
        let titles = ["Type", "Breed", "Color", "Height", "Length" ];
        for (let i = 0; i<length; i++){
            prop = this.propArray[i];
            console.log(`${titles[i]} : ${prop}`);
        }
    }
    
    //Public
    speak(){
        let msg;
        //console.log(`The type is ${this.type}` )
        console.log("How does the animal speak?");
        if ( this.type === 'Dog'){
            msg = `The ${this.color} ${this.type} is barking`;
        } else if ( this.type === 'Cat'){
            msg = `The ${this.color} ${this.type} is meowing`;
        } else if ( this.type === 'Tiger'){
            msg = `The ${this.color} ${this.type} is growling`;
        } else {
            msg = `The ${this.color} ${this.type} sound unknown`;
        }
        console.log(msg);
    }

}

// STEP 6
console.log("Step 6");
const tiger = new NewAnimal("Tiger", "Bengal", "White", "50 inches", "4 feet");
tiger.displayProperties();

// STEP 7
console.log("Step 7");
const cat1 = new NewAnimal("Cat", "Siamese", "Grey",  "25 inches", "35 inches");
cat1.speak();
const dog1 = new NewAnimal("Dog", "Poodle",  "Brown", "29 inches", "32 inches");
dog1.speak();
const dino = new NewAnimal("Dinosaurs", "Velocirapto", "Green", "6 feet", "20 feet");
dino.speak();

// STEP 8
console.log("Step 8");
function EncapsulatedAnimal(type, breed, color, height, length) {
    let _type   = type;
    let _breed  = breed;
    let _color  = color;
    let _height = height;
    let _length = length;

    console.log("----New Encapsulated Animal Created-----");
    
        //console.log(`Type: ${type} Breed: ${breed} Color: ${color} Height: ${height} Length: ${length} ` );
    let checkType = function(){
        let atype;
        if ( _type === 'Dog'){
            atype = "Dog";
        } else if ( _type === 'Cat'){
            atype = "Cat";
        } else if ( _type === 'Tiger'){
            atype = "Tiger";
        } else {
            atype = "unknown";
        }
        return atype;
    }

    this.speak = function(){
        return checkType();
    }
}
const cat2 = new EncapsulatedAnimal("Cat", "PersianCat", "black", "2 feet", "2.5feet");
//var test = console.log("test " + cat2.checkType());
console.log(cat2.speak() + " has made a noise");


// STEP 9
console.log("Step 9");
let sentence = " I am doing fine. I am eating pizza and having fun. I am going to swim tomorrow.";
let count = 0;
let searchWord = "am";
function findWords(str1){
    let next = 0;
    let findedword = 0;
    let str2 = this.toString();
    do {
        var n = str2.indexOf(str1, next);
        findedword = findedword +1;
        next = n + str1.length;
    }while (n>=0);
     //console.log("total finded word :" , findedword - 1 );
     return findedword-1;
  
}
String.prototype.search = findWords;
count = sentence.search(searchWord);
console.log("The pargargh is\n" + sentence);
console.log("The number of occurances of the search word '" + searchWord + "' in the paragraph is " + count);
alert("The paragraph is \n" + sentence + "\nThe search word " + searchWord + " occured " + count + " times in the paragraph");



