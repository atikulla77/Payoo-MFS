document.getElementById("btn-add-money").addEventListener("click", function (event){
    event.preventDefault();
    
    const addMoney = getInputFieldValueById("input-money-amount");
    const pinNumber = getInputFieldValueById("input-pin-number");

    // Chack 2 input fild Number or not
    if (isNaN(addMoney)) {
        alert("Faild to add Money")
        return;
    }else if(addMoney < 0){
        alert("Please input a valid Amount")
        return;
    }
   
    if(pinNumber === 1234){
        const balance = getTextFieldValueById("account-balance");
        const newBalance = addMoney + balance;
        document.getElementById("account-balance").innerText = newBalance;
        let currentTime = new Date();
        //  add to transaction history
        const div = document.createElement("div")
        // div.classList.add(...divClassList)
        div.innerHTML = `
            <div class="flex items-center">
            <h4 class="text-[14px] font-[500] text-[#fff] pr-[10px]">*Add Money*</h4>
            <p class="text-[14px] font-[500] text-[#ffffffc8]"><span class="text-[#00b6fe] pr-[4px]">${balance}</span> Add Money. New Balance <span class="text-[#00b6fe]">${newBalance}</span></p>
            </div>
            <p class="text-[13px] text-[#ffffffc8]">${currentTime}</p>
        `
        document.getElementById("transaction-container").appendChild(div)
    }
    else{
        alert("Faild to add money")
    }
    document.getElementById("from_add_money").reset()
})
