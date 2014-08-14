function getItems (){

    return [
        new Item('水果','苹果','3.00','斤'),
        new Item('水果','香蕉','3.50','斤'),
        new Item('水果','菠萝','4.00','个'),
        new Item('饮料','雪碧','3.00','瓶'),
        new Item('饮料','可口可乐','3.00','瓶'),
        new Item('日常用品','电池','2.00','个'),
        new Item('日常用品','水杯','16.00','个')
    ];
}

$(document).ready(function(){

    var items = getItems();

    for(var i = 0; i < items.length; i++){

//        if(items.catagory === )

      $('#fruitList')
     .append('<div class="col-md-3 form-group">'+items[i].name+'</div>'+
     '<div class="col-md-3 form-group">'+items[i].price+'</div>'+
     '<div class="col-md-3 form-group">'+items[i].unit+'</div>'
     +'<div class="col-md-3 form-group"><button type="button"class="btn btn-primary btn-sm">添加到购物车</button></div>');


    }



});