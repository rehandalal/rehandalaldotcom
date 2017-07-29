import { WINDOW_SCROLLED } from '../actions/scroll';


const INITIAL_STATE = {
  top: 0,
  focus: 'splash',
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WINDOW_SCROLLED:
      return {
        ...state,
        top: action.scrollTop,
        focus: action.focusedSection,
      };

    default:
      return state;
  }
};
