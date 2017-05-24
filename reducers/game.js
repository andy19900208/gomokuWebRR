import board from './board.js';

let initialState = {
  color: {
    user: null,
    AI: null
  },
  record: {
    user: 0,
    AI: 0
  },

};

export default function view(state = initialState, action) {
  let nextState = lodash.cloneDeep(state);

  nextState.board = board(state.board, action);

  switch (action.type) {

    case 'game_start': {

      switch (action.value) {

        case 'b': {
          nextState.color = { user: 'b', AI: 'w' };
          break;
        }
        case 'w': {
          nextState.color = { user: 'w', AI: 'b' };
          break;
        }
        default: {
          if (Math.floor((Math.random() * 2)) == 0) {
            nextState.color = { user: 'b', AI: 'w' };
          }
          else {
            nextState.color = { user: 'w', AI: 'b' };
          }
          break;
        }

      }

      if (nextState.color.AI == 'b') {
        nextState.board.storage.push({color:2, point:{x:7, y:7}});
        nextState.board.situation[7][7]=2;
      };

      return nextState;
    }
    case 'game_gameOver': {

      nextState.color = { user: null, AI: null };
      if (action.value) {
        nextState.record[action.value]++;
      }

      return nextState;
    }
    default:
      return nextState;
  }

}
