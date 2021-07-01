// Business Logic
function anxiousResult () {
    var score = 0;
    if (document.getElementById('a1').checked) {
        score++;
    };
    if (document.getElementById('a3').checked) {
        score++;
    };
    if (document.getElementById('a5').checked) {
        score++;
    };
    if (document.getElementById('a7').checked) {
        score++;
    };
    if (score >= 3) {
        alert('YOU MIGHT NOT BE OKAY! You might be experiencing anxiety kindly visit this place!');
    };
    if (score >0 && score <3){
        alert('YOU MIGHT BE OKAY!');
    };
    if (document.getElementsByClassName('anxious').not-checked){
        alert('Kindly fill in all fields!!');
        return false;
    };
 };

 function bipolarResult () {
    var score = 0;
    if (document.getElementById('b1').checked) {
        score++;
    };
    if (document.getElementById('b3').checked) {
        score++;
    };
    if (document.getElementById('b5').checked) {
        score++;
    };
    if (document.getElementById('b7').checked) {
        score++;
    };
    if (score >= 3) {
        alert('YOU MIGHT NOT BE OKAY! You might be experiencing bipolar disorder kindly visit this place!');
    };
    if (score >0 && score <3){
        alert('YOU MIGHT BE OKAY!');
    };
    if (document.getElementsByClassName('bipolar').not-checked){
        alert('Kindly fill in all fields!!');
        return false;
    };
 };


 // userinterface logic
 $(document).ready(function() {
    $('.hideAnxiety').click(function() {
        $('.showAnxiety').toggle('5s');
    });
    $('.hideBipolar').click(function() {
        $('.showBipolar').toggle('5s');
    });
 });