import React from "react";
import PropTypes from "prop-types";

const UnitsMenu = ({ data }) => {
  return (
    <div className="units-container">
      {data &&
        data.length &&
        data.map((header, index) => (
          <div className="unit-section" key={index}>
            <p className="label">{header.header}</p>
            <p className="value">{header.subHeader}</p>
          </div>
        ))}
    </div>
  );
};

UnitsMenu.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      subHeader: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UnitsMenu;
