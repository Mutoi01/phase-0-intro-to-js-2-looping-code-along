// Code your solutions in this file
function writeCards(cards, event){
  let myArray =[]

 for (let i = 0; i < cards.length; i++) {
   myArray.push (`Thank you, ${cards[i]}, for the wonderful ${event} gift!`,)
}
return myArray
}




function countDown(count){
while (count >= 0 ) {
console.log(count--);
}}