// get input value
function getInputValue(inputId, updateCheck) {
    const inputField = document.getElementById(inputId);
    const value = parseInt(inputField.value);

    let quantity;
    if (updateCheck) { // updateCheck === true;
        inputField.value = value + 1;
        quantity = inputField.value;
    }
    else if (value > 1) {
        inputField.value = value - 1;
        quantity = inputField.value;
    }

    return quantity;
};

// product price
function setProductPrice(quantity, productPrice, totalPriceId) {

    const productTotalPrice = quantity * productPrice;

    const totalPriceField = document.getElementById(totalPriceId);
    totalPriceField.innerText = productTotalPrice;

    if (isNaN(totalPriceField.innerText)) {
        totalPriceField.innerText = productPrice;
    }
};

// get element value
function getElementValue(productPriceId) {
    const productPriceField = document.getElementById(productPriceId);
    const productPrice = parseInt(productPriceField.innerText);

    return productPrice;
};

// set element value
function setElementValue(elementId, value) {
    document.getElementById(elementId).innerText = value;
};

// calculation subtotal price
function setSubtotal() {
    const phoneTotalPrice = getElementValue("phone-total");
    const caseTotalPrice = getElementValue("case-total");

    const subtotal = phoneTotalPrice + caseTotalPrice;
    setElementValue("sub-total", subtotal);

    return subtotal;
};

// calculation tax amount and total
function setTaxAndTotal() {
    const subtotal = setSubtotal();

    const taxAmount = subtotal * 10 / 100;

    setElementValue("tax-amount", taxAmount.toFixed(2));

    // calculate final total price
    const totalPrice = subtotal + taxAmount;
    setElementValue("final-total", Math.round(totalPrice));
};

//............................................................
// checkout
function goToPayment() {
    window.location.href = "checkout/checkout.html";
};

//..................................................................
// item remove
function itemRemove(cardId, closeBtn) {
    const card = document.getElementById(cardId);
    closeBtn.parentNode.parentNode.parentNode.removeChild(card);
};