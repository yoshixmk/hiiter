import { useDispatch } from 'react-redux';
import { cycleSlice } from 'store/cycle';

export const CategorySelect = ({ categories }) => {
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    dispatch(
      cycleSlice.actions.updateCycle({
        category: e.target.value,
      })
    );
  };

  return (
    <select
      value={categories[0].category}
      name="typeName"
      onChange={(e) => {
        handleUpdate(e);
      }}
    >
      {categories.map(({ type: category }, j) => (
        <option key={j} label={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};
