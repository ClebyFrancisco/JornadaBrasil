import React, { useState } from 'react';
import logo from "../../../public/logo.png";
import styles from "./styles.module.scss";
import Image from 'next/image';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


const Header = () => {

  return (
    <div>
      <Navbar color="light" light  expand="md"  className={styles.navBar}>
        <NavbarBrand href="/">
          <Image  src={logo} alt='logo - Jornada Brasil' />

        </NavbarBrand>

          <div className={styles.nav}>

          
         {/*  <Nav className="mr-auto"  navbar > */}
         <NavItem>
              <NavLink className={styles.navLinks} href="/"  passHref>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={styles.navLinks} href="/roteiros"  passHref>Roteiros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={styles.navLinks} href="/galeria"  passHref>Galeria</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className={styles.navLinks}>
                Conheça +
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/conheca/norte" className={styles.navLinks}  passHref>
                  Norte
                </DropdownItem>
                <DropdownItem href="/conheca/nordeste" className={styles.navLinks}  passHref>
                  Nordeste
                </DropdownItem>
                <DropdownItem href="/conheca/centro-oeste" className={styles.navLinks}  passHref>
                  Centro-oeste
                </DropdownItem>
                <DropdownItem href="/conheca/sudeste" className={styles.navLinks}  passHref>
                  Sudeste
                </DropdownItem>
                <DropdownItem href="/conheca/sul" className={styles.navLinks}  passHref>
                  Sul
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
        {/*   </Nav> */}
          </div>
        
      </Navbar>
    </div>
  );
}

export default Header;




/* 
import Link from 'next/link'

const Header = () =>{
    return(
        <>
        <Link href="/">
            Home
        </Link>
        <Link href="/roteiros">
            Roteiros
        </Link>
        <Link href="/sobre">
            Conheça +
        </Link>

        </>
    )
}
export default Header; */