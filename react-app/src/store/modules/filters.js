import { TODOS_STATE } from './todos'



export const FILTERS_ACTION = {
  CHANGE_STATE: 'filters/CHANGE_STATE',
  CHANGE_DATE: 'filters/CHANGE_DATE',
  RESET_FILTER: 'filters/RESET_FILTER',
}
export const FILTERS_STATE = {
  STATE: {
    ALL: 'ALL',
    ...TODOS_STATE
  },
  DATE: {
    ALL: 'ALL',
    DAY_THIS: 'DAY_THIS',
    WEEK_THIS: 'WEEK_THIS',
    MONTH_THIS: 'MONTH_THIS'
  }
}
const defaultFilter = {
  state: FILTERS_STATE.STATE.ALL,
  date: FILTERS_STATE.DATE.ALL
}



export const updateFilter = {
  state: payload => ({ type: FILTERS_ACTION.CHANGE_STATE, payload }),
  date: payload => ({ type: FILTERS_ACTION.CHANGE_DATE, payload })
}
export const resetFilter = () => ({ type: FILTERS_ACTION.RESET_FILTER, payload: defaultFilter })



export default function filters(state = defaultFilter, action) {
  switch (action.type) {
    case FILTERS_ACTION.CHANGE_STATE:
      return { ...state, state: action.payload }
    case FILTERS_ACTION.CHANGE_DATE:
      return { ...state, date: action.payload }
    case FILTERS_ACTION.RESET_FILTER:
      return defaultFilter;
    default:
      return state;
  }
}