import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const MenuSelect = ({ menus, name }) => {
  const displayName = name;
  const { category } = useSelector((state) => state.cycle);

  const menuNames = menus.filter((c) => c.type === category)[0].menuNames;
  const [selector, setSelector] = useState({ type: category, menuNames });
  useEffect(() => {
    const [s] = menus.filter((c) => c.type === category);
    setSelector(s);
  }, [category, menus]);
  const [state, setState] = useState(selector.menuNames[0]);

  const handleUpdate = (e) => {
    setState(JSON.parse(e.target.value));
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
        {selector.menuNames.map((menu, i) => {
          const { name } = menu;
          // console.dir(menu)
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
