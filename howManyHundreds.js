const howManyHundreds = function(number){
  if(number % 100 === 0){
    return number / 100 ;
  }
  else {
    //let remaining = number % 100;
    return Math.floor(number / 100 );
  }
}
console.log(howManyHundreds(894));
//console.log(howManyHundreds(894), "=?", 8);
//console.log(howManyHundreds(520), "=?", 5);
//console.log(howManyHundreds(99), "=?", 0);
//console.log(howManyHundreds(0), "=?", 0);