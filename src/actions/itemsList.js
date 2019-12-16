export const ALERT_ERROR = 'ALERT_ERROR';
export const ALERT_LOADING = 'ALERT_LOADING';
export const LIST_ITEMS_RECEIVED = 'LIST_ITEMS_RECEIVED';

export function alertError(bool) {
  return {
    type: ALERT_ERROR,
    data: bool,
  };
}

export function alertLoading(bool) {
  return {
    type: ALERT_LOADING,
    data: bool,
  };
}

export function listItemsReceived(items) {
  return {
    type: LIST_ITEMS_RECEIVED,
    data: items,
  };
}

export function getItems() {
  return dispatch => {
    dispatch(alertLoading(true));
    fetch(
      'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043',
    )
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
        throw Error(`Ошибка: ${res.status}`);
      })
      .then(arrItems => {
        dispatch(listItemsReceived(arrItems));
      })
      .catch(() => dispatch(alertError(true)))
      .finally(() => dispatch(alertLoading(false)));
  };
}
