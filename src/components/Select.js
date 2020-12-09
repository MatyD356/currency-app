import React from 'react'

const Select = ({ data, saveToHook }) => {

  const handleSelectChange = (e, callback) => {
    callback(data.rates[e.target.value])
  }

  return (
    <div>
      <label htmlFor='select-currency'>Wybierz Walutę</label>
      <select onChange={(e) => handleSelectChange(e, saveToHook)} id='first-currency'>
        <option value='' hidden>Wybierz walute</option>
        {data.rates?.map((item, index) =>
          <option key={item.code} value={index}>
            {item.currency} {item.code}
          </option>
        )}
      </select>
    </div>
  )
}

export default Select