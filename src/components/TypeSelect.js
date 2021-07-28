export const PartSelect = ({ parts }) => {
  return (<select name="typeName">
    {parts.map(({ type }, j) =>
      (<option key={j} label={type} value={type}>{type}</option>)
    )}
  </select>)
}
