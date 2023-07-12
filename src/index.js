/**
 * @author Ato Kwamena
 * Date: 11th July, 2023
 * This programme contains code variouts
 * Data structures and algorithm code
 */


/**
 * represent a linear search algorithm
 * @method
 * @param {number[]} arr
 * @param {number} num
 * 
 */
function linearsearch(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return num;
        }
    }

    return null;
}

/**
 * Binary search algorithm
 * @param {number[]} arr
 * @param {numner} target
 * 
 * Rule for binary search to work list must be sorted;
 */

function binarySearch(arr, target){
     /**
      * Set lower bound to 0;
      * set high bound to array length  minu 1
      * set mid point to high bound plus lower bound and divide by 2
      * @var {number} low
      * @var {number} high
      * @var {number} mid
      */

    let low = 0;
    let high = arr.length -1;
    let mid = 0;

    while(low <= high){
         mid = Math.floor( (high + low) / 2);
        if(arr[mid] === target){
            return arr[mid];
        }else if(target > arr[mid]){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return "not found";
}


/**
 * 
 * @param {number[]} arr 
 * @param {number} a 
 * @param {number} b 
 */

function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}



/**
 * this function is a buble sort algorithms
 * 
 * @param {number[]} arr 
 */
function bubblesort(arr){
    let len = arr.length;

    for(let i=0; i< len; i++){
        for(let j=0; j < len -1; j++){
            if(arr[j] > arr[j + 1]){
                swap(arr, j, j+1);
            }
        }
    }

    return arr;
}


let list = [14, 1, 4, 7, 5 ,6, 2];

let target = 7;

let sorted = bubblesort(list);

console.log(binarySearch(sorted, target));