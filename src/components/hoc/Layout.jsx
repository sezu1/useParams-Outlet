import React from 'react';
import {Outlet} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export function Layout() {

    const navigate = useNavigate();
     function goBack(){
         navigate('/')
     }

    return (
        <div>
            <button onClick={goBack}>назад</button>
            <Outlet/>
        </div>
    );
}

