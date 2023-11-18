let btnclear = document.querySelector('button ');
let textarea = document.querySelectorAll('textarea');

btnclear.addEventListener('click', () =>  {
    textarea.forEach(textarea => textarea.value = '');

});