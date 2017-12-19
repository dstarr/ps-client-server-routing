import React from 'react';
import {NavLink} from "react-router-dom";

const LeftNav = () => {
    return (
        <nav>
            <li><NavLink className={'navLink'} activeClassName={'activeNavLink'} to={'/'} exact>Home</NavLink></li>
            <li><NavLink className={'navLink'} activeClassName={'activeNavLink'} to={'/people'}>People</NavLink></li>
            <li><NavLink className={'navLink'} activeClassName={'activeNavLink'} to={'/places'}>Places</NavLink></li>
            <li><NavLink className={'navLink'} activeClassName={'activeNavLink'} to={'/foo'}>Nope</NavLink></li>
        </nav>
    );
};

export default LeftNav