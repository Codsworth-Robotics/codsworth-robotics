/* ----------------- REDUCERS -------------------- */

export default function (state = '', action) {
  switch (action.type) {
    case CHANGE_VALUE:
      return action.value;
    case SUBMIT_SEARCH:
      return '';
    default: return state;
  }
}

/* ------------- ACTION TYPES ------------------- */

const CHANGE_VALUE = 'CHANGE_VALUE';
const SUBMIT_SEARCH = 'SUBMIT_SEARCH';

/* ------------- ACTION CREATORS ---------------- */

export const changeSearchValue = value => {
  return { type: CHANGE_VALUE, value: value };
};

export const submitSearch = () => {
  return { type: SUBMIT_SEARCH };
};
