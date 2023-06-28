/**
 * represent a linear search algorithm
 * @param {number[]} arr
 * @param {number} num
 * @returns
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


console.log(bubblesort([9,1,4,6,3,2,5]));