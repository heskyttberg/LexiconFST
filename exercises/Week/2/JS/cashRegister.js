function check(){
    const qty1 = document.querySelector('.qty1');
    qty1.textContent=qty1;
    global.textContent=pinFromJS;

}

function init(){
    window['pinFromJS'] = 'test';
    submit.addEventListener("click", check)
    global.textContent=pinFromJS;
}




