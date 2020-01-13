$ = (e) => {
    return document.querySelector(e);
}
$('a-box').setAttribute('rotation', '0 45 0');


// $('a-box').setAttribute('animation', '');
$('a-box').addEventListener('click', () => {
    var from = $('a-box').getAttribute('rotation').y;
    var animation = $('a-box').getAttribute('animation');
    if (!(animation.property == "rotation")) {
        $('a-box').setAttribute('animation', 'property: rotation;from: 0 ' + from + ' 0 ; to: 0 ' + (360 + from) + ' 0;dur:3000; easing: linear;loop: true ');
        console.log(from);
    }
    else if (animation.property == "rotation") {
        $('a-box').removeAttribute('animation');
        $('a-box').setAttribute('animation', '');
    }
});