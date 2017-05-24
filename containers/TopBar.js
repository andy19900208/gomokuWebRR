import { connect } from 'react-redux'
import TopBar from '~/components/TopBar.js'

const mapStateToProps = (state, ownProps) => {
  return {
     color: state.game.color,
     record: state.game.record,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // propName: () => {
    //   dispatch(value(ownProps))
    // }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar)

