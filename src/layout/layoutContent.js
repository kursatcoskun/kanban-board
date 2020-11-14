import React from "react";
import MoleculesNavbar from "../shared/components/molecules/MoleculesNavbar";
import Routes from "./routes";
import { connect } from "react-redux";

const LayoutContent = (props) => {
  return (
    <div>
      <MoleculesNavbar
        brandText="KANBAN-BOARD"
        username={
          props.loginResponse.username || localStorage.getItem("username")
        }
        loggedUserExist={!!localStorage.getItem("username")}
        color="primary"
        light={false}
      />
      <Routes />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loginResponse: state.auth.loginResponse,
  };
};

export default connect(mapStateToProps)(LayoutContent);
