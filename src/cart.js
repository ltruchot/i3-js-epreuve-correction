import $ from 'jquery';
import { getStorage } from './storage';

// montrer un panier à jour
export const displayCart = (state) => {
  $('footer').find('button').off('click');
  $('footer').empty().append(`<h2>Mon panier (${state.cart.length} / 3)</h2>`).append(
    state.cart.map((book) => ($(`<div>${book.title} - ${book.author}</div>`))),
    $(`<button ${state.cart.length ? '' : 'disabled'}>Emprunter</button>`).on('click', () => reserveBook(state)),
    $(`<button ${state.cart.length ? '' : 'disabled'}>Annuler</button>`).on('click', () => emptyCart(state)),
  );
};

// ajourter au panier et le rafraichir
export const addToCart = (state, item) => {
  state.cart = [...state.cart, item];
  displayCart(state);
};

// vider le panier et le rafraichir
export const emptyCart = (state) => {
  state.cart = [];
  $('main button').prop('disabled', false);
  displayCart(state);
};

// afficher et mémoriser la phrase d'emprunt
export const reserveBook = (state) => {
  const now = new Date();
  const h = new Date(new Date().setHours(now.getHours() + 2));
  const j = h.getDate() === now.getDate() ? "aujourd'hui" : 'demain';
  const phrase = `Vos ${state.cart.length} livre(s) sont empruntés.<br /> 
  Vous pouvez passer les chercher ${j}, 
  à partir de ${h.getHours()}h${h.getMinutes()}`;

  window.localStorage.setItem('reserved', phrase);

  $('body').empty().append(getStorage());
};
