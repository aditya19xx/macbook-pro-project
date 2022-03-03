//based memory

document.getElementById('based-memory').addEventListener('click', function () {
    let basedMemory = document.getElementById('memory-cost').innerText;
    let memory = parseInt(basedMemory);
    let basedMemoryPrice = 0;

    memory = basedMemoryPrice;
    document.getElementById('memory-cost').innerText = memory;

    calculatetotal();

})

//extraa memory

document.getElementById('extra-memory').addEventListener('click', function () {
    let extraMemory = document.getElementById('memory-cost').innerText;
    let memory = parseInt(extraMemory);
    let extraMemoryPrice = 180;

    memory = extraMemoryPrice;
    document.getElementById('memory-cost').innerText = memory;;

    calculatetotal();
})

//based storage

document.getElementById('based-storage').addEventListener('click', function () {
    let basedStorage = document.getElementById('storage-cost').innerText;
    let storage = parseInt(basedStorage);
    let basedStoragePrice = 0;

    storage = basedStoragePrice;
    document.getElementById('storage-cost').innerText = storage;

    calculatetotal();
})

//extra 512GB storage

document.getElementById('extra-512-storage').addEventListener('click', function () {
    let extra512Storage = document.getElementById('storage-cost').innerText;
    let extraStorage = parseInt(extra512Storage);
    let extra512StoragePrice = 100;

    extraStorage = extra512StoragePrice;
    document.getElementById('storage-cost').innerText = extraStorage;

    calculatetotal();
})

//extra 1TB storage

document.getElementById('extra-1TB-storage').addEventListener('click', function () {
    let extra1TBStorage = document.getElementById('storage-cost').innerText;
    let extraStorage1TB = parseInt(extra1TBStorage);
    let extra1TBStoragePrice = 180;

    extraStorage1TB = extra1TBStoragePrice;
    document.getElementById('storage-cost').innerText = extraStorage1TB;

    calculatetotal();
})

// free delivery option

document.getElementById('free-delivery').addEventListener('click', function () {
    let deliveryCost = document.getElementById('delivery-cost').innerText;
    let delivery = parseInt(deliveryCost);
    let deliveryPrice = 0;

    delivery = deliveryPrice;
    document.getElementById('delivery-cost').innerText = delivery;

    calculatetotal();
})

//paid delivery option

document.getElementById('paid-delivery').addEventListener('click', function () {
    let paidDeliveryCost = document.getElementById('delivery-cost').innerText;
    let paidDelivery = parseInt(paidDeliveryCost);
    let paidDeliveryPrice = 20;

    paidDelivery = paidDeliveryPrice;
    document.getElementById('delivery-cost').innerText = paidDelivery;

    calculatetotal();
})

//total price

function calculatetotal() {
    let basedMemoryPrice = document.getElementById('memory-cost');
    let storagePrice = document.getElementById('storage-cost');
    let deliveryPrice = document.getElementById('delivery-cost');
    let totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseInt(totalPrice);
    let bestPrice = 1299;
    totalPrice = bestPrice + parseInt(basedMemoryPrice.innerText) + parseInt(storagePrice.innerText) + parseInt(deliveryPrice.innerText);
    document.getElementById('total-price').innerText = totalPrice;

    //grand total

let grandTotal = document.getElementById('grand-total').innerText;
grandTotal = parseInt(grandTotal);
grandTotal = totalPrice;
document.getElementById('grand-total').innerText = grandTotal;
}



//promo code


    document.getElementById('apply').addEventListener('click', function () {
        let promoCode = document.getElementById('promo-input');

        let promoTotal=  document.getElementById('total-price').innerText;
         let promoPrice = parseInt(promoTotal);
        
        
        if (promoCode.value == 'stevekaku') {
          
        let promoTotalPrice = (promoPrice * 20)/100;
        let grandTotalWithPromo = promoPrice - promoTotalPrice;

          document.getElementById('grand-total').innerText = grandTotalWithPromo;

        }
    promoCode.value = '';
    })


