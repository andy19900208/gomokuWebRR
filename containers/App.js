import { connect } from 'react-redux';
import App from '~/components/App.js';



const mapStateToProps = (state, ownProps) => {

  return {
    act: state.view.act,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // changeAct: (value) => {
    //   dispatch(changeAct(value))
    // }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)