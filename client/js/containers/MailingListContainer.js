import { connect } from 'react-redux';

import { subscribeToMailingList } from '../actions/mailingList';


function mapStateToProps({ mailingList }) {
  return {
    newMember: mailingList.newMember,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    subscribeToMailingList: email => dispatch(subscribeToMailingList(email)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
