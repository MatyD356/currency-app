import React from 'react'

const Input = ({ id, hook, saveToHook, changeActive }) => {


  const handleChange = (e) => {
    id === 'first' ? changeActive(id) :
      id === 'second' ? changeActive(id) :
        null
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