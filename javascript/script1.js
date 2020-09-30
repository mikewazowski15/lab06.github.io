let x=1;
while (x>0){
    let enterInt = prompt ("Enter a positve integer");
    if (isNaN(enterInt)) {
        x += 1
    }
    else {
        var int = parseFloat(enterInt);
        
        if (int > 0 && (int | 0) === int) {
            x *= -1;
            var allPrimeNum = [];
            let countNum = 0;
            if (enterInt != 1) {
                for (let i = 2; i <= enterInt; i++) {
                    if ((i % 2 != 0 || i == 2) && (i % 3 != 0 || i == 3) && (i % 5 != 0 || i == 5) && (i % 7 != 0 || i == 7)) {
                        allPrimeNum.push(i)
                        countNum += 1;
                    }
                }
                alert("for n = " + enterInt + " prime numbers are " + allPrimeNum);
                
            } else {
                alert("for n = " + enterInt + " prime numbers are " + "1");
                
            }
            document.getElementById("thisBody").style.visibility = "visible";
        } 
        
        else {
            x += 1;
        }
    }
}