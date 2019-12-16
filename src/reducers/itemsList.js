import {
  ALERT_ERROR,
  ALERT_LOADING,
  LIST_ITEMS_RECEIVED,
} from '../actions/itemsList';

const initialState = {
  isError: false,
  isLoading: false,
  itemsList: [],
};

export default function itemsListReducer(state = initialState, action) {
  const {type, data} = action;
  switch (type) {
    case ALERT_ERROR:
      return {...state, isError: data};
    case ALERT_LOADING:
      return {...state, isLoading: data};
    case LIST_ITEMS_RECEIVED:
      return {...state, itemsList: data};
    default:
      return state;
  }
}
