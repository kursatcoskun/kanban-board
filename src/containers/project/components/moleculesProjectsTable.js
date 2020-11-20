import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";

const MoleculesProjectsTable = (props) => {
  return (
    <div>
      <div>
        <Table
          rowKey="id"
          columns={props.columns}
          dataSource={props.dataSource}
        />
      </div>
    </div>
  );
};

MoleculesProjectsTable.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array,
};

export default MoleculesProjectsTable;
