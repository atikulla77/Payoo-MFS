document.getElementById("add-money-Btn").addEventListener("click", function() {
    activeTogallButton("add-money-Btn")
    showSectionById("add-money-From");
});
document.getElementById("cash-out-Btn").addEventListener("click", function() {
    activeTogallButton("cash-out-Btn")
    showSectionById("cash-out-From");
});
document.getElementById("transaction-Btn").addEventListener("click", function() {
    activeTogallButton("transaction-Btn")
    showSectionById("transaction-history");
})