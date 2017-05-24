import { connect } from 'react-redux'
import Board from '~/components/Board'

import { hoverOn } from '~/actions/view.js';
import { playing, retract, gameOver } from '~/actions/game.js';

const mapStateToProps = (state, ownProps) => {
  return {
    hovering: state.view.hovering,
    board: state.game.board,
    color: state.game.color.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hoverOn: (value) => {
      dispatch(hoverOn(value))
    },
    playing: (value) => {
      dispatch(playing(value))
    },
    retract: (value) => {
      dispatch(retract(value))
    },
    goMenu: (value) => {
      dispatch(gameOver(value))
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

