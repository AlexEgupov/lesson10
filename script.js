'use scrict';

const book = document.querySelectorAll('.book');
const books = document.querySelector('.books');
const body = document.querySelector('body');
const adv = document.querySelector('.adv');
const chapterThree = book[4].querySelector('a');
const chapterFive = book[5].querySelectorAll('li');
const chapterSix = book[2].querySelectorAll('li');

books.prepend(book[1]);
books.append(book[2]);
book[3].before(book[4]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

chapterThree.textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

chapterFive[4].insertAdjacentElement('afterend', chapterFive[2]);
chapterFive[3].insertAdjacentElement('beforebegin', chapterFive[9]);
chapterFive[8].insertAdjacentElement('beforebegin', chapterFive[5]);

chapterSix[9].insertAdjacentHTML('beforebegin',
    '<li>Глава 8: За пределами ES6</li>');
