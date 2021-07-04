let arr = [2,6,32,95,44,62,94];
console.log(arr.sort(function(a, b){return b - a})); // Böyük elementdən kiçiyə doğru sıralayır.

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0 ) {
     console.log(arr[i])   
    }
    
}                                                   // Shert veririk ki 3-e qalıqsız bölünen ededleri tapsın  

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 50 ) {
     console.log(arr[i])   
    }
    
}                                                  // Shert veririk ki 50-den kichik ededleri tapsın

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 35 && arr[i] < 70 ) {
     console.log(arr[i])   
    }
    
}                      // Shert veririk ki 70-den kichik ve 35-den böyük ededleri tapsın

let array = [36,5,89,7,2,1]
console.log(array.sort(function(a, b){return a - b})); // Kiçik elemetden böyüyə doğru sıralayır.

function randomeded(a,b) {
 return Math.floor(Math.random()*(a-b)+b)   
};
console.log(randomeded(10,30))    

let arr2 = ["I", "learn", "JavaScript"];
arr2.splice(0,1)                  
console.log(arr2);                // Birinci elementi silir
arr2.splice(0,0, 'PHP','Python');
console.log(arr2)                // Birinci elementin yerine elave edir


let arr3 = [25,95,'test','php', true,{},129,'javascript'];

function elementAdd(a) {
    for (let i = 0; i < arr3.length; i++) {
        if (typeof arr3[i] === typeof a) {
            console.log("etdiii")
        }
        else{
            console.log("sert odenmir")
        } 
    }
}
console.log(elementAdd(true));  // typeoff metodundan istifade ederek ötürülen parametrin array elementleri ile eyni typeda olub olmadığını yoxlayır.


let text = "";
let i = 0
while(i < 10) {
    print ( " Hello World")
    i++
};

let text = ""
let i = 0;

do {
    print ( " Hello World")
    i++
}
 while (i < 10); 

 let text = "";
 let i = 0
 while (i < 10) {
    text += "The number is " + i;
    i++;
  };


  let text = "";
  let i = 0
  do {
    text += "The number is " + i;
    i++;
  }
  while (i < 10);

  let a = [25,5,80,11,32,7,9,90]
  console.log(Math.max(25,5,80,11,32,7,9,90));

  