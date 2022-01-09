//Finding minimum number using Rest Operator.

const minimum = (...arr) =>{
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

let min_num = minimum(1, 5, 6, 2, 5, 12, 9, 0.5, 20);
console.log(min_num);