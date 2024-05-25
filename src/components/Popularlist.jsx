import React from 'react'

const Popularlist = (props) => {
  return (
    <>
        
              <li className="w3-padding-16">
                <img
                  src= {props.image}
                  alt="Image"
                  className="w3-left w3-margin-right"
                  style={{ width: 50 }}
                />
                <span className="w3-large">{props.Title}</span>
                <br />
                <span>{props.Content}</span>
              </li>
             
           
    </>
  )
}

export default Popularlist