const Select = ({name, data, value, updateSelect}) => {

  const options = data.map( select => <option key={select.name}>{select.name}</option>)
  
  return (
    <select
      name = {name}
      value = {value}
      onChange = {e => updateSelect(e.target.value, name)}
    >
        {options}
    </select>
  )
}

export default Select