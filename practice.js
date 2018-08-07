////////// PROBLEM 1 //////////
me = {
  name:"Bradley",
  age: 27
}
console.log(me.name)
////////// PROBLEM 2 //////////
var favoriteThings = {
  band: "A",
  food: "B",  
  person: "C",
  book: "D",
  movie:  "E",
  holiday: "F"
}
favoriteThings.brand = "Minimalism";
favoriteThings.car = "Ford";
favoriteThings.food = "Chicken Nuggets";
favoriteThings.book  = "Harry Potter"
////////// PROBLEM 3 //////////

/* 
  >Create an empty Object called backPack. 
  >Create a variable called 'item'set equal string 'firstPocket'. 
  >bracket notation add 'firstPocket' property to backPack, using 'item'.
  Set the value of that key to 'chapstick'.
    >Using dot notation, add another key (or property) to your backPack object that is named
  color, with the value being the color of your backpack. 

 >Alert your entire backPack object
 */
var backPack = {}
var item = "firstPocket";
backPack[item] = item; 
backPack["firstPocket"] = "chapstick";
backPack.color = "Tan";
console.log(backPack);
/*
 You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. 
*/

///////// PROBLEM 4 //////////
// Do not edit the code below.
var user2 = {
  name: 'Ty',
  age: 24,
  pwHash: 'U+Ldlngx2BYQk',
  email: 'ty33@gmail.com',
  birthday: '05/02/1990',
  username: 'tylermcginnis33'
};
// Do not edit the code above.
user2.name = "Tyler S. McGinnis";
user2.email = "tyler.mcginnis@devmounta.in";
////////// PROBLEM 5 //////////

/*
  Create an empty object called methodCollection.
*/
/*
  Now add two methods (functions that are properties on objects) to your methodCollection object. 
  One called 'alertHello' which alerts 'hello' and another method called 'logHello' which logs 'hello' to the console. 
*/
/*
  Now call your alertHello and logHello methods.
*/
var methodCollection = 
{ alertHello:function()  {alert(hello)},
  logHello:function()  {console.log("hello")}
}
methodCollection.alertHello();
methodCollection.logHello();

////////// PROBLEM 6 //////////
function makePerson(name,birthday, ssn)
{return newObj = {
  name: name,
  birthday: birthday,
  ssn: ssn
}
}

makePerson("3", "1", "2")

////////// PROBLEM 7 //////////
function makeCard(cardNumber,expirationDate,securityCode)
{
return creditCard = {
cardNumber: "",
expirationDate: "",
securityCode: ""}
}
makeCard();