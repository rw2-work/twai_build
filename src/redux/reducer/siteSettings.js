import { NAVIGATION, SEARCH, LOGIN} from "../actions/type";

const initialState = {
  navigation: false,
  wallet: false,
  search: false,
};

const nfts = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case NAVIGATION:
      return {
        ...state,
        navigation: payload,
      };
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case SEARCH:
      return {
        ...state,
        search: payload,
      };
    default:
      return state;
  }
};
export default nfts;

