function readInput() {
    var allNumber = [];
    while (true) {
        let getEnter = parseFloat(prompt("Enter an integer (Negative to qiut)"));
        let checkInt = (((getEnter | 0) === getEnter) && !isNaN(getEnter));
        if (checkInt) {
            if (getEnter >= 0) {
                allNumber.push(getEnter);
            } else {
                return allNumber.sort(function (a, b) { return a - b })
            }
        }
    }
}
function displayStats(list) {
    if (list.length == 0) {
        alert("For the list that is empty. The average is 0, The minimum is 0, The maximun is 0");
    } else {
        let sum = 0;
        let max = Math.max.apply(null, list);
        let min = Math.min.apply(null, list);
        for (let i = 0; i < list.length; i++) {
            sum += list[i];
        }
        let avg = (sum / list.length);
        alert("For the list that is " + list + " The average is " + avg.toFixed(2) + ", The minimum is " + min + ", The maximun is " + max);
    }
    showBody();
}
function showBody() {
    document.getElementById("thisBody").style.visibility = "visible";
}

/* ---main--- */
list = readInput();
displayStats(list);