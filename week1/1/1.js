console.log("hi");
const el = document.getElementById("calc");
if (el) {
    el.addEventListener("submit", calculate);
}




function compareBMI() {
    // if != null 
    let el = document.getElementById("num1");
    if (el) {
        var heightMark = el.value;
    }

    let la = document.getElementById("num2");
    if (la) {
        var weightMark = la.value;
    }

    let bl = document.getElementById("num3");
    if (bl) {
        var heightJohn = bl.value;
    }
    let bb = document.getElementById("num4");
    if (bb) {
        var weightJohn = bb.value;
    }
    // var weightMark = Number(document.getElementById("num2").value);
    var height2 = heightMark * heightMark;
    let bmiMark = 0;
    bmiMark = (weightMark / height2) * 10000;
    console.log(bmiMark);

    // var heightJohn = Number(document.getElementById("num3").value);
    // var weightJohn = Number(document.getElementById("num4").value);
    var heightDouble = heightJohn * heightJohn;
    var bmiJohn = (weightJohn / heightDouble) * 10000;
    console.log(bmiJohn);

    let markHigherBMI = Boolean(bmiMark > bmiJohn)
    console.log(markHigherBMI);

}

compareBMI();