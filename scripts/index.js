let style = window.getComputedStyle(document.body);
let root = document.documentElement;
document.getElementById('darkMode').addEventListener('click',function(){
    var bgColor = style.getPropertyValue('--bg-color');
    var fontColor = style.getPropertyValue('--font-color');
    root.style.setProperty('--bg-color', bgColor.trim()=='white'? 'black':'white');
    root.style.setProperty('--font-color', fontColor.trim()=='white'? 'black':'white');
    this.innerHTML = this.innerHTML=="light mode"? "dark mode": "light mode";
});