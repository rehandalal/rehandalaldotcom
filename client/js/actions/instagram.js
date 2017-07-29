import apiFetch from '../utils/apiFetch';


export const INSTAGRAM_FEED_REQUESTED = 'INSTAGRAM_FEED_REQUESTED';
export const INSTAGRAM_FEED_SUCCESS = 'INSTAGRAM_FEED_SUCCESS';
export const INSTAGRAM_FEED_ERROR = 'INSTAGRAM_FEED_ERROR';


function requestInstagramFeed() {
  return {
    type: INSTAGRAM_FEED_REQUESTED,
  };
}

function instagramFeedReceived(feed) {
  return {
    type: INSTAGRAM_FEED_SUCCESS,
    feed,
  };
}

function instagramFeedError(error) {
  return {
    type: INSTAGRAM_FEED_ERROR,
    error,
  };
}

export function fetchInstagramFeed() {
  return dispatch => {
    dispatch(requestInstagramFeed());

    const options = {
      method: 'GET',
    };

    return apiFetch('instagram_feed/', options).then(([ok, data]) => {
      dispatch(ok ? instagramFeedReceived(data) : instagramFeedError(data));
    });
  };
}
