/**
 * Created by liyanzi on 14-8-15.
 */

//$(document).ready(function(){
//   $('#cartItemSum').text('cartSum');
//})

$(document).ready(function(){


        var cartSums = JSON.parse(localStorage.getItem('cartSum'));

        $('#cartItemSum').text(cartSums);


});


function addCart(barcode){

    var cartProduct = JSON.parse(localStorage.getItem('cartProduct'));
    var cartItem = new CartItems(getCartItemByBarcode(barcode),1);

    if(!cartProduct){
         cartProduct = [];
        cartProduct.push(cartItem);
    }
    else{
        if(!judgeIsExist(cartProduct,barcode)){
            cartProduct.push(cartItem);
        }
    }
    localStorage.setItem('cartProduct',JSON.stringify(cartProduct));
}

function  judgeIsExist(cartProduct,barcode){
    for (var i = 0; i < cartProduct.length; i++) {
        if(barcode === cartProduct[i].items.barcode){

            cartProduct[i].inputCount++;

            return true;
        }
    }
    return false;
}
function  getCartItemByBarcode(barcode){

    var items = getItems();
        for(var i = 0; i < items.length; i++){
            if(barcode === items[i].barcode){
                return items[i];
            }
        }
}
