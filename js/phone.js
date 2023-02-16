// phone + btn
document.getElementById("btn-phone-plus").addEventListener("click", function () {
    const quantity = getInputValue("phone-number-field", true);
    setProductPrice(quantity, 1219, "phone-total");
    setSubtotal();
    setTaxAndTotal();
});

// phone - btn
document.getElementById("btn-phone-minus").addEventListener("click", function () {
    const quantity = getInputValue("phone-number-field", false);
    setProductPrice(quantity, 1219, "phone-total");
    setSubtotal();
    setTaxAndTotal();
});