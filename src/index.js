import $ from 'jquery';
import { books } from './data/books';
import { displayCart } from './cart';
import { displayBooks } from './books';
import { displayHighlight } from './highlights';
import { getStorage } from './storage';

// la fonction qui lance l'app
const main = () => {
  const state = {
    highlight: null,
    books,
    cart: [],
  };

  $(`<h1>Book en stock</h1>
    <header></header>
    <main></main>
    <footer></footer>`).appendTo('body');

  displayBooks(state);
  displayHighlight(state);
  displayCart(state);
};

const reservedPhrase = window.localStorage.getItem('reserved');
if (reservedPhrase) {
  // Si le local storage est plein, montrer la phase et le bouton
  $('body').append(getStorage());
} else {
  // Sinon lancer l'app
  main();
}
