$(document).ready(function(){

    showAllItemsList();
    var cartSum = 0;
    $('.add').on('click',function(){
       addCart($(this)[0].id);
        cartSum += 1;
        localStorage.setItem('cartSum',JSON.stringify(cartSum));
        var cartSums = JSON.parse(localStorage.getItem('cartSum'));

        $('#cartItemSum').text(cartSums);
    });
});

function showAllItemsList(){
    var items = getItems();

    for(var i = 0; i < items.length; i++) {
        $('#productList').append(
            '<div class="col-md-3 form-group text-danger">' + items[i].category + '</div>' +
            '<div class="col-md-2 form-group text-warning">' + items[i].name + '</div>' +
            '<div class="col-md-2 form-group text-info">' + items[i].price + '</div>' +
            '<div class="col-md-2 form-group text-success">' + items[i].unit + '</div>' +
            '<div class="col-md-3 form-group"><button id="' + items[i].barcode +
            '" type="button" class="btn btn-primary btn-sm add">添加到购物车</button></div>' +
            '</div>' + '</div>' + '</div>')
    }
}
