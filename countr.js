let count = 0;

function add() {
  count++;
  document.getElementsByClassName("count")[0].innerHTML = count;
  a = document.getElementsByClassName("count")[0];
  console.log(a);
}
function sub() {
  count--;
  document.getElementById("cat").innerHTML = count;
  b = document.getElementById("cat");
  console.log(b);
}
