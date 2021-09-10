function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++){
    lowest = i;
    for(let j = i + 1; j < arr.length; j++){
      console.log(arr[lowest], arr[j]);
      if(arr[j] < arr[lowest]){
        lowest = j;
      }
    }
    if(i !== lowest){
      let temp = arr[i];
      arr[i] = arr[lowest]
      arr[lowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([0,1,32,54,21,35,695,45,12]))