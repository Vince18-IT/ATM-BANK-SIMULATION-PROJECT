let balance = 5000;


let currentbalance = document.getElementById("balance").innerHTML = `Current Balance: ₱${balance.toFixed(2)}`;

function openWithdrawPopup() {
    document.getElementById("withdrawPopup").style.display = "flex";
}


function closeWithdrawPopup() {
    document.getElementById("withdrawPopup").style.display = "none";
}


function proceedWithdraw() {
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    if (withdrawAmount > balance) {
        alert("Insufficient balance!");
    } else {
        balance -= withdrawAmount;
        alert(`You successfully withdrew ₱${withdrawAmount.toFixed(2)}`);
        document.getElementById("balance").textContent = `Current Balance: ₱${balance.toFixed(2)}`;
    }
    closeWithdrawPopup();
}

function openDepositPopup() {
    document.getElementById("depositPopup").style.display = "flex";
}

function closeDepositPopup() {
    document.getElementById("depositPopup").style.display = "none";
}

function proceedDeposit() {
    const depositAmount = parseFloat(document.getElementById("depositAmount").value);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    balance += depositAmount;
    alert(`You successfully deposited ₱${depositAmount.toFixed(2)}`);
    document.getElementById("balance").textContent = `Current Balance: ₱${balance.toFixed(2)}`;
    closeDepositPopup();
}


function openCheckBalancePopup() {
    document.getElementById("currentBalanceDisplay").textContent = `₱${balance.toFixed(2)}`;
    document.getElementById("checkBalancePopup").style.display = "flex";
}

function closeCheckBalancePopup() {
    document.getElementById("checkBalancePopup").style.display = "none";
}

function openExitPopup() {
    document.getElementById("exitPopup").style.display = "flex";
}

function closeExitPopup() {
    document.getElementById("exitPopup").style.display = "none";
}

function confirmExit() {
    location.reload();
}

