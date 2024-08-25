const arrowW = document.getElementById("arrowW")
const arrowD = document.getElementById("arrowD")
const Deposit = document.getElementById("Deposit")
const Withdraw = document.getElementById("Withdraw")

const OpAmountW = document.getElementById("OpAmountW")
const InAmountW = document.getElementById("InAmountW")
const BtnAmountW = document.getElementById("BtnAmountW")
const ConAmountW = document.getElementById("ConAmountW");

const InAmountD = document.getElementById("InAmountD")
const OpAmountD = document.getElementById("OpAmountD")
const BtnAmountD = document.getElementById("BtnAmountD")
const ConAmountD = document.getElementById("ConAmountD");

const ACholder = document.getElementById("ACholder")
const ACnumber = document.getElementById("ACnumber")
const IFSC = document.getElementById("IFSC")
const Balance = document.getElementById("Balance")
const submit = document.getElementById("submit")
const LabelBal = document.getElementById("LabelBal")
const lab = document.getElementsByClassName("label")

const part1 = document.getElementById("part1")
const part2 = document.getElementById("part2")

// validation for search button


submit.addEventListener("click", () => {
    

    if (ACholder.value === "" || ACnumber.value === "" || IFSC.value === ""){
        alert("Filling All Details is Compulsory!")
    }else{
        Balance.style.display = "block"
        LabelBal.style.display = "block"
        submit.style.display = "none"
        part2.style.display = "block"

        let arr = Array.from(part1.children);
        for (let element in arr) {
            if (element % 2 != 0) {
                arr[element].disabled = true
            }
        }

        Balance.value = localStorage.getItem(ACnumber.value,Balance.value)
        localStorage.setItem(ACnumber.value, Balance.value)
    }


   
})


function arrowBackW() {
    if (Deposit.style.display == "none") {
        Deposit.style.display = "block";

        OpAmountW.style.display = "none";
        InAmountW.style.display = "none";
        BtnAmountW.style.display = "none";
        arrowW.style.display = "none";
        ConAmountW.style.display = "none"
    }
}

function cashWithdraw() {

    arrowW.style.display = "inline-block";
    Deposit.style.display = "none";

    OpAmountW.style.display = "block";
    InAmountW.style.display = "block";
    BtnAmountW.style.display = "block";
}
function confirmWithdraw() {
    if (InAmountW.value === "") {
        alert("Amount is Undefine!")
    } else {
        Balance.value = Balance.value - InAmountW.value;
        ConAmountW.style.display = "block";
        InAmountW.value = "";
        localStorage.setItem(ACnumber.value,Balance.value)

    }
}

function arrowBackD() {
    if (Withdraw.style.display == "none") {
        Withdraw.style.display = "block";

        OpAmountD.style.display = "none";
        InAmountD.style.display = "none";
        BtnAmountD.style.display = "none";
        arrowD.style.display = "none";
        ConAmountD.style.display = "none"
    }
}

function cashDeposit() {

    arrowD.style.display = "inline-block";
    Withdraw.style.display = "none";

    OpAmountD.style.display = "block";
    InAmountD.style.display = "block";
    BtnAmountD.style.display = "block";
}
function confirmDeposit() {
    if (InAmountD.value === "") {
        alert("Amount is Undefine!")
    } else {
        Balance.value = +Balance.value + +InAmountD.value;
        ConAmountD.style.display = "block";
        InAmountD.value = "";
        localStorage.setItem(ACnumber.value,Balance.value)
    }
}
