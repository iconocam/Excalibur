const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
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