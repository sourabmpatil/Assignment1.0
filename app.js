const input = document.querySelector('#txt');
const addButton = document.querySelector('.btn-list');
const list = document.querySelector('.main ul');
console.log(input);
addButton.addEventListener('click', (e) => {

    if (input.value != "") {
        e.preventDefault();

        const myLi = document.createElement('li');
        myLi.innerHTML = input.value;
        list.appendChild(myLi);

        const mySpan = document.createElement('span');
        mySpan.innerHTML = 'X';
        myLi.appendChild(mySpan);
    }
    close();
    input.value = "";
});
function close(){
    const close = document.querySelectorAll('span');
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', () => {
            close[i].parentElement.style.display = "none";
        })
    }
}
close();
