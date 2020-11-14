import React from "react";
import AtomsAlert from "../../../shared/components/atoms/atomsAlert";
import PropTypes from "prop-types";
import { Table } from "antd";

const MoleculesDashboardIssueTable = (props) => {
  return (
    <div>
      <AtomsAlert type={props.type} message={props.message} />
      <Table
        rowKey="id"
        columns={props.columns}
        dataSource={props.dataSource}
      />
    </div>
  );
};

MoleculesDashboardIssueTable.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  columns: PropTypes.array,
  dataSource: PropTypes.array,
};

export default MoleculesDashboardIssueTable;
