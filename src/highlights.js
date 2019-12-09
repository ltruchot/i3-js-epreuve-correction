import $ from 'jquery';
import { rand } from './helpers/array';

// filtrer les bd, en prendre une au hasard et la mettre en avant
export const displayHighlight = (state) => {
  const comics = state.books.filter((book) => book.category === 'bd');
  const dailyComic = rand(comics);
  $(`<span>La bd du jour est: ${dailyComic.title}</span>`).appendTo('header');
};
