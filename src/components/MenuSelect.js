import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const MenuSelect = ({ menus, name }) => {
  const { category } = useSelector((state) => state.cycle);

  const menuNames = menus.filter((c) => c.type === category)[0].menuNames;
  const [selector, setSelector] = useState({ type: category, menuNames });
  useEffect(() => {
    const [s] = menus.filter((c) => c.type === category);
    setSelector(s);
  }, [category, menus]);

  return (
    <select name={name}>
      {selector.menuNames.map(({ name }, i) => (
        <option key={i} label={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};
