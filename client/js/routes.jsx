import React from 'react';
import { Route } from 'react-router';

import Page from './components/Page.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';


export default (
  <Route path="/" component={Page}>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
