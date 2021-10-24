const urlEncode = function(text) {
  // Put your solution here
  var newText = '';
  let i = 0;
  if(text[i] != " "){
  newText = newText.concat(text[i]);
}
  for(  i = 1;i < text.length-1;i++){

    if(text[i] != " "){
      newText = newText.concat(text[i]);  


    }
    else{
      newText = newText.concat('%20');
    }
    
  }
  newText = newText.concat(text[i]);  

  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
