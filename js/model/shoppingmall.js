/**
 * Created by liyanzi on 14-8-15.
 */
$(document).ready(function(){

    showAllItemsList();
    var cartSum = 0;
    $('.add').on('click',function(){

//        console.log($(this)[0].id);
       addCart($(this)[0].id);
        cartSum++;
        $('#cartItemSum').text(cartSum);

    });

});


function showAllItemsList(){
    var items = getItems();

    for(var i = 0; i < items.length; i++) {
        $('#productList').append(
                '<div class="col-md-3 form-group text-danger">' + items[i].name + '</div>' +
                '<div class="col-md-3 form-group text-info">' + items[i].price + '</div>' +
                '<div class="col-md-3 form-group text-success">' + items[i].unit + '</div>' +
                '<div class="col-md-3 form-group"><button id="' + items[i].barcode +
                '" type="button" class="btn btn-primary btn-sm add">添加到购物车</button></div>' +
                '</div>' + '</div>' + '</div>');

    }
}


//function  judgeIsExist(barcode) {
//
//    for (var i = 0; i < cartProduct.length; i++) {
//
//        if(barcode === cartProduct[i]){
//
//            barcode
//        }
//
//
//    }
//}
//function  getCartItemByBarcode(){
//
//        for()
//
//}
//
//    $('#' + items[i].barcode + '').on('click', function (){
//        var cartProduct = [];
//        if(cartProduct) {
//
//
//        }
//        else{
//
//            cartProduct.push(+items[i].barcode);
//        }
//        cartItemSum++;
//
//        $('#cartItemSum').text(cartItemSum);
//        $('#cartItemSumIndex').text(cartItemSum);
//        $('#cartItemSumCart').text(cartItemSum);
//        $('#cartItemSumPay').text(cartItemSum);
//
//    });