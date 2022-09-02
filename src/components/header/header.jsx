import s from './header.module.scss'
import polygon from '../../images/Polygon.png'
import polygon1 from '../../images/Polygon (1).png'
import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useLockBodyScroll, useToggle, useWindowSize} from "react-use";

export const Header = () => {
    const navigation = [
        {value: 'About', path: '/about'}, {value: 'Services', path: '/services'}, {value: 'Pricing', path: '/pricing'}, {value: 'Blog', path: 'blog'}
    ]
    const [locked, setLocked] = useToggle(false)
    useLockBodyScroll(locked)
    const { width } = useWindowSize()
    const [burgerMenuStatus, setBurgerMenuStatus] = useState(false)
    useEffect(() => {
        if (width > 1200) setBurgerMenuStatus(prevState => false)
    }, [width])
    useEffect(() => {
        if (width > 1200 && locked) setLocked(false)
    }, [width])

    return (
       <header className={s.header_section}>
           <nav className={s.header_navigation_section}>
                <div className={s.logo_section}>
                    <img className={s.logo} src={polygon} alt="logo"/>
                    <img className={s.logo1} src={polygon1} alt=""/>
                    <NavLink to={'/'}>
                        <p className={s.logo_section_agency}>Agency</p>
                    </NavLink>
                </div>
                   <ul className={burgerMenuStatus ? s.header_navigation_ul_burger : s.header_navigation_ul }>
                       {navigation.map((item, index) => {
                           return (
                               <li onClick={ () => setBurgerMenuStatus(false)} className={s.header_navigation_li} key={index}>
                                   <NavLink className={( {isActive} ) =>
                                       `${isActive ? s.activeLink : ''} ${s.header_navigation_links}`}
                                            to={item.path} >
                                       {item.value}
                                   </NavLink>
                               </li>
                           )
                       })}
                   </ul>
               <div className={s.header_contact_section}>
                       <NavLink to={'/contact'}>
                          <button className={s.header_contact_button}>Contact</button>
                       </NavLink>
               </div>
               <div onClick={() => {setBurgerMenuStatus(!burgerMenuStatus); setLocked(!locked)} }
                    className={burgerMenuStatus ? s.burgerMenu_button_active : s.burgerMenu_button}>
                   <span></span>
               </div>
               <div className={burgerMenuStatus ? s.burgerMenu_content_active : s.burgerMenu_content_inactive}>

               </div>
           </nav>

       </header>
    )
}