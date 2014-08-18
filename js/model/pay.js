/**
 * Created by liyanzi on 14-8-16.
 */
$(document).ready(function(){

        var cartSums = JSON.parse(localStorage.getItem('cartSum'));
        $('#cartItemSum').text(cartSums);
        showPayList();

});

function showPayList(){

    var cartProduct = JSON.parse(localStorage.getItem('cartProduct'));

//    if(cartProduct){
//
//        _.forEach(cartProduct, function (cartProduct){
//            $('#payList').append('<div class="col-md-3 text-center">' + cartProduct.items.name + '</div>' +
//                '<div class="col-md-3 text-center">' + cartProduct.inputCount + cartProduct.items.unit + '</div>' +
//                '<div class="col-md-3 text-center">' + cartProduct.items.price + '元' + '</div>' +
//                '<div class="col-md-3 text-center">' + cartProduct.items.price * cartProduct.inputCount + '元</div>')
//        });
//        $('#payList2').append('<div class="text-center text-info"><h4>总计：' + getTotal(cartProduct) +
//                '元</h4></div>' + '<div class="text-center">打印时间：2014年8月3日</div>' +
//                '<div class="text-center text-success"><h4>欢迎您下次再来选购！</h4></div>' +
//                '<p class="text-center">' +
//                '<button class="btn btn-info" id="pay">立即结算<span class="glyphicon glyphicon glyphicon-hand-up"></span></button>' +
//                '</p>' );
//      }
//        else {
//            $('#payList').append('<div class="text-center text-success"><h3>空空如也，去商场转转！</h3></div>');
//    }
//

    if(cartProduct){

        _.forEach(cartProduct, function (cartProduct){
            if(cartProduct.inputCount > 0){
            $('#payList').append('<div class="col-md-3 text-center">' + cartProduct.items.name + '</div>' +
                '<div class="col-md-3 text-center">' + cartProduct.inputCount + cartProduct.items.unit + '</div>' +
                '<div class="col-md-3 text-center">' + cartProduct.items.price + '元' + '</div>' +
                '<div class="col-md-3 text-center">' + cartProduct.items.price * cartProduct.inputCount + '元</div>');
              }
            else {
                $('#payList').append('<div class="text-center text-success"><h3>空空如也，去商场转转！</h3></div>');

            }
        });
        $('#payList2').append('<div class="text-center text-info"><h4>总计：' + getTotal(cartProduct) +
            '元</h4></div>' + '<div class="text-center">打印时间：2014年8月3日</div>' +
            '<div class="text-center text-success"><h4>欢迎您下次再来选购！</h4></div>' +
            '<p class="text-center">' +
            '<button class="btn btn-info" id="pay">立即结算<span class="glyphicon glyphicon glyphicon-hand-up"></span></button>' +
            '</p>' );
    }
    else {
        $('#payList').append('<div class="text-center text-success"><h3>空空如也，去商场转转！</h3></div>');
    }

}
