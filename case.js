// plus case
document.getElementById('btn-case-plus').addEventListener('click', function(){
   const newQty = qtyUpdate(true, 'case-qty');
   priceUpdate(false, newQty, 'case-total');
   productsTotal();
});

// minus case
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newQty = qtyUpdate(false, 'case-qty');
    priceUpdate(false, newQty, 'case-total');
    productsTotal();
});