function calculate_median(arr) {
  sortArray(arr);

  return findMedian(arr);
}

function sortArray(arr){
    for(var i = 0; i < arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    
    return arr;
}

function receiveLength(arr) {
    var index = 0;
    
    for(var i = 0; i < arr.length; i++){
        if(arr[i]%2 === 0){
            index++;
        }
    }
    
    return index;
}

function findMedian(arr) {
    var index = receiveLength(arr);

    if(index%2 === 0){
        return arr[index];
    }else{
        return arr[index];
    }
}

module.exports = calculate_median;
