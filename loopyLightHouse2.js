const loopyLighthouse = function(range, multiples, words){
  var arr = [];
  var str = words[0] + words[1];
  for(let i = range[0];i <= range[1];i++){
    if(i % (multiples[0] * multiples[1]) === 0){
      arr.push(str);
      console.log(str);
    }
    else if(i % multiples[1] === 0){
      arr.push(words[1]);
      console.log(words[1]);
    }
    else if(i % multiples[0] === 0){
      console.log(words[0]);
    }
    else{
      arr.push(i);
      console.log(i);
    }
  }
  return arr;

}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
//oopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
