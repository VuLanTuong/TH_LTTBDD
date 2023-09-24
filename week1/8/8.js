window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating tip
    button.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("hello");

        console.log(document.getElementById("bill1").value);
        console.log(document.getElementById("bill2").value);
        console.log(document.getElementById("bill3").value);


        if ((document.getElementById("bill1") != null) &&
            (document.getElementById("bill2") != null) &&
            (document.getElementById("bill3") != null)) {
            let a = [
                document.getElementById("bill1").value,
                document.getElementById("bill2").value,
                document.getElementById("bill3").value
            ];
            calculateTip(a);
        }


    });
}

function calculateTip(arr) {
    let tipList = [];
    for (let i = 0; i < arr.length; i++) {
        let bill = arr[i]
        let tipPercentage = bill >= 50 && bill <= 300 ? 15 : 20;
        let tip = (bill * tipPercentage / 100).toFixed(2);

        // console.log(tip)
        tipList.push(parseInt(tip));
    }

    // let bill = parseInt(document.querySelector("#bill").value);
    // let tipPercentage = bill >= 50 && bill <= 300 ? 15 : 20;
    // let tip = bill * tipPercentage / 100;


    // document.getElementById("result1").innerHTML = "The bill was " + arr[0] + " , the tip was "
    //     + tipList[0] + " , and the total value is " + (parseInt(arr[0]) + parseInt(tipList[0])) + " ;";


    // document.getElementById("result2").innerHTML = "The bill was " + arr[1] + " , the tip was "
    //     + tipList[1] + " , and the total value is " + (parseInt(arr[1]) + parseInt(tipList[1])) + " ;";


    // document.getElementById("result3").innerHTML = "The bill was " + arr[2] + " , the tip was "
    //     + tipList[2] + " , and the total value is " + (parseInt(arr[2]) + parseInt(tipList[2])) + " ;";
    // // console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.");

    //Vu Lan Tuong - 20020761
    totalList = [];
    totalList.push(parseInt(arr[0]) + parseInt(tipList[0]));
    totalList.push(parseInt(arr[1]) + parseInt(tipList[1]));
    totalList.push(parseInt(arr[2]) + parseInt(tipList[2]));



    console.log(tipList);
    console.log(totalList);

    return [tipList, totalList];
}


bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
calculateTip(bill);
//Vu Lan Tuong - 20020761



