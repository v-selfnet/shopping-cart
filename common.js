// common code plus/minus
function qtyUpdate(isIncrease, qtyField){
    const caseQty = document.getElementById(qtyField);
    const previousQty = parseInt(caseQty.value);

    let newQty;
    if(isIncrease) newQty = previousQty +1;
    else newQty = previousQty -1;
    
    caseQty.value = newQty;

    return newQty;
}

// common code each product total price update
function priceUpdate(isPhone, newQty, TotalField){
    if(isPhone)
        document.getElementById(TotalField).innerText = newQty * 1219;
    else
        document.getElementById(TotalField).innerText = newQty * 59;
}

// products subtotal-tax-total
function productsTotal(){
    const phoneTotal = parseInt(document.getElementById('phone-total').innerText);
    const caseTotal = parseInt(document.getElementById('case-total').innerText);

    // subtotal
    const getSubTotal = phoneTotal + caseTotal;
    document.getElementById('subtotal').innerText = getSubTotal;
    // tax
    const getTax = getSubTotal * 0.1;
    document.getElementById('tax').innerText = getTax.toFixed(2);
    // final total
    const finalTotal = getSubTotal + getTax;
    document.getElementById('final-total').innerText = finalTotal.toFixed(2);
}
