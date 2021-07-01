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
