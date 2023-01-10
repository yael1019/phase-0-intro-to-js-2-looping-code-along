// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     // debugger;
// }

// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapingGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
// }

// function wrapingGifts(gifts) {
//     let i = 0;
//     while (i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         i++;
//     }
//     return gifts
// }

// wrapingGifts(gifts);

// create a function writeCards that takes in an array and event name
function writeCards(arr, event) {
    // create a new array
    const result = [];
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        // add the string "Thank you, name, for the wonderful event gift!" to the array at each itteration 
        result.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }
    // return the new array
    return result;
}

// console.log(writeCards(['Guadalupe', 'Ollie', 'Aki'], 'surprise'));

// create a function countDown that takes in a number
function countDown(num) {
    // using a while loop, while the input number is greater than or equal to 0
    while (num >= 0) {
        // log the number
        console.log(num);
        // decrement the number
        num--;
    }
}