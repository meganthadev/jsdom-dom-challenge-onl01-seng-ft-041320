document.addEventListener("DOMContentLoaded", function() {
 const counter = document.getElementById('counter');
 const minus = document.getElementById('minus');
 const plus = document.getElementById('plus');
 const like = document.getElementById('heart');
 const pause = document.getElementById('pause');
 const likes = document.getElementsByClassName('likes')[0];
 const submit = document.getElementById('submit');
 const commentForm = document.getElementsByTagName('input')[0];
 const comments = document.getElementById('list');
 let timeCounter = setInterval(plusCounter, 1000);
 let timeRunning = true;
 
 function plusCounter() {
   if (timeRunning === true){
     counter.innerHTML++
    }
};
 