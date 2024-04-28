let mainBillEl = document.getElementById('billAmount');
let discountValueEl = document.getElementById("discountPercentage");
let tipValueEl = document.getElementById('tipAmount');
let totalAmountEl = document.getElementById("totalAmount");
let alertMessageEl = document.getElementById("error")

function calculate() {

    let billAmount = parseInt(mainBillEl.value);
    console.log(billAmount)

    let disAmt = parseInt(discountValueEl.value);
    console.log(disAmt)

    let tipAmt = parseInt(tipValueEl.value)
    console.log(tipAmt)

    let disAmtValue = billAmount - ((disAmt * billAmount) / 100);
    console.log(disAmtValue)

    let totalBill = (disAmtValue + (0.18 * disAmtValue)) + tipAmt;
    console.log(totalBill);

    totalAmountEl.value = (totalBill);

    if (isNaN(billAmount) || isNaN(disAmt) || isNaN(tipAmt) || mainBillEl.value === "" || discountValueEl.value === "" || tipValueEl.value === "") {
        alertMessageEl.textContent = "Please enter valid input";
        alertMessageEl.style.color = 'red';
        totalAmountEl.value = "";
    } else {
        alertMessageEl.innerText = "";
    }
}

function clearInputs() {
    mainBillEl.value = "";
    discountValueEl.value = "";
    tipValueEl.value = "";
    totalAmountEl.value = "";
    alertMessageEl.innerText = "";
}