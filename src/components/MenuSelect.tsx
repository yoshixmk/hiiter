import React, { useState } from 'react';

import { Menu } from '../pages';


type Props = {
  filteredMenus: Menu[];
  name: string;
  onSelect: (menu: Menu) => void;
};

export const MenuSelect = ({ filteredMenus, name, onSelect }: Props): JSX.Element => {
  const displayName = name;
  const [state, setState] = useState(filteredMenus[0]);

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
