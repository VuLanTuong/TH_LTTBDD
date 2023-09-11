function calculaeAvg(array) {
    let total = 0;
    let count = 0;
    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    console.log(total / count);
    return total / count;

}

function compareScore() {

    arrayA = [10, 20, 10]
    arrayB = [40, 50, 20]

    let a = calculaeAvg(arrayA);
    let b = calculaeAvg(arrayB);

    if (a > b)
        console.log("a win");

    console.log("b win");


}

compareScore();