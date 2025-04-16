import './style.scss';
import { createLayout } from './app/createLayout';
import './app/./calcListeners';

const body = document.querySelector('body');
body.classList.add('light-theme');
createLayout();
