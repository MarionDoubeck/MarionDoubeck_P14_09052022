const DatePicker = ({name, id, updateDate, value}) => {

  const dateChangeHandler = (e) => {
    updateDate(e.target.value, name)
  }

  return (
    <input
      id={id}
      type='date'
      value={value}
      onChange={ e => dateChangeHandler(e)}
    />
  )
}

export default DatePicker