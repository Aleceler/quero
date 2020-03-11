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
  },
  effects: (dispatch) => ({
    async fetch(params) {
      console.log(params);
      dispatch.cards.setCards(params);
      dispatch.cards.setLoading(false);
    },

  }),
};

export default cards;
