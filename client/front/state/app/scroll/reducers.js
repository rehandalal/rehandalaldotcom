import { Map } from 'immutable';

import { WINDOW_SCROLL } from 'front/state/action-types';


export default function requests(state = new Map(), action) {
  switch (action.type) {
    case WINDOW_SCROLL:
      return state.set('top', action.scrollTop);

    default:
      return state;
  }
}
