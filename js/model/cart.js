/**
 * Created by liyanzi on 14-8-15.
 */

/**
 * Created by liyanzi on 14-8-15.
 */
$(document).ready(function(){

    var cartSums = JSON.parse(localStorage.getItem('cartSum'));
    $('#cartItemSum').text(cartSums);
    showCartList();
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

var categories = [];

function showCartList(){

    var cartProduct = JSON.parse(localStorage.getItem('cartProduct'));

    _.forEach(cartProduct, function (cartProduct){
        if (judgeCategory(cartProduct.items.category)) {
            categories.push(cartProduct.items.category);
            $('#cartList').append('<div class="panel panel-warning">' + '<div class="panel-heading">' +
                '<div class="row text-center">' + '<div class="col-md-2">'+cartProduct.items.category+'</div>' +
                '<div class="col-md-2">单价</div>' + '<div class="col-md-2">单位</div>' +
                '<div class="col-md-3">数量</div>' + '<div class="col-md-2">移出购物车</div>' +
                '<div class="col-md-1">小计</div>' + '</div>' + '</div>' +
                '<div class="panel-body">' + '<div class="row text-center" id="' + cartProduct.items.category + '">' +
                '<div class="col-md-2">' + cartProduct.items.name + '</div>' + '<div class="col-md-2">' + cartProduct.items.price + '</div>' +
                '<div class="col-md-2">' + cartProduct.items.unit + '</div>' +
                '<div class="col-md-3 form-inline form-group">' +
                '<button>+</button>' + '<input type="text" value="1">' + '<button>-</button>' +
                '</div>' + '<div class="col-md-2">' + '<button>移除</button>' + '</div>' +
                '<div class="col-md-1">' + cartProduct.items.price * cartProduct.inputCount + '元' + '</div>' + '</div>' + '</div>' + '</div>');
        }
        else {
            $('#'+cartProduct.items.category+'').append(
                '<div class="row text-center"></div>'+
                '<div class="col-md-2">' + cartProduct.items.name + '</div>' + '<div class="col-md-2">' + cartProduct.items.price + '</div>' +
                '<div class="col-md-2">' + cartProduct.items.unit + '</div>' +
                '<div class="col-md-3 form-inline form-group">' +
                '<button>+</button>' + '<input type="text" value="1">' + '<button>-</button>' +
                '</div>' + '<div class="col-md-2">' + '<button>移除</button>' + '</div>' +
                '<div class="col-md-1">' + cartProduct.items.price * cartProduct.inputCount +
                '元' + '</div>' + '</div>' + '</div>' + '</div>');
              }
        });
        $('#cartItemBottom').append('<p class="text-center">总计：'+getTotal(cartProduct)+'元</p>'+
            '<p class="text-center">'+'<a class="btn btn-primary btn-lg" role="button" href="pay.html">去结算>></a></p>');
}
function judgeCategory(category){
    console.log(categories.length);
    if(categories.length == 0){
        return true;
    }
    else {

        for (var j = 0; j < categories.length; j++) {
            if (category === categories[j]){
                return false;
            }
        }
        return true;
    }
}

function getTotal(cartProduct){

    var total = 0;
    _.forEach(cartProduct,function(cartProduct){

        total += cartProduct.items.price * cartProduct.inputCount;
    });

    return total;
}