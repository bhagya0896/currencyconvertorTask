document.querySelector("button").addEventListener("click",conversion);

async function conversion(e){
e.preventDefault();
let basevalue=document.getElementById("base").value;
let out =document.getElementById("converted").value;
let amount=document.getElementById("inputvalue").value;
  
  // Using Api - api.exchangeratesapi.io
  
let url="https://api.exchangeratesapi.io/latest?base="+basevalue;
 
let response = await fetch(url);
let data = await response.json();

let result = data.rates[out]*Number(amount);
let output=`The conversion of  currency ${basevalue} to currency of ${out} of amount ${amount} is ${result}`;
document.getElementById("resultdisplay").innerHTML = output;

}
