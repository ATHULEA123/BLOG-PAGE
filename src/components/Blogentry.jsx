import React, { useState } from "react";
import moment from "moment";

const Blogentry = ({ title, image, description, createdAt }) => {
  const formattedDate = new Date(createdAt).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const getDisplayContent = () => {
    const words = description.split(" ");
    if (isExpanded || words.length <= 30) {
      return description;
    }
    return words.slice(0, 30).join(" ") + "...";
  };

  return (
    <>
      <div className="w3-card-4 w3-margin w3-white">
        <img
          src={
            image ||
            "https://us.123rf.com/450wm/shendart/shendart1805/shendart180500040/102142631-flat-pictures-icon-in-flat-stule-with-shadow-isolated-on-blue-background-mountains-and-sun-on-paper.jpg"
          }
          alt="Nature"
          style={{ width: "100%", height: "380px" }}
        />
        <div className="w3-container">
          <h3>
            <b>{title || "TITILE DESCRIPTIION"}</b>
          </h3>
          <h5>
            BLOG CREATED AT{"   "}
            <span className="w3-opacity">{"   "}</span>
            {formattedDate}
          </h5>
        </div>
        <div className="w3-container">
          <p>{getDisplayContent() || "Add content"}</p>
          <div className="w3-row">
            <div className="w3-col m8 s12">
              {description.split(" ").length > 30 && (
                <p>
                  <button
                    className="w3-button w3-padding-large w3-white w3-border"
                    onClick={toggleReadMore}
                  >
                    <b>{isExpanded ? "SHOW LESS" : "READ MORE"}</b>
                  </button>
                </p>
              )}
            </div>
            <div className="w3-col m4 w3-hide-small comment  ">
              <p>
                <span className="w3-padding-large w3-right">
                  <b>Comments &nbsp;</b> <span className="w3-tag">0</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Blogentry;
