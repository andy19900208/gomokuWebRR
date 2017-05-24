import { connect } from 'react-redux'
import Menu from '~/components/Menu'

import {hoverOn} from '~/actions/view.js';
import {start} from '~/actions/game.js';

const mapStateToProps = (state, ownProps) => {


  return {
    hovering: state.view.hovering,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     hoverOn: (value) => {
       dispatch(hoverOn(value))
     },
     start: (value) => {
       dispatch(start(value))
     }

     
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)

