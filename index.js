function $(e) {
    return document.querySelector(e);
}

// var color = $('.sphere').getAttribute('color');
$('.camera').onchange = function () {


    var pos = $('.camera').getAttribute('position');
    // alert(color);
    if (pos.x > 5) {
        $('.sphere').setAttribute('color', 'blue');
        alert(pos.x);
    }
}
// }