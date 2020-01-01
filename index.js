function $(e) {
    return document.querySelector(e);
}

// var camPos = ;
if ($('.camera').getAttribute('position') == '0 0 0') {
    $('.sphere').setAttribute('color', 'blue');
}