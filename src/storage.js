import $ from 'jquery';

// retourn les éléments de la page en cas de local storage
export const getStorage = () => {
  const btn = $('<button>Annuler la commande</button>').on('click', () => {
    window.localStorage.clear();
    window.location.reload();
  });
  return $('<div />').append(window.localStorage.getItem('reserved'), $('<br />'), btn);
};
