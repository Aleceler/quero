import * as api from '../../api';

const initialState = {
  items: [],
  filteredList: [],
  flag: false,
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
    setFilteredList(state, filteredList) {
      return { ...state, filteredList };
    },
    setFlag(state, flag) {
      return { ...state, flag };
    },
  },
  effects: (dispatch) => ({
    async fetch(params) {
      dispatch.scholarship.setLoading(true);

      const response = await api.scholarship.get();

      const semesterFilter = params.semester !== 'Todos os semestres' ? response.filter((item) => item.enrollment_semester === params.semester) : response;

      dispatch.scholarship.setScholarships(semesterFilter);
      dispatch.scholarship.setFlag(false);
      dispatch.scholarship.setLoading(false);
    },
    async filter(filters, state) {
      const {
        city, course, presencial, ead, price,
      } = filters;

      let filtredList = state.scholarship.items.filter((item) => ((
        price && item.full_price <= price
      )));

      filtredList = city !== '' ? filtredList.filter((item) => item.campus.city === city) : filtredList;
      filtredList = course !== '' ? filtredList.filter((item) => item.course.name === course) : filtredList;
      filtredList = presencial && ead ? filtredList.filter((item) => item.course.kind === 'Presencial' || item.course.kind === 'EaD') : filtredList;
      filtredList = presencial && !ead ? filtredList.filter((item) => item.course.kind === 'Presencial') : filtredList;
      filtredList = ead && !presencial ? filtredList.filter((item) => item.course.kind === 'EaD') : filtredList;
      filtredList = !presencial && !ead ? filtredList.filter((item) => item.course.kind === '') : filtredList;

      dispatch.scholarship.setFilteredList(filtredList);
      dispatch.scholarship.setFlag(true);
    },
  }),
};

export default scholarships;
