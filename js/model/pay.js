/**
 * Created by liyanzi on 14-8-16.
 */
$(document).ready(function(){
        var cartSums = JSON.parse(localStorage.getItem('cartSum'));
        $('#cartItemSum').text(cartSums);
});

//function showPayList(){
//
//    print='';
//    print+=';'
//
//}
