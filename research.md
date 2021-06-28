**Difference between for, for in, foreach,for of, while**

JavaScript müxtəlif növ dövrləri dəstəkləyir, bunlar aşağıdakıları nümune göstermek olar: 
for,for in, for of, foreach, while. 

for dan istifade ederken dövrde deyişenin ilk deyerini ve onun artaraq nece davam edeceyini for daxilində müəyyən edilir. 

for(let i=0;i<5;i++) console.log(i);

while for dan ferqqi ondan ibaretdeir ki. while da dəyişən dövr daxilində artırıla , azaldıla və istədiyi kimi dəyişdirilə bilər. while da dövrdən öncə müəyyən index verilir və sonradan shert verilir. 

let i=1; while(i<5) {console.log(i); i++};

for in, for of, foreeach vasitesile obyektin propertylerine daha asan elde etmek olur.

const person = {name:"Umuleyla", age:25}; 
let txt = "";
for (let x in person) {
  txt += person[x] + " ";
};

let language = "Umuleyla";

let text = "";
for (let x of language) {
text += x;
};

**Difference between promt, confirm, alert**

Alert əsasən səhifə açıldıqda xəbərdarlıq kimi gəlir, metni ve ok buttonu olur.  

alert("Hello! I am here");

Confirm de eyni olaraq bildirsh kimi gelir, lakin gönderilen bildirishi tesdiqlemek ve yaxud da legv etmek üchün istifade olunur. OK ve Cancel buttonları olur. 

confirm("Press a button!");

Prompt da ise istifadechiden ne ise sorushuldugu halda istifade olunur. Cavab inputda yazılır ve tesdiq düymesi basıldıqdan sonra shert ödenirse bildirsh legv olunur.

function myFunction() {
  let person = prompt("Please enter your age", "25");
  if (person != null) {
   console.log(person) ;
  }
}