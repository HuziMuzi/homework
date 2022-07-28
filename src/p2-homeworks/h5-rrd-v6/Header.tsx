import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={s.blockLinks}>
            <ul className={s.NavLinks}>
                <li className={s.link}>
                    <NavLink
                        className={({isActive}) => (isActive ? s.active : '')}
                        to={'/pre-junior'}>pre-junior </NavLink>
                </li>
                <li className={s.link}>
                    <NavLink
                        className={({isActive}) => (isActive ? s.active : '')}
                        to={'/junior'}>junior </NavLink>
                </li>
                <li className={s.link}>
                    <NavLink
                        className={({isActive}) => (isActive ? s.active : '')}
                        to={'/junior+'}>junior+ </NavLink>
                </li>
            </ul>
            <span className={s.blockHover}></span>
        </div>
    )
}

export default Header
