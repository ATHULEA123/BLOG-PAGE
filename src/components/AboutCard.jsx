import React from 'react'


const AboutCard = (props) => {
  return (
    <>
         <div className="w3-card w3-margin w3-margin-top">
            <img src={props.image} style={{ width: "100%" }} />
            <div className="w3-container w3-white">
              <h4>
                <b>{props.Title}</b>
              </h4>
              <p>
               {props.content}
              </p>
            </div>
          </div>
          <hr />
    </>
  )
}

export default AboutCard