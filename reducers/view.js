
let initialState = {
  act: 'menu',
  hovering: null,

};

export default function view(state = initialState, action) {
  let nextState = lodash.cloneDeep(state);

  switch (action.type) {

    case 'game_start': {

      nextState.act = 'board';

      return nextState;
    }

    case 'game_gameOver': {

      nextState.act = 'menu';

      return nextState;
    }

    case 'view_hoverOn': {
      nextState.hovering = action.value;

      return nextState;
    }

    

    default:
      return state
  }
}
