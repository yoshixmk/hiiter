import { useDispatch } from 'react-redux'

import { cycleSlice } from '../store/cycle'

export const CategorySelect = ({ categories }) => {

  const dispatch = useDispatch()

  const handleUpdate = (category) => {
    dispatch(
      cycleSlice.actions.updateCycle({
        category,
      })
    )
  }

  return (<select name="typeName" onChange={(e) => { console.dir(e); handleUpdate(e.value) }}>
    {categories.map(({ type: category }, j) =>
      (<option key={j} label={category} value={category}>{category}</option>)
    )}
  </select>)
}
