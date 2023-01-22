let modalMain = document.querySelector('#modal_main')
let modalClose = document.querySelectorAll('div.modal__close')
let modalSuccess = document.querySelector('#modal_success')
let modalBtn = document.querySelector('a.show-success')

// console.log(modalClose);

modalMain.className = 'modal modal_active'

modalClose[0].onclick = () => {
    modalMain.className = 'modal'
}

modalClose[1].onclick = () => {
    modalSuccess.className = 'modal'
    modalMain.className = 'modal'
}

modalBtn.onclick = () => {
    modalSuccess.className = 'modal modal_active'
    modalMain.className = 'modal'

}