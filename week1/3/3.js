const el = document.getElementById("btn");
if (el) {
    console.log("Button not null");
    el.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("hello");

        console.log(document.getElementById("scoreA1").value);
        console.log(document.getElementById("scoreA2").value);
        console.log(document.getElementById("scoreA3").value);
        console.log(document.getElementById("scoreB1").value);
        console.log(document.getElementById("scoreB2").value);
        console.log(document.getElementById("scoreB3").value);



        if ((document.getElementById("scoreA1") != null) &&
            (document.getElementById("scoreA2") != null) &&
            (document.getElementById("scoreA3") != null) &&
            (document.getElementById("scoreB1") != null) &&
            (document.getElementById("scoreB2") != null) &&
            (document.getElementById("scoreB3") != null)) {
            let a = [
                document.getElementById("scoreA1").value,
                document.getElementById("scoreA2").value,
                document.getElementById("scoreA3").value
            ];

            let b = [
                document.getElementById("scoreB1").value,
                document.getElementById("scoreB2").value,
                document.getElementById("scoreB3").value
            ];
            compareScore(a, b);
        }

    });
} else {
    console.log("Button is null");
}

function compareScore(arrayA, arrayB) {
    let sumA = 0;
    let sumB = 0;

    for (let i = 0; i < arrayA.length; i++) {
        sumA += parseFloat(arrayA[i]);
        sumB += parseFloat(arrayB[i]);
    }

    let averageA = sumA / arrayA.length;
    let averageB = sumB / arrayB.length;

    document.getElementById("resultA").innerHTML = "Team A's average score: " + averageA.toFixed(2);
    document.getElementById("resultB").innerHTML = "Team B's average score: " + averageB.toFixed(2);

    if (averageA > 100 || averageB > 100) {

        if (averageA == averageB) {
            console.log("draw");
            document.getElementById("result").innerHTML = "DRAW";
        } else if (averageA > averageB) {
            console.log("Team A wins");
            document.getElementById("result").innerHTML = " Dolphins wins the trophy";
        } else {
            console.log("Team B wins");
            document.getElementById("result").innerHTML = "Koalas wins the trophy";
        }
    }
    else {
        document.getElementById("result").innerHTML = "No team wins the trophy";
    }

}