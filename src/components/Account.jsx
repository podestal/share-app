import React from 'react'

const Account = ({ account }) => {

  return (
    <>
        <h2>{account.name}</h2>
        <p>S/{account.price}.00 al mes</p>
        <button>Comprar</button>
    </>
  )
}

export default Account