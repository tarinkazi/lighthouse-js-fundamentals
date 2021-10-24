const talkingCalendar = function(date) {
  // Your code here
  let datearray = date.split("/");
  let datte = datearray[2];
  let month = datearray[1];
  let year = datearray[0];

  switch(month){
    case '01': month = "January";break;
    case '02': month = "February";break;
    case '03': month =  "March";break;
    case '04': month =  "April";break;
    case '05': month =  "May";break;
    case '06': month =  "June";break;
    case '07': month =  "July";break;
    case '08': month =  "August";break;
    case '09': month =  "September";break;
    case '10': month =  "October";break;
    case '11': month =  "November";break;
    case '12': month =  "December";break;

  }

  switch (datte) {
    case '01': datte = '1st'; break;
    case '02': datte = '2nd'; break;
    case '03': datte = '3rd'; break;
    case '04': datte = '4th'; break;
    case '05': datte = '5th'; break;
    case '06': datte = '6th'; break;
    case '07': datte = '7th'; break;
    case '08': datte = '8th'; break;
    case '09': datte = '9th'; break;
    case '21': datte += 'st'; break;
    case '22': datte += 'nd'; break;
    case '23': datte += 'rd'; break;
    case '31': datte += 'st'; break;
    default: datte += 'th'; break;
}
  /*if(datte === '01' || datte === '21' || datte === '31'){
    datte += 'st';
  }else if(datte === '02' || datte === '22'){
    datte += 'nd';
  }else if( datte === '03'){
    datte += 'rd';
  }else if(datte === '04' || datte === '05'|| datte === '06'|| datte === '07'|| datte === '08' || datte === '09'|| datte === '10'|| datte === '11'|| datte === '12' || datte === '13'|| datte === '14'|| datte === '15'|| datte === '16' || datte === '17'|| datte === '18'|| datte === '19'|| datte === '20' || datte === '24'|| datte === '25'|| datte === '26'|| datte === '27' || datte === '28'|| datte === '29'|| datte === '30'){
    datte += 'th';
  }*/

  return datte +"  "+ month +" ,"+year;


};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
