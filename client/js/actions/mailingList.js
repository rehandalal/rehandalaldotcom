import apiFetch from '../utils/apiFetch';


export const MAILING_LIST_SUBSCRIBE_REQUESTED = 'MAILING_LIST_SUBSCRIBE_REQUESTED';
export const MAILING_LIST_SUBSCRIBE_SUCCESS = 'MAILING_LIST_SUBSCRIBE_SUCCESS';
export const MAILING_LIST_SUBSCRIBE_ERROR = 'MAILING_LIST_SUBSCRIBE_ERROR';

export const MAILING_LIST_UPDATE_DETAILS_REQUESTED = 'MAILING_LIST_UPDATE_DETAILS_REQUESTED';
export const MAILING_LIST_UPDATE_DETAILS_SUCCESS = 'MAILING_LIST_UPDATE_DETAILS_SUCCESS';
export const MAILING_LIST_UPDATE_DETAILS_ERROR = 'MAILING_LIST_UPDATE_DETAILS_ERROR';


function requestSubscribe() {
  return {
    type: MAILING_LIST_SUBSCRIBE_REQUESTED,
  };
}

function subscribeSuccess(member) {
  return {
    type: MAILING_LIST_SUBSCRIBE_SUCCESS,
    member,
  };
}

function subscribeError(error) {
  return {
    type: MAILING_LIST_SUBSCRIBE_ERROR,
    error,
  };
}

function requestUpdateDetails() {
  return {
    type: MAILING_LIST_UPDATE_DETAILS_REQUESTED,
  };
}

function updateDetailsSuccess(member) {
  return {
    type: MAILING_LIST_UPDATE_DETAILS_SUCCESS,
    member,
  };
}

function updateDetailsError(error) {
  return {
    type: MAILING_LIST_UPDATE_DETAILS_ERROR,
    error,
  };
}

export function subscribeToMailingList(email) {
  return dispatch => {
    dispatch(requestSubscribe());

    const options = {
      method: 'POST',
      data: {
        email,
      },
    };

    return apiFetch('mailing_list/subscribe/', options)
      .then(member => dispatch(subscribeSuccess(member)))
      .catch(error => dispatch(subscribeError(error)));
  };
}

export function updateMemberDetails(data) {
  return dispatch => {
    dispatch(requestUpdateDetails());

    const options = {
      method: 'POST',
      data,
    };

    return apiFetch('mailing_list/update_details/', options)
      .then(member => dispatch(updateDetailsSuccess(member)))
      .catch(error => dispatch(updateDetailsError(error)));
  };
}
