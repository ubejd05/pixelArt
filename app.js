let body = document.querySelector("body");
let colorInput = document.querySelector('#color');
let divs = document.querySelectorAll('div');

let sectionArr = [];
let sectionNum = 20;

let divArr = [];
let divsPerSection = 30;
let divNum = sectionNum * divsPerSection;
let divHeight = "15px";
let divWidth = "15px";

let color;





createSection();
sectionArr.forEach((section) => {
   divArr = [];
   createDiv();
   for (let i = 0; i < divArr.length; i++) {
      section.appendChild(divArr[i]);
   }
});

for (let i = 0; i < sectionArr.length; i++) {
   body.appendChild(sectionArr[i]);
}

colorInput.addEventListener('change', function (e) {
   color = this.value;
   return color;
});

// div.forEach(div, 
//    addEventListener('click', function (e) {
//    this.style.backgroundColor = color
// }));

document.querySelectorAll('div').forEach(div => {
   div.addEventListener('click', function (e) {
      if (this.style.backgroundColor === "") {
         this.style.backgroundColor = color;
      } else {
         this.style.backgroundColor = "";
      }
   })
   // console.log(div);
});




function createSection() {
   for (let i = 0; i < sectionNum; i++) {
      let section = document.createElement("section");
      sectionArr.push(section);
      section.style.display = 'flex';
      section.style.justifyContent = 'center';
      section.style.alignItems = 'center';

   }
   return sectionArr;
}

function createDiv() {
   for (let i = 0; i < divNum / sectionNum; i++) {
      let div = document.createElement("div");
      div.style.width = divWidth;
      div.style.height = divHeight;
      div.style.border = "1px solid black";
      div.style.transition = "all .2s"
      divArr.push(div);
   }
   return divArr;
}




// console.log(sectionArr);
