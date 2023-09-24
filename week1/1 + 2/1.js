console.log("hi");
const el = document.getElementById("submit-button-id");
if (el) {
    console.log("Button not null");
    el.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("hello");
        compareBMI();
    });
} else {
    console.log("Button is null");
}

//Vu Lan Tuong - 20020761

function compareBMI() {
    // if != null 
    let e1 = document.getElementById("num1");
    if (e1) {
        var heightMark = e1.value;
    }

    let e2 = document.getElementById("num2");
    if (e2) {
        var weightMark = e2.value;
    }

    let e3 = document.getElementById("num3");
    if (e3) {
        var heightJohn = e3.value;
    }
    let e4 = document.getElementById("num4");
    if (e4) {
        var weightJohn = e4.value;
    }

    console.log(e1, e2, e3, e4);


    //Vu Lan Tuong - 20020761

    // var weightMark = Number(document.getElementById("num2").value);
    var height2 = heightMark * heightMark;
    let bmiMark = 0;
    bmiMark = ((weightMark / height2) * 10000).toFixed(2);
    console.log(bmiMark);

    // var heightJohn = Number(document.getElementById("num3").value);
    // var weightJohn = Number(document.getElementById("num4").value);
    var heightDouble = heightJohn * heightJohn;
    var bmiJohn = ((weightJohn / heightDouble) * 10000).toFixed(2);
    console.log(bmiJohn);

    let markHigherBMI = Boolean(bmiMark > bmiJohn)
    console.log(markHigherBMI);


    document.getElementById("resultJohn").innerHTML = "John's BMI " + bmiJohn;
    document.getElementById("resultMark").innerHTML = "Mark's BMI " + bmiMark;

    if (markHigherBMI) {
        document.getElementById("compare").innerHTML = "Mark(" + bmiMark + ") has a higher BMI than John(" + bmiJohn + ")";
    }
    else {
        document.getElementById("compare").innerHTML = "John(" + bmiJohn + ") has a higher BMI than Mark(" + bmiMark + ")";
    }

}

// compareBMI();