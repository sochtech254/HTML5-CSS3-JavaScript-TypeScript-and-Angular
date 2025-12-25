// Event propagation

// try changing all false values to true

window.addEventListener('click', function() {
    console.log('Window');
}, false);

window.addEventListener('click', function() {
    console.log('Document');
}, false);

document.querySelector('.div2').addEventListener('click', function(e) {
    e.stopPropagation();    // try working it out without this stopPropagation()
    console.log('DIV 2');
}, {once: true});

document.querySelector('.div1').addEventListener('click', function() {
    console.log('DIV 1');
}, false);

document.querySelector('button').addEventListener('click', function(e) {
    console.log(e.target.innerText = 'clicked!');
}, false);