import React from 'react'

const Select = ({ data, saveToHook }) => {

  //sending data to parent element
  const handleSelectChange = (e, callback) => {
    callback(data.rates[e.target.value])
  }

  return (
    <select onChange={(e) => handleSelectChange(e, saveToHook)} id='first-currency'>
      <option value='' hidden>Wybierz walute</option>
      {data.rates?.map((item, index) =>
        <option key={item.code} value={index}>
          {item.currency}
        </option>
      )}
    </select>
  )
}

export default Select