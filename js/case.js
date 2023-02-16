// case + btn
document.getElementById("btn-case-plus").addEventListener("click", function () {
    const quantity = getInputValue("case-number-field", true);
    setProductPrice(quantity, 59, "case-total");
    setSubtotal();
    setTaxAndTotal();
});

// case - btn
document.getElementById("btn-case-minus").addEventListener("click", function () {
    const quantity = getInputValue("case-number-field", false);
    setProductPrice(quantity, 59, "case-total");
    setSubtotal();
    setTaxAndTotal();
});