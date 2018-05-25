/*
Grocery List with individual lists for roommates
@scarfino 2018
*/
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift([0]); // remove the first element in array
groceryList.unshift('popcorn'); // add new element to beginning of array

console.log("Things we need from the Grocery Store: " +(groceryList)); // log array to console

console.log("Roomate 1\'s List: "+(groceryList.slice(0, 1))); // log the elements between the 1st and 2nd element in the array

console.log("Roomate 2\'s List: "+(groceryList.slice(1, 5))); // log the elements between the 2nd and 6th element in the array

console.log("Roomate 3\'s List: "+(groceryList.slice(5, 7))); // log the elements between the 6th and 8th element in the array
