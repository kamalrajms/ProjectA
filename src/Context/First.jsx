import React from 'react'
import Second from './Second'

export default function First() {
  return (
    <div style={{border:"2px solid black",padding:"20px"}}>
      First Component
      <Second/>
    </div>
  )
}
