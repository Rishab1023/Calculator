const Acbtn = document.querySelector("#Ac"); //1
const backspacebtn = document.querySelector("#backspace"); //2
const btnC = document.querySelector("#C"); //3
const btndivide = document.querySelector("#divide"); //4
const btn9 = document.querySelector("#nine"); //5
const btn8 = document.querySelector("#eight"); //6
const btn7 = document.querySelector("#seven"); //7
const btnmultiply = document.querySelector("#x"); //8
const btn6 = document.querySelector("#six"); //9
const btn5 = document.querySelector("#five"); //10
const btn4 = document.querySelector("#four"); //11
const btnsubtract = document.querySelector("#subtract"); //12
const btn3 = document.querySelector("#three") //13
const btn2 = document.querySelector("#two") //14
const btn1 = document.querySelector("#one") //15
const btnadd = document.querySelector("#addition") //16
const btnpercent = document.querySelector("#percent") //17
const btn0 = document.querySelector("#zero") //18
const btndot = document.querySelector("#dot") //19
const btnequal = document.querySelector("#equal") //20
const displayEl = document.querySelector("#display") // main display

// function of the buttons
Acbtn.addEventListener("click",()=>{ Acbtnclick()}); // clear all funtion
backspacebtn.addEventListener("click",()=>{}) // backspace function
btnC.addEventListener("click",()=>{}) // clear button function
btndivide.addEventListener("click",()=>{}) // divide function
btnmultiply.addEventListener("click",()=>{}) // multiply function
btnadd.addEventListener("click",()=>{}) // add function
btnsubtract.addEventListener("click",()=>{}) // subtract funtion
btn9.addEventListener("click",()=>{}) // display 9 function
btn8.addEventListener("click",()=>{}) // display 8 function
btn7.addEventListener("click",()=>{}) // display 7 function
btn6.addEventListener("click",()=>{}) // display 6 function
btn5.addEventListener("click",()=>{}) // display 5 function
btn4.addEventListener("click",()=>{}) // display 4 function
btn3.addEventListener("click",()=>{}) // display 3 function
btn2.addEventListener("click",()=>{}) // display 2 function
btn1.addEventListener("click",()=>{}) // display 1 function
btn0.addEventListener("click",()=>{}) // display 0 function
btndot.addEventListener("click",()=>{}) // display dot function
btnequal.addEventListener("click",()=>{}) // display = function
btnpercent.addEventListener("click",()=>{}) // display % function


// functions for the buttons
const Acbtnclick = () =>{
  console.log("button was clicked");
  displayEl.textContent = ""
}
const backspaceclick = () =>{
  console.log("backspace");
}