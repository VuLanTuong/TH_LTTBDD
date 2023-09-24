window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating tip
    button.addEventListener("click", calculateTip);
};

function calculateTip() {
    let bill = parseInt(document.querySelector("#bill").value);
    let tipPercentage = bill >= 50 && bill <= 300 ? 15 : 20;
    let tip = bill * tipPercentage / 100;
    let result = document.querySelector("#result");
    result.innerHTML = `The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.`;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.`);
   
    // function calculateTip() {
    //     let bill = parseInt(document.querySelector("#bill").value);
    
    //     let tipPercentage = bill >= 50 && bill <= 300 ? 15 : 20;
    
    //     let tip = bill * tipPercentage / 100;
    //     let result = document.querySelector("#result");
    //     result.innerHTML = `The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.`;
    //     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.`);
    // }
}

