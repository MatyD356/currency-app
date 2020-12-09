import React, { useState } from 'react'

const Input = ({ hook, saveToHook }) => {


  const handleChange = (e) => {
    saveToHook(e.target.value)
  }

  return (
    <div>
      <label>Podaj ilość waluty</label>
      <input
        onChange={handleChange}
        value={hook}
      />
    </div>
  )
}

export default Input