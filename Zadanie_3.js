function bubbleSortDescending(array){

  for(var i = 0; i < array.length; i++) {
     for(var j=0; j < array.length; j++) {
         if(array[i] > array[j]) {
             var temp = array[i];
             array[i] = array[j];
             array[j] = temp;        
          }
     }
  }
}