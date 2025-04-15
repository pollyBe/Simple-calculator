import { createElement } from './createElement';
import { createCalculatorView } from './createCalculatorUi';

const body = document.querySelector('body');

export const createLayout = () => {
  const header = createElement('header', { class: 'header' });
  const themeButton = createElement(
    'button',
    {
      class: 'theme-button',
      type: 'button',
    },
    ['Light']
  );
  themeButton.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
      themeButton.textContent = 'Dark';
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else {
      themeButton.textContent = 'Light';
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  });
  const historyButton = createElement('button', {
    class: 'history-button',
    type: 'button',
  });
  header.append(themeButton, historyButton);
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

  body.append(header, main, footer);
};
