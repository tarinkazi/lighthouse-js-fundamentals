const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let mentorNameLength = 0;
  //let longName ="";
  for(let i = 0;i<instructors.length;i++){
    let longNamelength = instructors[i].name.length;
    
    if(longNamelength>mentorNameLength){
      mentorNameLength = longNamelength;
      //longName = instructors[i].name;
      var obj ={
        name1 : instructors[i].name,
        coourse : instructors[i].course
      };

    }

    
  }
  return obj;

};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
  /*var obj = {
    name:  name,
    totalScore: totalScore,
    gamesPlayed: gamesPlayed
  };*/
