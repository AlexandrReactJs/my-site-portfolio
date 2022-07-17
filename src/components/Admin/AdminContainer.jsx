import React from "react";
import Admin from "./Admin";
import { connect } from "react-redux";

const AdminContainer = (props) => {
    return(
        <Admin isAuth = {props.isAuth}/>
    )
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.adminPage.isAuth
    }
}

export default connect(mapStateToProps)(AdminContainer);