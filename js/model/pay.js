/**
 * Created by liyanzi on 14-8-16.
 */
$(document).ready(function(){
        var cartSums = JSON.parse(localStorage.getItem('cartSum'));
        $('#cartItemSum').text(cartSums);
        showPayList();
});

function showPayList(){

    $('#payList1').append('<div class="text-center">打印时间：2014年8月3日</div>');

    var cartProduct = JSON.parse(localStorage.getItem('cartProduct'));
    _.forEach(cartProduct,function(cartProduct){

        $('#payList2').append('<div class="text-center">名称：'+cartProduct.items.name+
        '，数量：'+cartProduct.inputCount+cartProduct.items.unit+'，单价：'+
        cartProduct.items.price+'元，小计'+cartProduct.items.price*cartProduct.inputCount+'元</div>');
    });

    $('#payList3').append('<div class="text-center">总计：'+getTotal(cartProduct)+'元</div>');

}
