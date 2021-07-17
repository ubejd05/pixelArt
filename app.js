let body = document.querySelector("body");


let sectionArr = [];
let divArr = [];
let sectionNum = 40;
let divsPerSection = 60;
let divNum;

let divHeight = "15px";
let divWidth = "15px";

divNum = sectionNum * divsPerSection;




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
      divArr.push(div);
   }
   return divArr;
}




// console.log(sectionArr);
