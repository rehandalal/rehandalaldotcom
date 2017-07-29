import { connect } from 'react-redux';

import { scrollWindow } from '../actions/scroll';


function mapStateToProps({ scroll }) {
  return {
    scrollTop: scroll.top,
    focusedSection: scroll.focus,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    scrollWindow: (scrollTop, focusedSection) => dispatch(scrollWindow(scrollTop, focusedSection)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
