import AI from '~/AI';
import referee from '~/AI/referee.js';

let initialState = {
  storage: [
    /*{
        color: 1 or 2,
        point:{
          x: 0~14,
          y: 0~14,
        }
    }*/
  ],
  situation: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  referee: 'continue',
  message:''

};

export default function view(state = initialState, action) {
  let nextState = lodash.cloneDeep(state);

  switch (action.type) {
    
    case 'game_playing': {
      nextState.storage.push(action.value);
      nextState.situation = placed(nextState.storage);


      switch (referee(nextState.situation)) {
        case 1: { //white win
          nextState.referee = 'userWin';
          nextState.message = '白棋獲勝';
          break;
        }
        case 2: { //black win
          nextState.referee = 'userWin';
          nextState.message = '黑棋獲勝';
          break;
        }
        case -1: { //draw
          nextState.referee = 'draw';
          nextState.message = '平局';
          break;
        }
        default: {//continue
          nextState.referee = 'continue';
          nextState.message = '';
          break;
        }

      }

      if (nextState.referee == 'continue') {
        nextState.storage.push(AI(nextState.situation));
        nextState.situation = placed(nextState.storage);


        switch (referee(nextState.situation)) {
          case 1: { //white win
            nextState.referee = 'AIWin';
            nextState.message = '白棋獲勝';

            break;
          }
          case 2: { //black win
            nextState.referee = 'AIWin';
            nextState.message = '黑棋獲勝';
            break;
          }
          case -1: { //draw
            nextState.referee = 'draw';
            nextState.message = '平局';
            break;
          }
          default: {//continue
            nextState.referee = 'continue';
            nextState.message = '';
            break;
          }

        }

      }


      return nextState;
    }
    case 'game_retract': {

      if(nextState.storage.length > 1)
        nextState.storage.pop();

      if(action.value == 2 && nextState.storage.length % 2 == 1)
        nextState.storage.pop();

      if(action.value == 1 && nextState.storage.length % 2 == 0)
        nextState.storage.pop();

      nextState.situation = placed(nextState.storage);

      switch (referee(nextState.situation)) {
        default: {//continue
          nextState.referee = 'continue';
          nextState.message = '';
          break;
        }
      }

      return nextState;
    }
    case 'game_gameOver': {
      return initialState;
    }
    
    default:
      return nextState;
  }



  function placed(storage) {
    let board = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    for (let i = 0; i < storage.length; i++) {
      const playing = storage[i];


      board[playing.point.x][playing.point.y] = playing.color;
    }


    return board;
  }

  
}