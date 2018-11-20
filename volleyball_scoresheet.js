var score = document.querySelector(".score");
var score_value = 0;
var input = document.querySelector(".team_name1 input");
console.log(input);
score.addEventListener("click", function (e) {
    score_value = score_value + 1;
    console.log(score_value);
    score.textContent = score_value;
    team_name = input.value;
    if (score_value >= 25 && score_value - score_value2 >= 2) {
        alert(team_name + " wins!" + "\n" + score_value + "-" + score_value2);
    }
})
var score2 = document.querySelector(".score2");
var score_value2 = 0;
var input2 = document.querySelector(".team_name2 input");
console.log(input);
score2.addEventListener("click", function (e) {
    score_value2 = score_value2 + 1;
    console.log(score_value2);
    score2.textContent = score_value2;
    team_name2 = input2.value;
    if (score_value2 >= 25 && score_value2 - score_value >= 2) {
        alert(team_name2 + " wins!" + "\n" + score_value2 + "-" + score_value);
    }
})
