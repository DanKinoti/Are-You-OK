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
        alert('YOU MIGHT NOT BE OKAY! You might be experiencing anxiety kindly');
    };
    if (score >=0 && score <3){
        alert('YOU MIGHT BE OKAY!');
    };
    if (document.getElementsByClassName('Anxious').not-checked){
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
        alert('YOU MIGHT NOT BE OKAY! You might be experiencing bipolar disorder');
    };
    if (score >=0 && score <3){
        alert('YOU MIGHT BE OKAY!');
    };
    if (document.getElementsByClassName('Bipolar').not-checked){
        alert('Kindly fill in all fields!!');
        return false;
    };
 };
function depressionResult () {
    var score = 0;
    if (document.getElementById('d1').checked) {
        score++;
    };
    if (document.getElementById('d3').checked) {
        score++;
    };
    if (document.getElementById('d5').checked) {
        score++;
    };
    if (document.getElementById('d7').checked) {
        score++;
    };
    if (score >= 3) {
        alert('YOU MIGHT NOT BE OKAY! You might be experiencing Depression');
    };
    if (score >=0 && score <3){
        alert('YOU MIGHT BE OKAY!');
    };
    if (document.getElementsByClassName('Depression').not-checked){
        alert('Kindly fill in all fields!!');
        return false;
    };
 };
function schizophreniaResult () {
    var score = 0;
    if (document.getElementById('s1').checked) {
        score++;
    };
    if (document.getElementById('s3').checked) {
        score++;
    };
    if (document.getElementById('s5').checked) {
        score++;
    };
    if (document.getElementById('s7').checked) {
        score++;
    };
    if (score >= 3) {
        alert('YOU MIGHT NOT BE OKAY! You might be experiencing Schizophrenia');
    };
    if (score >=0 && score <3){
        alert('YOU MIGHT BE OKAY!');
    };
    if (document.getElementsByClassName('Schizophrenia').not-checked){
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
    $('.hideDepression').click(function() {
        $('.showDepression').toggle('5s');
    });
    $('.hideSchizophrenia').click(function() {
        $('.showSchizophrenia').toggle('5s');
    });
 });
