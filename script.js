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

console.log(adventurer.companion.type)

console.log(adventurer.companion.subCompanion.headOne);

// Successfully added our Flea Frank.

/**
 * 

You can access properties like adventurer.name or adventurer.inventory[0].
You can access properties within the nested objects, for example, adventurer.companion.name or adventurer.companion.subCompanion.faceOne.
You can call the roll method like this: adventurer.roll(). If you want to add a modifier, you can pass it as an argument, like adventurer.roll(2).
 */