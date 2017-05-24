import view from './view.js';
import game from './game.js';

function reducer(state={}, action) {
  return {
    view: view(state.view, action),
    game: game(state.game, action),

  }

}

export default reducer;