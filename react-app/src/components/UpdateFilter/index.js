import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FILTERS_STATE, resetFilter, updateFilter } from '../../store/modules/filters'

export default function UpdateFilter() {
  const filters = useSelector(({ filters }) => { return { ...filters } })
  const dispatch = useDispatch()
  const dispatchUpdate = {
    reset: () => dispatch(resetFilter()),
    ALL: () => dispatch(updateFilter.state(FILTERS_STATE.STATE.ALL)),
    TODO: () => dispatch(updateFilter.state(FILTERS_STATE.STATE.TODO)),
    DONE: () => dispatch(updateFilter.state(FILTERS_STATE.STATE.DONE)),
    PEND: () => dispatch(updateFilter.state(FILTERS_STATE.STATE.PEND))
  }

  return (
    <form className="todo-filter">
      {(() => {
        const elms = [];
        for (const key in FILTERS_STATE.STATE) {
          const element = FILTERS_STATE.STATE[key];
          elms.push(
            <label key={element} className={`todo-filter-${element.toLowerCase()}`}>
              <input
                type='radio'
                name='todo-filter'
                value={element}
                checked={filters.state === element}
                onChange={() => dispatchUpdate[element]()}
              />
              {element}
            </label>
          )
        }
        return elms
      })()}
    </form>
  )
}