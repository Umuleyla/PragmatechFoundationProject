let arr = [1,5,9,'New York', true, 'javascript',7, ['false','exit']]
console.log(arr[3])
console.log(arr[arr.length-1])
console.log(arr.length)
console.log(arr[7][0])
arr.push("LONDON")
console.log(arr)
arr.pop(arr[arr.length-1])
console.log(arr)
arr.splice(2, 0, 'Moscow','Ankara')
console.log(arr)
arr.splice(2, 0, 'Audi','BMW')
console.log(arr);
arr.splice(5,7)
console.log(arr)

let array = [36,5,89,7,2,1]
console.log(array.sort(function(a, b){return a - b}))

let str = ["Alma", "Armud", "Heyva", "Nar", "Mandarin"];
console.log(str.slice(2,3));
console.log(str.slice(3));
