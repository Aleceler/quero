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
    async fetch(params) {
      dispatch.scholarship.setLoading(true);

      const response = await api.scholarship.get();

      const semesterFilter = params.semester !== 'Todos os semestres' ? response.filter((item) => item.enrollment_semester === params.semester) : response;

      dispatch.scholarship.setScholarships(semesterFilter);

      dispatch.scholarship.setLoading(false);
    },
  }),
};

export default scholarships;
