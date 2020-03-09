import * as api from '../../api';

const initialState = {
  items: [],
  loading: false,
};

const scholarships = {
  state: initialState,
  reducers: {
    setScholarships(state, items) {
      return { ...state, items };
    },
    setLoading(state, loading) {
      return { ...state, loading };
    },
  },
  effects: (dispatch) => ({
    async fetch() {
      dispatch.scholarship.setLoading(true);

      const response = await api.scholarship.get();

      dispatch.scholarship.setScholarships(response);

      dispatch.scholarship.setLoading(false);
    },
  }),
};

export default scholarships;
