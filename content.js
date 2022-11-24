// document.getElementsByTagName("body")[0].style.outline = "1px solid #ff00ff";

document.querySelectorAll('body *').forEach(v => v.style.outline = '1px solid red');
console.log('[Outline Viewer]: Outline enabled.');
