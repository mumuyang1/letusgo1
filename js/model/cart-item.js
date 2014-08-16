function CartItems(items,inputCount){

    this.items = items;
    this.inputCount = inputCount;
    this.subtotal = 0;
    this.total = 0;
}
//
//CartItems.prototype.getSubtotal = function(){
//
//    this.subtotal = this.inputCount*this.items.price;
//    return this.subtotal;
//};
////
////CartItems.prototype.total = function(){
////
////    _.forEach(this.subtotal,function(this.subtotal){
////
////        this.total += this.subtotal;
////    });
////
////    return this.total;
////
////}
//
//var category = [];
//CartItems.prototype.showCartList(){
//    var cartItems = getItems();
////    localStorage.setItem('allItems', JSON.stringify(getItems()));
//    for (var i = 0; i < items.length; i++) {
//        if (judgeCategory(CartItems[i].category)) {
//            categories.push(CartItems[i].category);
//            $('#CartList').append('<div class="panel panel-warning">'+'<div class="panel-heading">'+
//                '<div class="row text-center">'+'<div class="col-md-2">分类</div>'+
//                '<div class="col-md-2">单价</div>'+'<div class="col-md-2">单位</div>'+
//                '<div class="col-md-3">数量</div>'+'<div class="col-md-2">移出购物车</div>'+
//                '<div class="col-md-1">小计</div>'+'</div>'+'</div>'+
//                '<div class="panel-body">'+'<div class="row text-center" id="Cartitems[i].category">'+
//                '<div class="col-md-2">'+苹果+'</div>'+'<div class="col-md-2">'+5.00元+'</div>'+
//            '<div class="col-md-2">'+斤+'</div>'+
//            '<div class="col-md-3 form-inline form-group">'+
//            '<button>+</button>'+'<input type="text" value="1">'+'<button>-</button>'+
//            '</div>'+'<div class="col-md-2">'+'<button>移除</button>'+'</div>'+
//            '<div class="col-md-1">'+3.00元+'</div>'+'</div>'+'</div>'+'</div>');
//        }
//        else {
//            $('#'+ CartItems[i].category+'').append('<div class="col-md-2">'+苹果+'</div>'+
//                '<div class="col-md-2">'+5.00元+'</div>'+'<div class="col-md-2">'+斤+'</div>'+
//            '<div class="col-md-3 form-inline form-group">'+
//            '<button>+</button>'+'<input type="text" value="1">'+'<button>-</button>'+
//            '</div>'+'<div class="col-md-2">'+'<button>移除</button>'+'</div>'+'<div class="col-md-1">'+3.00元+'</div>');
//        }
//    }
//    $('#cartItemBottom').append('<p class="text-center">总计：'+this.total+'元</p>'+
//        '<p class="text-center">'+'<a class="btn btn-primary btn-lg" role="button" href="pay.html">去结算>></a></p>');
//
//}
//
//function judgeCategory(category){
//    if(categories.length == 0){
//        return true;
//    }
//    else {
//        for (var j = 0; j < categories.length; j++) {
//            if (category === categories[j]){
//                return false;
//            }
//        }
//        return true;
//    }
//}