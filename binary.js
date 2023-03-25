
// Merge and Binary Search
// Given an array of unsorted numbers, return the index of the following target if the target exists in the array.
//  If the target is not found, return null
// let num = [45,12,6,89,2,5]
// let target = 6
function  binary(num1,target1){ 
let left=0;
let right=num1.length -1;
while(left<=right){
    let middle=Math.floor((left+right)/2);
    if (num1[middle]=== target1){
        return middle;
    }
    else if(num1[middle]< target1){
        left = middle+1;
    }
    else{
        right=middle-1;
    }

}
}

let num1= [45,12,6,89,2,5]
 let target1 = 6;
 console.log(binary(num1,target1))



// Given an unsorted array of numbers return the sorted array in descending order
let arr=[123,89,5,23,9,56]
arr.sort((a,b)=>b-a);
console.log(arr);







// // Given the following array, search for the following target
 

function  array2(arr2,target2){ 
let left=0;
let right=arr2.length -1;

while(left<=right){
    let middle=Math.floor((left+right)/2);
    if (arr2[middle]=== target2){
        return middle;
    }
    else if(arr2[middle]< target2){
        left = middle+1;
    }
    else{
        right=middle-1;
    }

}
return null
}

 let target = 34
  let arr2 = [1,4,78,2,67,3];
 console.log(array2(arr2,target1))

