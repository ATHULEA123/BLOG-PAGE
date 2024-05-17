
import React, { useState } from 'react';

const Blogentry = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const getDisplayContent = () => {
    const words = props.content.split(' ');
    if (isExpanded || words.length <= 30) {
      return props.content;
    }
    return words.slice(0, 30).join(' ') + '...';
  };

  return (
    <>
      <div className="w3-card-4 w3-margin w3-white">
        <img src={props.image} alt="Nature" style={{ width: "100%" }} />
        <div className="w3-container">
          <h3><b>{props.Title}</b></h3>
          <h5>{props.description}<span className="w3-opacity">{props.date}</span></h5>
        </div>
        <div className="w3-container">
          <p>{getDisplayContent()}</p>
          <div className="w3-row">
            <div className="w3-col m8 s12">
              {props.content.split(' ').length > 30 && (
                <p>
                  <button 
                    className="w3-button w3-padding-large w3-white w3-border" 
                    onClick={toggleReadMore}>
                    <b>{isExpanded ? 'SHOW LESS' : 'READ MORE »'}</b>
                  </button>
                </p>
              )}
            </div>
            <div className="w3-col m4 w3-hide-small">
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
