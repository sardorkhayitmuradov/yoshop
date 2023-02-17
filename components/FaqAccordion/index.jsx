import React, { useState } from "react";

const FaqAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={item.title} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => handleClick(index)}
          >
            <h3 className="accordion-title">{item.title}</h3>
          </div>
          <div
            className={`accordion-body ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <p>{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;