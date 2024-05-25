import React from 'react'
import { popularPost } from '../Data/data'
import Popularlist from './Popularlist'
const PopularPost = () => {
  return (
   <>
     <div className="w3-card w3-margin">
            <div className="w3-container w3-padding">
              <h4>Popular Posts</h4>
            </div>
            <ul className="w3-ul w3-hoverable w3-white">
            {popularPost.map((data)=>(<Popularlist key={data._id} {...data}/>))}
            </ul>
          </div>
          <hr />
   </>
  )
}

export default PopularPost