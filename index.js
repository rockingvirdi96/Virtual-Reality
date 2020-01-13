$ = (e) => {
    return document.querySelector(e);
}
$('a-box').setAttribute('rotation', '0 45 0');


// $('a-box').setAttribute('animation', '');
$('a-box').addEventListener('click', () => {
    var from = $('a-box').getAttribute('rotation').y;
    var animation = $('a-box').getAttribute('animation');
    if (!(animation.property == "rotation")) {
        $('a-box').setAttribute('animation', 'property: rotation;from: 0 ' + from + ' 0 ; to: 0 ' + (360 + from) + ' 0;dur:1000; easing: linear;loop: true ');
        console.log(from);
    }
    else if (animation.property == "rotation") {
        $('a-box').removeAttribute('animation');
        $('a-box').setAttribute('animation', '');
    }
});

$('#red-box').addEventListener('click', () => {
    var from = $('#red-box').getAttribute('rotation').y;
    var animation = $('#red-box').getAttribute('animation');
    if (!(animation.property == "rotation")) {
        $('#red-box').setAttribute('animation', 'property: rotation;from:' + from + ' ' + from + ' ' + from + '; to:' + (360 + from) + ' ' + (360 + from) + ' ' + (360 + from) + ';dur:10000; easing: linear;loop: true ');
        console.log($('#red-box').getAttribute('animation'));
    }
    else if (animation.property == "rotation") {
        $('#red-box').removeAttribute('animation');
        $('#red-box').setAttribute('animation', '');
    }
});

$('#blue-box').addEventListener('click', () => {
    var from = $('#blue-box').getAttribute('rotation').y;
    var animation = $('#blue-box').getAttribute('animation');
    if (!(animation.property == "rotation")) {
        $('#blue-box').setAttribute('animation', 'property: rotation;from: 0 0 ' + from + '; to: 0 0 ' + (360 + from) + ';dur:1000; easing: linear;loop: true ');
        console.log(from);
    }
    else if (animation.property == "rotation") {
        $('#blue-box').removeAttribute('animation');
        $('#blue-box').setAttribute('animation', '');
    }
});

$('#green-box').addEventListener('click', () => {
    var from = $('#green-box').getAttribute('rotation').x;
    var animation = $('#green-box').getAttribute('animation');
    if (!(animation.property == "rotation")) {
        $('#green-box').setAttribute('animation', 'property: rotation;from:' + from + ' 0' + ' 0 ; to:' + (360 + from) + ' 0 0; dur: 1000; easing: linear; loop: true');
        console.log(from);
    }
    else if (animation.property == "rotation") {
        $('#green-box').removeAttribute('animation');
        $('#green-box').setAttribute('animation', '');
    }
});