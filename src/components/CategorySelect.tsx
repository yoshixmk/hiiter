import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Menus } from '../pages';
import { Cycle, cycleSlice } from '../store/cycle';

type Categories = Menus;

export const CategorySelect = ({ categories }: { categories: Categories }): JSX.Element => {
  const dispatch = useDispatch();
  const { category } = useSelector((state: { cycle: Cycle }) => state.cycle);

  const handleUpdate = (e) => {
    dispatch(
      cycleSlice.actions.updateCycle({
        category: e.target.value,
      })
    );
  };

  return (
    <select
      value={category ?? categories[0].type}
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
