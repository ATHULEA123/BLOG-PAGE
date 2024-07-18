import React, { useState, useEffect } from "react";
import axios from "axios";
import Blogentry from "./Blogentry";
import AboutCard from "./AboutCard";
import PopularPost from "./PopularPost";
import Label from "./Label";
// import {PostData} from "../Data/data";

const MainLayout = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="w3-row">
        <div className="w3-col l8 s12">
          {/* Blog entry */}
          {blogs.map((blogs) => (
            <Blogentry key={blogs._id} {...blogs} />
          ))}
        </div>

        <div className="w3-col l4">
          <AboutCard />

          <PopularPost />

          <Label />
        </div>
      </div>
      <br />
    </>
  );
};

export default MainLayout;
