const initialState = {
  items: [],
  loading: false,
};

const cards = {
  state: initialState,
  reducers: {
    setCards(state, items) {
      return { ...state, items };
    },
    setLoading(state, loading) {
      return { ...state, loading };
    },
    deleteItem(state, id) {
      const items = state.items.filter((x) => x != id);
      return { ...state, items };
    },
  },
  effects: (dispatch) => ({
    async fetch(params) {
      console.log(params);
      dispatch.cards.setCards(params);
      dispatch.cards.setLoading(false);
    },
    async remove(id) {
      dispatch.cards.deleteItem(id);
    },

  }),
};

export default cards;
