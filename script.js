// DOM => Document Object Model 
// console.log(document);
// console.dir(document);

// Single Selector 

// const element=document.querySelector("h1");
// const element=document.querySelector(".container");
// const element=document.querySelector("#lorem");
// const element=document.querySelector(".container");
// const id=document.querySelector("#lorem");
// console.log(element);
// const element=document.getElementById("lorem");

// console.log(element);
// console.dir(element);

// Multi Selector 

// const elementList=document.querySelectorAll("p");
// const elementList=document.getElementsByName("p");
// const elementList=document.getElementsByClassName("container");
// console.log(elementList);
// console.dir(elementList);

// Parent - Siblings
// console.log(document);
// const element=document.body.children;
// const element=document.body.children[0];
// console.log(element);

// const element=document.querySelector("div");
// console.log(element.parentElement);
// console.log(element.parentNode);
// console.log(element.nextElementSibling);
// console.log(element.previousElementSibling);
// console.log(element.firstElementChild);
// console.log(element);

// Manipulation(ایجاد تغییر در المنتها)
// const element=document.querySelector("p");
// console.log(element);
// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.innerText);
// console.log(element.innerHTML);

// const element2=document.querySelector("a");
// console.dir(element2.href);
// element2.href=" ";
// element2.innerText="Search in Google";
// // element2.href="https://en.wikipedia.org";
// // element2.innerText="Search in Wikipedia(en)";

// Css Style 
// const element=document.querySelector("div");
// element.style.color="red";
// element.style.backgroundColor="blue";
// element.style.width="100px";
// element.className="container";
// element.classList.add("container2");
// element.classList.toggle("taxt") //class remove or add

// setInterval(()=>{element.classList.toggle("text");},2000);


// Inserting to DOM
// const element=document.querySelector("div");

// element.innerHTML="<span>Hi I am span tag</span>";

// element.innerHTML=element.innerHTML + "<span>Hi I am span tag</span>";
// (روش درست تر)
// const spanTag=document.createElement("span");
// spanTag.innerHTML="Hi I am Inserting";
// element.appendChild(spanTag);
// element.prepend(spanTag);
// // (چهار خط بالا ضروری است)
// spanTag.style.color="blue";
// console.log(spanTag);

// Delete from DOM 
// const element=document.querySelector("div");
// element.remove();
// element.removeChild(element.children[0]);

// event
// const button=document.querySelector("button");
// console.dir(button);
// //handler
// // (بهترین اولی است)
// const buttonHandler=()=>{
//     console.log("Hello")
// }
// button.addEventListener("click",buttonHandler);
// // or
// button.addEventListener("click",()=>{console.log("Hello")});
// // (نوع دیگر)
// button.addEventListener("mousedown",()=>{
//     console.log("clicked")
// });

// https://www.sitepoint.com/clinet-side-storage-opition-comparison