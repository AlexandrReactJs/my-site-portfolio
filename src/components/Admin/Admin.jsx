import React from "react";
import style from "./Admin.module.css";
import Header from "./Header/Header";
import PortfolioContainer from "./Portfolio/PortfolioItem/PortfolioContainer";
import Sidebar from "./Sidebar/Sidebar";
import { Route, Routes } from 'react-router-dom';

import RefactoringItemContainer from "./RefactoringItem/RefactoringItemContainer";
import Login from "./Login/Login";
const Admin = (props) => {
    return (
        <div className={style.admin}>
            {props.isAuth ? <><Header />
            <Sidebar />
            <div className={style.content}>
                <Routes>

                    <Route path='portfolio' element={<PortfolioContainer />} />
                    <Route path='refactoringItem/:idItem' element={<RefactoringItemContainer/>}/>
                </Routes>


            </div></> : <Login/>}
            
            
        </div>
    )
}

export default Admin;