import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 170px;
    @media (max-width: 768px) {
        margin: 20px 50px;
    }
`
const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    gap: 60px;
    font-size: 20px;
    align-items: center;
    li {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 5px;
        img {
            display: flex;
            margin: auto;
        }
        @media (max-width: 768px)  {
            font-size: 30px;
            padding-left: 100px;
            flex-direction: row;
            gap: 20px;
        }
    }
    @media (max-width: 768px) {
        position: fixed;
        flex-direction: column;
        align-items: center;
        top: 0;
        gap: 30px;
        background-color: #1F0016;
        width: 350px;
        height: 100%;
        z-index: 2;
        transition: right 0.5s;
        right: -350px;
    }
    
`
const NavConnect = styled.div`
    border-radius: 50px;
    padding: 20px 40px;
    cursor: pointer;
    background: linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.63%);
    font-size: 22px;
    transition: 0.5s;
    &:hover {
        transform: scale(1.05);
    }
    @media (max-width: 768px) {
        display: none;
    }
`
const AnchorLinks = styled(AnchorLink)`
    text-decoration: none;
    color: white;
`
const NavMobOpen = styled.img`
display: none;
    @media (max-width: 768px) {
        display: block;
        position: fixed;
        right: 30px;
    }
`
const NavMobClose = styled.img`
    display: none;
     @media (max-width: 768px) {
        display: block;
     position: relative;
     top: 30px;
     left: 290px;
     width: 30px;
     }
`
const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();
    const openMenu = () => {
        menuRef.current.style.right = "0"
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-350px"
    }
  return (
    <NavBar>
        <img src={logo} alt="" />
        <NavMobOpen onClick={openMenu} src={menu_open} alt="" />
        <NavMenu ref={menuRef}>
            <NavMobClose onClick={closeMenu} src={menu_close} />
            <li><AnchorLinks offset={50} href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLinks>{menu==="home"? <img src={underline} alt="" /> : <></>}</li>
            <li><AnchorLinks offset={50} href='#about'><p onClick={() => setMenu("about")}>About me</p></AnchorLinks>{menu==="about"? <img src={underline} alt="" /> : <></>}</li>
            <li><AnchorLinks offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLinks>{menu==="services"? <img src={underline} alt="" /> : <></>}</li>
            <li><AnchorLinks offset={50} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLinks>{menu==="work"? <img src={underline} alt="" /> : <></>}</li>
            <li><AnchorLinks offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLinks>{menu==="contact"? <img src={underline} alt="" /> : <></>}</li>
        </NavMenu>
        <NavConnect><AnchorLinks offset={50} href='#contact'>Connect with me</AnchorLinks></NavConnect>
    </NavBar>
  )
}

export default Navbar