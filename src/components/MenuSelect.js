export const MenuSelect = ({ menus, name }) => {
  return (<select name={name}>
    {menus.map(({ type, menuNames }, i) => (
      <optgroup label={type} key={i}>
        {menuNames.map(({ name }, j) =>
          (<option key={j} label={name} value={name}>{name}</option>)
        )}
      </optgroup>
    ))}
  </select>)
}
