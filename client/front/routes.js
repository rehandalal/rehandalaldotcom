import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { routerForBrowser } from 'redux-little-router';


const routes = {
  '/': {
    component: <div />,
    crumb: 'Home',
  },
};


export const {
  reducer,
  middleware,
  enhancer,
} = routerForBrowser({
  routes,
});


@connect(state => ({
  router: state.router,
}))
export default class Router extends React.Component {
  static propTypes = {
    router: PropTypes.object.isRequired,
  };

  render() {
    const { router } = this.props;
    const content = router.route ? <router.result.component /> : <div className="missing" />;
    return <div>{content}</div>;
  }
}
