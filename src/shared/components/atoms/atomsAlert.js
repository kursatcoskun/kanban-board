import React from "react";
import { Alert } from "antd";
import PropTypes from "prop-types";

const AtomsAlert = (props) => {
  return (
    <div>
      <Alert message={props.message} type={props.type} />
    </div>
  );
};

AtomsAlert.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
};

export default AtomsAlert;
