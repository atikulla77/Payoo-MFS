document.getElementById("btn-cash-out").addEventListener("click", function(event){
    event.preventDefault(event);

    const cashOut = getInputFieldValueById("input-cash-out")
    const pinNumber = getInputFieldValueById("input-cash-out-pin")

    // Chack 2 input fild Number or not
    if (isNaN(cashOut)) {
        alert("Faild to add Money")
        return;
    }else if(cashOut < 0){
        alert("Please input a valid Amount")
        return;
    }

    if(pinNumber === 1234){
        const balance = getTextFieldValueById("account-balance")

        if (cashOut > balance) {
            alert("You do not have enough money to cash out");
            return;
        }
        const newBalance = balance - cashOut;
        document.getElementById("account-balance").innerText = newBalance;

        //  add to transaction history
        const div = document.createElement("div")
        const divClassList = ["flex", "items-center", "pb-[8px]"];
        div.classList.add(...divClassList)
        div.innerHTML = `
            <h4 class="text-[14px] font-[500] text-[#fff] pr-[10px]">*Cash Out*</h4>
            <p class="text-[14px] font-[500] text-[#ffffffc8]"><span class="text-[#00b6fe] pr-[4px]">${cashOut}</span> Withdrow. New Balance <span class="text-[#00b6fe]">${newBalance}</span></p>
        `
        document.getElementById("transaction-container").appendChild(div)
    }
    else{
        alert("No money for you.... DGM.")
    }
    document.getElementById("from_cash_out").reset()
})


