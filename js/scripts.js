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
        alert('YOU ARE NOT OKAY! You might be experiencing ANXIETY kindly visit this place! ')
    }
    else {
        alert('Heey YOU ARE OKAY.');
    };
 };