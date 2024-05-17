import React from 'react'
import Taglist from './Taglist'
import { Tags } from '../Data/data'

const Label = () => {
  return (
    <> <div className="w3-card w3-margin">
    <div className="w3-container w3-padding">
      <h4>Tags</h4>
      
    </div>
    <div className="w3-container w3-white">
      <p>
        <span className="w3-tag w3-black w3-margin-bottom">Travel</span>
        {Tags.map((data)=>(<Taglist list={data}/>))}
      </p>
    </div>
  </div></>
  )
}

export default Label