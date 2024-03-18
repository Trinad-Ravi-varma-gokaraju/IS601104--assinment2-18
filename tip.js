function calculateTotal() {
    var subtotalInput = document.getElementById("subtotal");
    var tipPercentageInput = document.getElementById("tipPercentage");
    var totalAmountDisplay = document.getElementById("totalAmount");

    var subtotal = Number(subtotalInput.value);
    var tipPercentage = Number(tipPercentageInput.value);

    var tipAmount = (subtotal * tipPercentage) / 100;
    var totalAmount = subtotal + tipAmount;

    totalAmountDisplay.innerText = "Final amount: " + totalAmount;
}
document.addEventListener("DOMContentLoaded", function() {
    var calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.addEventListener("click", calculateTotal);
});



