let show = function (elem) {
    elem.classList.add('is-visible');
};

let hide = function (elem) {
    elem.classList.remove('is-visible');
};

// Toggle element visibility
let toggle = function (elem) {
    elem.classList.toggle('is-visible');
};

// Listen for click events
document.addEventListener('click', function (event) {

    // Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle')) return;

    // Prevent default link behavior
    event.preventDefault();

    // Get the content
    var content = document.querySelector(event.target.hash);
    if (!content) return;

    // Toggle the content
    toggle(content);

}, false);

// Hela scriptet är taget från https://codepen.io/juliajessicasher/pen/PaZJmv