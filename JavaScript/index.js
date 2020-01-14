$ = (e) => {
    return document.querySelector(e);
}
var y = 0;
var x = 2;
var ex = 0;
var vy = 0;

function animate() {
    ex = x - 0.01;
    vy = y + 0.02;

    $('#mercury').setAttribute('animation', 'property: position; from:' + x + ' 15 ' + y + '; to:' + ex + ' 15 ' + vy + '; dur: 10000;easing:linear');
    console.log(x + ",Y," + y + ", to: " + ex + ",Z," + vy);
    x = ex;
    y = vy;

}
function revolve() {
    setInterval(animate, 100);
}
$('#sun').addEventListener('click', () => { revolve() });