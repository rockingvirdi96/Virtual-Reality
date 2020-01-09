$ = (e) => {
    return document.querySelector(e);
}

// }

// animate = () => {
//     requestAnimationFrame(animate);
// }

// requestAnimationFrame(animate);`
$('a-box').setAttribute('rotation', '0 45 0');
$('a-box').addEventListener('click', () => {

    $('a-box').setAttribute('animation', 'property: rotation;from: 0 0 0; to: 0 360 0; dur: 10000; easing: linear;loop: true ');
});