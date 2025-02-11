const botaoAvaliacao = document.querySelectorAll('.rating button');
const card = document.querySelector('.card');
const cardRatingSubmit = document.querySelector('.cardRatingSubmit');
const submitButton = document.getElementsByClassName('submit');
const rating = document.getElementById('rating');
const warning = document.getElementById('warning');
let avalicao = 0;

botaoAvaliacao.forEach((botao) => {
    botao.addEventListener('click', (e) => {
        e.preventDefault();
        avalicao = e.target.innerHTML;
        warning.style.visibility = 'visible';
        warning.innerHTML = `You chose ${avalicao} out of 5`;

    })
})

submitButton[0].addEventListener('click', () => {
    if (avalicao === 0) {
        warning.style.visibility = 'visible';
        warning.innerHTML = 'Please select a rating';
        return;
    }
    
    card.style.display = 'none';
    cardRatingSubmit.style.display = 'flex';
    rating.innerHTML = `You selected ${avalicao} out of 5`;

})