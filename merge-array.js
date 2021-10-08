const merge = function (array1 , array2){

  let array3 = array1.concate(array2);
  return array3.sort();

}

merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]);