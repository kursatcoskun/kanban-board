import React from "react";
import AtomsAlert from "../../../shared/components/atoms/atomsAlert";
import PropTypes from "prop-types";

const MoleculesDashboardIssueTable = (props) => {
  return (
    <div>
      <AtomsAlert type={props.type} message={props.message} />
    </div>
  );
};

MoleculesDashboardIssueTable.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
};

export default MoleculesDashboardIssueTable;
