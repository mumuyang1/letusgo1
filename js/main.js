function getItems(){

    return [
        new Item('水果','苹果','3.00','斤'),
        new Item('饮料','香蕉','3.50','斤'),
        new Item('水果','菠萝','4.00','个'),
        new Item('饮料','雪碧','3.00','瓶'),
        new Item('饮料','可口可乐','3.00','瓶'),
        new Item('日常用品','电池','2.00','个'),
        new Item('日常用品','水杯','16.00','个')
    ];
}
var categories = [];

$(document).ready(function() {

    var items = getItems();

    for (var i = 0; i < items.length; i++) {

        if (judgeCategory(items[i].category)) {

            $('#products').append('<div class="panel panel-info">' + '<div class="panel-heading">' +
                '<div class="row">' + '<div class="col-md-3">' + items[i].category + '</div>' + '<div class="col-md-3">单价：</div>' +
                '<div class="col-md-3">单位：</div>' + '<div class="col-md-3">购买：</div>' + '</div>' +
                '</div>' + '<div class="panel-body">' + '<div class="row" id=' + items[i].category + '>' +
                '<div class="col-md-3 form-group">' + items[i].name + '</div>' +
                '<div class="col-md-3 form-group">' + items[i].price + '</div>' +
                '<div class="col-md-3 form-group">' + items[i].unit + '</div>' +
                '<div class="col-md-3 form-group"><button type="button" class="btn btn-primary btn-sm">添加到购物车</button></div>' +
                '</div>' + '</div>' + '</div>');
            categories.push(items[i].category);

        }
        else {
                $('#'+items[i].category+'').append('<div class="col-md-3 form-group">' + items[i].name + '</div>' +
                '<div class="col-md-3 form-group">' + items[i].price + '</div>' +
                '<div class="col-md-3 form-group">' + items[i].unit + '</div>' +
                '<div class="col-md-3 form-group"><button type="button" class="btn btn-primary btn-sm">添加到购物车</button></div>');
        }
    }
 });

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