//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.
var guests = prompt("How many guests?")
var donuts = prompt("How many donuts?")


if (guests >= donuts){
  alert(`There are ${guests} guests and ${donuts} donuts, which is enough donuts`)
}
else {
  alert(`There are ${guests} guests and ${donuts} donuts, which is not enough donuts`)
}


//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
