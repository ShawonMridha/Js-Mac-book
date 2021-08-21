
function priceVerifi(expenseId, isAdd, amount) {

    const costOfAmount = document.getElementById(expenseId);
    let externalProductCost = '0';
    if (isAdd == true) {
        externalProductCost = externalProductCost + amount;
    }
    else if (isAdd == false) {
        externalProductCost = externalProductCost + amount;
    }
    costOfAmount.innerText = parseFloat(externalProductCost);

    calculation()
}


function calculation() {
    const memoryPuschaseAmount = document.getElementById('memory-cost').innerText;
    const storagePurchaseAmount = document.getElementById('storage-cost').innerText
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const bestPrice = document.getElementById('best-price').innerText;


    const salesValue = document.getElementById('sales-value');

    const totalAmount = parseFloat(memoryPuschaseAmount) + parseFloat(storagePurchaseAmount) + parseFloat(deliveryCost) + parseFloat(bestPrice);
    salesValue.innerText = totalAmount;

    const promoCodeInputField = document.getElementById('promo-input');
    const promoAmount = document.getElementById('promo-value');

    const promoCode = 'stevekaku';
    const promoCodeCase = promoCode.toLowerCase();
    if (promoCodeInputField.value.toLowerCase() == promoCodeCase) {
        const discount = totalAmount * .2;
        promoAmount.innerText = totalAmount - discount;

        // clear input Field
        promoCodeInputField.value = '';
    }
    else {
        promoAmount.innerText = totalAmount;
    }



}


document.getElementById('apply-button').addEventListener('click', function () {
    calculation()

})