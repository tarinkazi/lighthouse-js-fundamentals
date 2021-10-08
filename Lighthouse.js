const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 

let position = [0, 0];

function finalPosition(moves){  
for (var i = 0; i < moves.length; i++){   
if (moves[i] == 'north'){
      position[1]++;
    } else if (moves[i] == 'south'){
      position[1]--;
    } else if (moves[i] == 'west'){
      position[0]--;
    } else if (moves[i] == 'east'){
      position[0]++;
    }
  }
  console.log(position); //prints the answer
  return position; // does not print the answer??
}
finalPosition(moves);


//You have to define the position in the function. Also, the position should be position["the index"] = position["the index"] + OR - 1

// feel like I’m underqualified to answer this but you have to review the scope of where you declare the variable position. Once that is fixed, it would return the result.

