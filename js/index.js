console.log("I hope its linked");
var a,b;
function setValues()
{
  a = Number(document.getElementById("a").value);
  b = Number(document.getElementById("a").value);
}
function sum()
{
  setValues();
  result = a+b;
  alert("The sum is equals to" + result);
}
function rest()
{
  setValues();
  result = a-b;
  alert("The rest is equals to" + result);
}
function multiply()
{
  setValues();
  result = a*b;
  alert("The operation is equals to" + result);
}
function div()
{
  setValues();
  result = a/b;
  alert("The operation is equals to" + result);
}
