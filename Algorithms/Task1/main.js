let arr = [1,5,9,'New York', true, 'javascript',7, ['false','exit']]
console.log(arr[3]) // Show in console 'New York'
console.log(arr[arr.length-1]) //Show in console last element (Do not use code block like this: array[7])
console.log(arr.length) //Show in console length of array
console.log(arr[7][0]) //Find the eighth element in the array and show its first element
arr.push("LONDON") //Add new element 'London' to the end of array
console.log(arr)
arr.pop(arr[arr.length-1]) //Remove last element from array
console.log(arr)
arr.splice(2, 0, 'Moscow','Ankara') //Add after second element 'Moscow','Ankara' using method 'splice'
console.log(arr)
arr.splice(2, 0, 'Audi','BMW') //Add after second element 'Audi','BMW' and remove next element using method 'splice'
console.log(arr);
arr.splice(5,7)
console.log(arr)

let array = [36,5,89,7,2,1]


let str = ["Alma", "Armud", "Heyva", "Nar", "Mandarin"];
console.log(str.slice(2,3)); //Show in console 'Heyva' using method slice
console.log(str.slice(3)); //Show in console last two elements of array using method slice
