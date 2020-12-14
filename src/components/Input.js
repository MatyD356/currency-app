import React from 'react'

const Input = ({ id, hook, saveToHook, changeActive, first, second }) => {


  const handleChange = (e) => {
    //determine where display the exchange output based on which was last edited
    id === 'first' ? changeActive(id) :
      id === 'second' ? changeActive(id) :
        null

    //simple validation allowing only numbers and dot in decimal numbers
    const regex = /^[+-]?(([1-9][0-9]*)?[0-9](\.[0-9]*)?|\.[0-9]+)$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
      saveToHook(e.target.value)
    }
  }

  return (
    <input
      type='text'
      aria-label='Input'
      disabled={first?.code ? second?.code ? false : true : true}
      onChange={handleChange}
      value={hook}
    />
  )
}

export default Input