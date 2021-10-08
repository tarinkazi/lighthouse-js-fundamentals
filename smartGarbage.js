const smartGarbage = function (trash, bins) {

  if ( trash === 'recycling'){
    //bins[1] = bins[1] + 1;
    bins.recycling += 1
  }
   else if (trash === 'waste'){
    bins.waste += 1
   }
    else if(trash === 'compost'){
      bins.compost += 1
    }
 
  //return "waste: " + bins[0] + ",recycling: "+ bins[1] + ",compost: " + bins[2]
    return bins;
 }

 const trash = 'recycling'
const bins = {
  waste: 10,
  recycling: 10,
  compost: 10
}
const result = smartGarbage(trash, bins)
console.log(result);
//expect(result.recycling).to.be.equal(11);

 //console.log(smartGarbage('recycling', [4,2,5 ]));