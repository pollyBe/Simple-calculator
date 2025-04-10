import { createElement } from './createElement';
import { createCalculatorView } from './createCalculatorUi';

export const createLayout = () => {
  const header = createElement('header', { class: 'header' });
  const themeButton = createElement('button', {
    class: 'theme-button',
    type: 'button',
  });
  header.append(themeButton);

  const main = createElement('main', { class: 'main' });
  main.innerHTML = createCalculatorView();
  const footer = createElement('footer', { class: 'footer' });
  const date = createElement('div', { class: 'date' });
  const currentYear = new Date().getFullYear();
  date.textContent = `${currentYear}`;
  const author = createElement('div', { class: 'author' });
  const authorName = createElement(
    'a',
    { class: 'author-name', href: 'https://github.com/pollyBe' },
    ['Created by Polina Belash']
  );

  author.append(authorName);
  footer.append(date, author);

  const body = document.querySelector('body');

  body.append(header, main, footer);
};
