function getItems(){

    var allItems =  [
        new Item('ITEM000001','水果','苹果','3.00','斤'),
        new Item('ITEM000002','水果','香蕉','3.50','斤'),
        new Item('ITEM000003','水果','菠萝','4.00','个'),
        new Item('ITEM000004','饮料','雪碧','3.00','瓶'),
        new Item('ITEM000005','饮料','可口可乐','3.00','瓶'),
        new Item('ITEM000006','日常用品','电池','2.00','个'),
        new Item('ITEM000007','日常用品','水杯','16.00','个')
    ];

    return allItems;
}


//function
//var categories = [];
//
//$(document).ready(function() {
//
//
//
//    var cartItemSum = 0;
//    var items = getItems();
//    localStorage.setItem('allItems', JSON.stringify(getItems()));
//    for (var i = 0; i < items.length; i++) {
//        if (judgeCategory(items[i].category)) {
//            categories.push(items[i].category);
//            $('#products').append('<div class="panel panel-info">' + '<div class="panel-heading">' +
//                '<div class="row">' + '<div class="col-md-3">' + items[i].category + '</div>' + '<div class="col-md-3">单价</div>' +
//                '<div class="col-md-3">单位</div>' + '<div class="col-md-3">购买</div>' + '</div>' +
//                '</div>' + '<div class="panel-body">' + '<div class="row" id=' + items[i].category + '>' +
//                '<div class="col-md-3 form-group text-danger">' + items[i].name + '</div>' +
//                '<div class="col-md-3 form-group text-info">' + items[i].price + '</div>' +
//                '<div class="col-md-3 form-group text-success">' + items[i].unit + '</div>' +
//                '<div class="col-md-3 form-group"><button id="'+items[i].barcode+'" type="button" class="btn btn-primary btn-sm">添加到购物车</button></div>' +
//                '</div>' + '</div>' + '</div>');
//        }
//        else {
//            $('#' + items[i].category + '').append('<div class="col-md-3 form-group">' + items[i].name + '</div>' +
//                '<div class="col-md-3 form-group">' + items[i].price + '</div>' +
//                '<div class="col-md-3 form-group">' + items[i].unit + '</div>' +
//                '<div class="col-md-3 form-group"><button  type="button" id="'+items[i].barcode+'" class="btn btn-primary btn-sm">添加到购物车</button></div>');
//        }
//        $('#'+items[i].barcode+'').on('click', function(){
//               cartItemSum++;
//
//            $('#cartItemSum').text(cartItemSum);
//            $('#cartItemSumIndex').text(cartItemSum);
//            $('#cartItemSumCart').text(cartItemSum);
//            $('#cartItemSumPay').text(cartItemSum);
//        }
//    );
//   }
//});
//
//$(document).ready(function(){
//    var CartItems = getItems();
//    localStorage.setItem('allItems', JSON.stringify(getItems()));
//    for (var i = 0; i < items.length; i++) {
//        if (judgeCategory(CartItems[i].category)) {
//           categories.push(CartItems[i].category);
//            $('#CartList').append('<div class="panel panel-warning">'+'<div class="panel-heading">'+
//             '<div class="row text-center">'+'<div class="col-md-2">分类</div>'+
//             '<div class="col-md-2">单价</div>'+'<div class="col-md-2">单位</div>'+
//             '<div class="col-md-3">数量</div>'+'<div class="col-md-2">移出购物车</div>'+
//             '<div class="col-md-1">小计</div>'+'</div>'+'</div>'+
//             '<div class="panel-body">'+'<div class="row text-center" id="Cartitems[i].category">'+
//             '<div class="col-md-2">'+苹果+'</div>'+'<div class="col-md-2">'+5.00元+'</div>'+
//             '<div class="col-md-2">'+斤+'</div>'+
//             '<div class="col-md-3 form-inline form-group">'+
//             '<button>+</button>'+'<input type="text" value="1">'+'<button>-</button>'+
//             '</div>'+'<div class="col-md-2">'+'<button>移除</button>'+'</div>'+
//             '<div class="col-md-1">'+3.00元+'</div>'+'</div>'+'</div>'+'</div>');
//        }
//        else {
//            $('#'+ CartItems[i].category+'').append('<div class="col-md-2">'+苹果+'</div>'+
//            '<div class="col-md-2">'+5.00元+'</div>'+'<div class="col-md-2">'+斤+'</div>'+
//            '<div class="col-md-3 form-inline form-group">'+
//            '<button>+</button>'+'<input type="text" value="1">'+'<button>-</button>'+
//            '</div>'+'<div class="col-md-2">'+'<button>移除</button>'+'</div>'+'<div class="col-md-1">'+3.00元+'</div>');
//            }
//         }
//    $('#cartItemBottom').append('<p class="text-center">总计：'+1.00+'元</p>'+
//        '<p class="text-center">'+'<a class="btn btn-primary btn-lg" role="button" href="pay.html">去结算>></a></p>');
//});
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

