function calculate_median(arr) {
   sortArray(arr);
   var evens = buildEvens(arr);
   var median = findMedian(arr, evens);

  return median;
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

function buildEvens(arr){
    var evens = [];

    for(var i = 0; i < arr.length; i++){
        if(arr[i]%2 === 0){
            evens.push(arr[i]);
        }
    }

    return evens;
}

function findMedian(arr, evens) {
    var evensLen = evens.length;

    if(evensLen%2 === 0){
        var firstMedian = arr[evensLen-1];
        var secondMedian = arr[evensLen+1];

        return parseInt((firstMedian+secondMedian)/2);
    }else {
        return arr[evensLen];
    }
}

module.exports = calculate_median;
