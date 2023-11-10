import React, { useContext } from 'react'
import {DataContext} from '../../App';

function ContextEx() {
    let value=useContext(DataContext)
  return (
    <div>{value}</div>
  )
}

export default ContextEx    