import React, { useState } from 'react';

import { Menu } from '../pages';


type Props = {
  filteredMenus: Menu[];
  index: number;
  onSelect: (menu: Menu) => void;
};

export const MenuSelect = ({ filteredMenus, index, onSelect }: Props): JSX.Element => {
  const displayName = `Menu ${index + 1}`;
  const [state, setState] = useState(filteredMenus[index]);

  const handleUpdate = (e) => {
    const menu = JSON.parse(e.target.value);
    setState(menu);
    onSelect(menu);
  };

  return (
    <>
      <h3>{displayName} &rarr;</h3>
      <select
        name={displayName}
        onChange={(e) => {
          handleUpdate(e);
        }}
      >
        {filteredMenus.map((menu, i) => {
          const { name } = menu;
          return (
            <option key={i} label={name} value={JSON.stringify(menu)}>
              {name}
            </option>
          );
        })}
      </select>
      <p>{state.subtext}</p>
    </>
  );
};
