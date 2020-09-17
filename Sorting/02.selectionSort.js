function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let lowest = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    console.log(i, lowest);
    if(1 !== lowest){
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([25,41,32,12,36,551,63]))