let bandCounter = 0;
export default function manageBand(
  state = {
    bands: [],
  },
  action,
) {
  switch (action.type) {
    case "ADD_BAND":
      return { ...state, bands: [...state.bands, { name: action.name, id: ++bandCounter }] };
    case "DELETE_BAND":
      return { ...state, bands: [...state.bands.filter(b => b.id !== action.bandId)] };
    default:
      return state;
  }
}
