import { useDispatch } from 'react-redux';

import { Menus } from '../pages';
import { cycleSlice } from '../store/cycle';

type Categories = Menus;

export const CategorySelect = ({ categories }: { categories: Categories }): JSX.Element => {
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
      value={categories[0].type}
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
