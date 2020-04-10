function linearSearch(arr, value) {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === value){
      return i;
    }
  }
  return -1
}

console.log(linearSearch([12,25,36,1,2,4,56,47,], 100));
