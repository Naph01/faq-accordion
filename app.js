const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.btn-minus');
const texts = document.querySelectorAll('.ans');

for(let i = 0; i < plus.length; i++) {
     plus[i].addEventListener('click', () => {
        plus[i].classList.toggle('hidden');
        minus[i].classList.toggle('hidden');
        texts[i].classList.toggle('hidden');
     })
}

for(let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', () => {
       plus[i].classList.toggle('hidden');
       minus[i].classList.toggle('hidden');
       texts[i].classList.toggle('hidden');
    })
}