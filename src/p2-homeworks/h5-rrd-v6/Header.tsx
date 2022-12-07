import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";

function Header() {
    return (
        <div className={s.blockLinks}>
            <ul className={s.NavLinks}>
                <li className={s.link}>
                    <NavLink
                        className={({isActive}) => (isActive ? s.active : '')}
                        to={PATH.PRE_JUNIOR}>pre-junior </NavLink>
                </li>
                <li className={s.link}>
                    <NavLink
                        className={({isActive}) => (isActive ? s.active : '')}
                        to={PATH.JUNIOR} end>junior</NavLink>
                </li>
                <li className={s.link}>
                    <NavLink
                        className={({isActive}) => (isActive ? s.active : '')}
                        to={PATH.JUNIOR_PLUS} >junior+ </NavLink>
                </li>
            </ul>

            <span className={s.blockHover}></span>
        </div>
    )
}

export default Header
