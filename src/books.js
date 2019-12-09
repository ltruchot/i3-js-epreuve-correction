import $ from 'jquery';
import { addToCart } from './cart';

export const displayBooks = (state) => {
  // preparer les elements
  const elBooks = state.books.map((book) => {
    const elSection = $(`
        <section>
          <img src="${book.image || '/assets/images/book-default.png'}" />
          <div>
            <h3>${book.title} - ${book.author}</h3>
            <h4>Catégorie: ${book.category}</h4>
            <p>${book.summary || 'Pas de description disponible.'}</p>
          </div>
        </section>
      `);
      // leur ajouter un bouton de réservation
    const elBtn = $('<button>Réserver</button>')
      .on('click', () => (state.cart.length < 3
        ? elBtn.prop('disabled', true) && addToCart(state, book)
        : alert('3 livres maximum.')
      ));
    elSection.find('div').append(elBtn);
    return elSection;
  });

  // les mettres dans le DOM
  $('main').append(elBooks);
};
