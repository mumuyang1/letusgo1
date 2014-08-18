/**
 * Created by liyanzi on 14-8-15.
 */
$(document).ready(function(){

    var cartSums = JSON.parse(localStorage.getItem('cartSum'));
    $('#cartItemSum').text(cartSums);
    showCartList();

    $('.addButton').on('click',function(){
        var id = $(this).closest('.form-inline').find('.inputNum')[0].id;
      //  console.log(id);
        addButton(id);
        getNewMoney();
    });

    $('.reduceButton').on('click',function(){
        var id = $(this).closest('.form-inline').find('.inputNum')[0].id;
        reduceButton(id);
        getNewMoney();
    });

    $('.deleteButton').on('click',function(){
//        console.log($(this)[0].id);
//        console.log($(this).closest('.row')+"--------------------");

        var id = $(this).closest('.row').find('input')[0].id;
        deleteButton(id);
        getNewMoney();

    });

    getSum();
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
        if(cartProduct.inputCount > 0) {
            if (judgeCategory(cartProduct.items.category)) {
                categories.push(cartProduct.items.category);
                $('#cartList').append('<div class="panel panel-warning"><div class="panel-heading">' +
                    '<div class="row text-center">' +
                    '<div class="col-md-2">' + cartProduct.items.category + '</div>' +
                    '<div class="col-md-2">单价</div>' +
                    '<div class="col-md-2">单位</div>' +
                    '<div class="col-md-3">数量</div>' +
                    '<div class="col-md-2">移出购物车</div>' +
                    '<div class="col-md-1">小计</div>' +
                    '</div></div>' +
                    '<div class="panel-body"id="' + cartProduct.items.category + '">' +
                    '<div class="row text-center">' +
                    '<div class="col-md-2 form-group">' + cartProduct.items.name + '</div>' +
                    '<div class="col-md-2 form-group">' + cartProduct.items.price + '</div>' +
                    '<div class="col-md-2 form-group">' + cartProduct.items.unit + '</div>' +
                    '<div class="col-md-3 form-group form-inline ">' +
                    '<button class="addButton">+</button>' +
                    '<input class="inputNum" id="' + cartProduct.items.barcode + '" type="text">' +
                    '<button class="reduceButton">-</button></div>' +
                    '<div class="col-md-2 form-group"><button id="' + cartProduct.items.barcode + '" class="deleteButton">移除</button></div>' +
                    '<div id="' + 'button' + cartProduct.items.barcode + '" class="col-md-1">' + cartProduct.items.price * cartProduct.inputCount + '元' +
                    '</div></div></div></div>');
            }
            else {
                $('#' + cartProduct.items.category + '').append(
                    '<div class="row text-center" id="' + cartProduct.items.category + '">' +
                    '<div class="col-md-2 form-group">' + cartProduct.items.name + '</div>' +
                    '<div class="col-md-2 form-group">' + cartProduct.items.price + '</div>' +
                    '<div class="col-md-2 form-group">' + cartProduct.items.unit + '</div>' +
                    '<div class="col-md-3 form-group form-inline">' +
                    '<button class="addButton">+</button>' +
                    '<input class="inputNum" id="' + cartProduct.items.barcode + '" type="text" value="">' +
                    '<button class="reduceButton">-</button></div>' +
                    '<div class="col-md-2 form-group"><button id="' + cartProduct.items.barcode + '"class="deleteButton">移除</button></div>' +
                    '<div id="' + 'button' + cartProduct.items.barcode + '" class="col-md-1">' + cartProduct.items.price * cartProduct.inputCount +
                    '元</div></div>');
            }
        }
        });
        $('#cartItemBottom').append('<p id="total" class="text-center">总计：'+getTotal(cartProduct)+'元</p>'+
            '<p class="text-center"><a class="btn btn-primary btn-lg" role="button" href="pay.html">去结算>></a></p>');
}

function judgeCategory(category){

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

function getSum() {

    var nums = JSON.parse(localStorage.getItem('cartProduct'));
    _.forEach(nums, function (nums) {
       $("#"+nums.items.barcode).val(nums.inputCount);
//       console.log(nums.items.name+nums.inputCount);
    });

}


function addButton(id){
//    console.log(id);
    var cartItems = JSON.parse(localStorage.getItem('cartProduct'));
    var cartSums = JSON.parse(localStorage.getItem('cartSum'));
    if(!cartItems){
        cartItems = [];
    }
    for(var i = 0; i < cartItems.length; i++) {
        if (id === cartItems[i].items.barcode) {
            cartItems[i].inputCount += 1;
            cartSums += 1;
            $('#'+ id).val( cartItems[i].inputCount);
            $('#cartItemSum').text(cartSums);
        }
    }
    localStorage.setItem('cartProduct',JSON.stringify(cartItems));
    localStorage.setItem('cartSum',JSON.stringify(cartSums));
}


function reduceButton(id) {

    var cartItems = JSON.parse(localStorage.getItem('cartProduct'));
    var cartSums = JSON.parse(localStorage.getItem('cartSum'));
    if (!cartItems) {
        cartItems = [];
    }
    for (var i = 0; i < cartItems.length; i++) {
        if (id === cartItems[i].items.barcode) {

            if (cartItems[i].inputCount > 1) {
                cartItems[i].inputCount -= 1;
                cartSums -= 1;
                $('#' + id).val(cartItems[i].inputCount);
                $('#cartItemSum').text(cartSums);
           }
        }
    }
    localStorage.setItem('cartProduct', JSON.stringify(cartItems));
    localStorage.setItem('cartSum', JSON.stringify(cartSums));
}

function getNewMoney(){

    var cartItems = JSON.parse(localStorage.getItem('cartProduct'));
    var total = 0;
        _.forEach(cartItems, function(cartItems){
            $('#'+'button'+cartItems.items.barcode).text(cartItems.items.price * cartItems.inputCount);
           total += cartItems.items.price * cartItems.inputCount;
           $('#total').text(total);
        });
}

function deleteButton(id){

    var cartItems = JSON.parse(localStorage.getItem('cartProduct'));
    var cartSums = JSON.parse(localStorage.getItem('cartSum'));
    if(!cartItems){
        cartItems = [];
    }
    for(var i = 0; i < cartItems.length; i++) {
        if (id === cartItems[i].items.barcode) {
            cartSums = cartSums - cartItems[i].inputCount ;
            cartItems[i].inputCount = 0;

            $('#'+ id).val( cartItems[i].inputCount);
            $('#cartItemSum').text(cartSums);
        }
    }
    localStorage.setItem('cartProduct',JSON.stringify(cartItems));
    localStorage.setItem('cartSum',JSON.stringify(cartSums));
  }
