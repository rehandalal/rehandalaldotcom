import {
  MAILING_LIST_SUBSCRIBE_REQUESTED, MAILING_LIST_SUBSCRIBE_SUCCESS, MAILING_LIST_SUBSCRIBE_ERROR,
} from '../actions/mailingList';


const INITIAL_STATE = {
  newMember: {
    data: null,
    loading: false,
    error: null,
  },
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MAILING_LIST_SUBSCRIBE_REQUESTED:
      return {
        ...state,
        newMember: {
          data: null,
          loading: true,
          error: null,
        },
      };

    case MAILING_LIST_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        newMember: {
          data: action.member,
          loading: false,
          error: null,
        },
      };

    case MAILING_LIST_SUBSCRIBE_ERROR:
      return {
        ...state,
        newMember: {
          data: null,
          loading: false,
          error: action.error,
        },
      };

    default:
      return state;
  }
};
