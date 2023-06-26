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