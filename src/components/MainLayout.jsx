import React from "react";
import Blogentry from "./Blogentry";
import AboutCard from "./AboutCard";
import PopularPost from "./PopularPost";
import Label from "./Label";
import { PostData,aboutCard,popularPost} from "../Data/data";

const MainLayout = () => {
  return (
    <>
      <div className="w3-row">
        {/* Blog entries */}
        <div className="w3-col l8 s12">
          {/* Blog entry */}
          {PostData.map((data)=>( <Blogentry {...data}/>))}
       
          {/* Blog entry */}
         
          {/* END BLOG ENTRIES */}
        </div>
        {/* Introduction menu */}
        <div className="w3-col l4">
          {/* About Card */}
         {aboutCard.map((data)=>(<AboutCard {...data}/>))}
          {/* Posts */}
          <PopularPost/>
          {/* Labels / tags */}
         <Label/>
          
          {/* END Introduction Menu */}
        </div>
        {/* END GRID */}
      </div>
      <br />
      {/* END w3-content */}
    </>
  );
};

export default MainLayout;
