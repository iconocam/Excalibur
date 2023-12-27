const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        subCompanion: {
            name: "Frank",
            type: "Flea",
            faceOne: "sunglasses",
            headOne: "smallHat"
        }
        
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
    }

    /**
     * From the adventurer object, we can access Robin’s inventory using a combination of dot notation and square bracket syntax. For example, we could find a sword at adventurer.inventory[0].
     */

    // The most straightforward way to loop through an object's properties is by using the for...in statement. This method works in all modern and old browsers including Internet Explorer 6 and higher. One problem in using the for...in method is that it loops through the properties in the prototype chain as well.

    for (let property in adventurer) {
        if(adventurer.hasOwnProperty(property)) {
            console.log(`${property}: ${adventurer[property]}`);
        }
    }

// console.log(adventurer.companion.type)

// console.log(adventurer.companion.subCompanion.headOne);

// Successfully added our Flea Frank.

/** Now we have a method for “dice rolls,” a common way to handle outcomes in adventuring games. Test this method by calling adventurer.roll() a few times.
What if we had many adventurers? As you can imagine, creating several of these objects manually would be time consuming, inefficient, and prone to errors. 
Next, we will level up our approach using Classes. */

// adventurer.roll();  works successfully

// Part 2: Class Fantasy

/** Let’s take a moment to analyze the data above. What are the common features of each object?
When creating classes, begin by searching for the simplest form your data takes. Remember, you can add specificity later by extending the classes.

Start with a Character class, which will define generic character entities. Robin and their companions all have a name, so the Character class should definitely include name as one of its properties. At this stage, we will also make the decision that every character should have health (which we will standardize to a maximum of 100, and an inventory (even if the inventory is empty). */

// Here is what the basic Character class looks like so far, including a constructor function that allows us to create new characters with whatever name we would like: //
class Character {
constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
}
roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
    }
}
// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.subCompanion = new Character("Frank");
// robin.companion.subCompanion.type = "Flea";
// robin.companion.subCompanion.inventory = ["small hat", "sunglasses"];

// robin.companion.roll(5) 

// Part 3: Class Features 

/** 
 * Part 3: Class Features
When extending a class, the “child” class inherits all properties of its parents. This means that we do not need to account for the name, health, inventory, or roll method of Character children classes.
Let’s begin by creating an Adventurer class. What attributes might be specific to an adventure, but that not all characters have? Take a look at our example below, and expand upon it with your own properties and methods.
 */

class Adventurer extends Character {
    constructor (name, role) {
    super(name);
      // Adventurers have specialized roles.
    this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();

    }
    attack() {
        console.log(`${this.name} is attacking!`);
    }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.subCompanion = new Character("Frank");
robin.companion.subCompanion.type = "Flea";
robin.companion.subCompanion.inventory = ["small hat", "sunglasses"];

const adventurerRobin = new Adventurer("Robin", "Swordsman")

const adventurerCass = new Adventurer("Cass", "poisonArt")
// adventurerCass.scout()

adventurerCassCompanion = new Character('Ekans')
// adventurerCass.companion.type = "baby Snake"
adventurerCass.inventory = ['Poison Bottle', 'Oblivion Gaze']
console.log(adventurerCass.inventory)
adventurerCass.attack()

class Companion extends Character {
    constructor (name, role) {
    super(name);
    
    this.role = role;
    
    this.inventory.push("Compass");
    }

    proxy () {
    console.log(`${this.name} is scanning the current proximity..`);
    super.roll();

    }
    compass() {
        console.log(`${this.name} is locating direction North.`);
    }
}
const Frank = new Companion('Frank', 'Flea')
const Ekans = new Companion('Ekans', 'baby Snake')

Ekans.compass();