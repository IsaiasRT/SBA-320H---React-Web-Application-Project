export const initialState = {
  favorites: [],
  wishlist: [],
  defeated: [],
  journal: [],
  ratings: {},
  search: "",
  filters: {
    species: "",
    type: "",
    element: "",
  },
  theme: "dark",
};

function toggleById(list, item) {
  return list.some((entry) => entry.id === item.id)
    ? list.filter((entry) => entry.id !== item.id)
    : [...list, item];
}

export function hunterReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      return { ...state, favorites: toggleById(state.favorites, action.payload) };

    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((m) => m.id !== action.payload),
      };

    case "TOGGLE_WISHLIST":
      return { ...state, wishlist: toggleById(state.wishlist, action.payload) };

    case "REMOVE_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((m) => m.id !== action.payload),
      };

    case "TOGGLE_DEFEATED":
      return { ...state, defeated: toggleById(state.defeated, action.payload) };

    case "ADD_ENTRY":
      return { ...state, journal: [action.payload, ...state.journal] };

    case "UPDATE_ENTRY":
      return {
        ...state,
        journal: state.journal.map((entry) =>
          entry.id === action.payload.id ? action.payload : entry,
        ),
      };

    case "DELETE_ENTRY":
      return {
        ...state,
        journal: state.journal.filter((entry) => entry.id !== action.payload),
      };

    case "SET_RATING":
      return {
        ...state,
        ratings: {
          ...state.ratings,
          [action.payload.monsterId]: action.payload.rating,
        },
      };

    case "SET_SEARCH":
      return { ...state, search: action.payload };

    case "SET_FILTER":
      return {
        ...state,
        filters: { ...state.filters, [action.payload.key]: action.payload.value },
      };

    case "RESET_FILTERS":
      return { ...state, filters: initialState.filters };

    case "SET_THEME":
      return { ...state, theme: action.payload };

    default:
      return state;
  }
}
