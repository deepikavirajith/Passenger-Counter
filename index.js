let pcnt = document.getElementById("pcount");
let displayCount = document.getElementById("displayCount");




let count = 0

function increment(){
count += 1;
pcnt.textContent = count;
}

function saveCount(){
let savebtn = count + '-';
displayCount.textContent += savebtn;
pcnt.textContent = 0;
count = 0
}
