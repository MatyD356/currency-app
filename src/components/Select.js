import React from 'react'

const Select = ({ data, saveToHook }) => {

  //sending data to parent element
  const handleSelectChange = (e, callback) => {
    callback(data.rates[e.target.value])
  }

  return (
    <select data-testid='select' onChange={(e) => handleSelectChange(e, saveToHook)} id='first-currency' aria-label='Select'>
      <option value='' hidden>Wybierz walute</option>
      {data?.rates?.map((item, index) =>
        <option data-testid='option' key={item?.code} value={index}>
          {item?.code}
        </option>
      )}
    </select>
  )
}

export default Select