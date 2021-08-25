// get the initial price input 
const initialPrice = document.querySelector("#initial-price");
// console.log(initialPrice);

// get the quantity of stocks
const stocksQuantity = document.querySelector("#stock-quantity");
// console.log(stocksQuantity);

// get the current price
const currentPrice = document.querySelector("#current-price");
// console.log(currentPrice);

// get the submit button
const submitBtn = document.querySelector("#submit-btn");
// console.log(submitBtn);

// get the output div
const outputMessage = document.querySelector(".output");
// console.log(outputMessage);

function showMsg(message, status) {

    outputMessage.style.display = "block";
    
    if(status === "PROFIT") {

        outputMessage.style.color = "green";
    } else if(status === "LOSS") {

        outputMessage.style.color = "red";
    } else {

        // Do Nothing
    }

    outputMessage.innerText = message;


}

function calculateProfitAndLoss(initial, quantity, current) {

    // loss
    if(initial > current) {

        let lossPerQuantity = initial - current;
        let totalLoss = lossPerQuantity * quantity;

        let lossPercentage = (totalLoss/initial)*100;

        // Limit the Decimal points to 2 digits, using toFixed(digits)
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
        lossPercentage = lossPercentage.toFixed(2);

        // console.log(`The loss is ${totalLoss} and the loss percentage is ${lossPercentage}%`);
        showMsg(`The loss is ${totalLoss} and the loss percentage is ${lossPercentage}%`, "LOSS");

    }

    //profit
    else if(initial < current) {

        let profitPerQuantity = current - initial;
        let totalProfit = profitPerQuantity * quantity;

        let profitPercentage = (totalProfit/initial)*100;

        // Limit the Decimal points to 2 digits, using toFixed(digits)
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
        profitPercentage = profitPercentage.toFixed(2);


        // console.log(`The profit is ${totalProfit} and the profit precentage is ${profitPercentage}%`);
        showMsg(`The profit is ${totalProfit} and the profit precentage is ${profitPercentage}%`, "PROFIT");

    } 

    // no profit or loss
    else {

        // console.log(`Hey, There is no profit or loss`);
        showMsg(`Hey, There is no profit or loss`, "NOTHING");
    }

}

function returnStockChange() {
    
    // console.log("Clicked");
    outputMessage.style.display = "none";
    outputMessage.style.color = "black";
    
    // get the value and also typecast to number
    const initial = Number(initialPrice.value);
    const quantity = Number(stocksQuantity.value);
    const current = Number(currentPrice.value);
    
    if(initial > 0 && quantity > 0 && current > 0) {

        calculateProfitAndLoss(initial, quantity, current);

    } else {

        outputMessage.style.display = "block";
        outputMessage.innerText = "Initial Price, Stocks Quantitiy and Current Price should be atleast greater than zero."
        

    }
}


// add click event listener to the submit button
submitBtn.addEventListener("click", returnStockChange);