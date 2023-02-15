// plus phone
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newQty = qtyUpdate(true, 'phone-qty');
    priceUpdate(true, newQty, 'phone-total');
    productsTotal();
});

// minus phone
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newQty = qtyUpdate(false, 'phone-qty');
    priceUpdate(true, newQty, 'phone-total');
    productsTotal();
});