document.addEventListener('DOMContentLoaded', function() {

    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            // const abaAlvo = botao.target.dataset.tabButton; - como o prof fez
            const abaAlvo = botao.target.getAttribute('data-tab-button');
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }
})

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

// document.addEventListener('DOMContentLoaded', function() {
//     const buttons = document.querySelectorAll('[data-tab-button]');
//     const abas = document.querySelectorAll('[data-tab-id]');

//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].addEventListener('click', function() {
//             const index = Array.from(buttons).indexOf(this);

//             escondeTodasAbas();
//             abas[index].classList.add('shows__list--is-active');

//             removeBotaoAtivo();
//             buttons[index].classList.add('shows__tabs__button--is-active');
//         });
//     }
// })

// function removeBotaoAtivo() {
//     const buttons = document.querySelectorAll('[data-tab-button]');
    
//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].classList.remove('shows__tabs__button--is-active');
//     }
// }

// function escondeTodasAbas() {
//     const abas = document.querySelectorAll('[data-tab-id]');

//     for (let i = 0; i < abas.length; i++) {
//         abas[i].classList.remove('shows__list--is-active');
//     }
// }

