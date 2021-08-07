import React from "react";
import  Link from 'next/link';
import styles from './styles.module.scss'


const Nav = () =>{
    return(
        <div className={styles.navRegiao}>
           <ul>
            <li>
                <Link href="/conheca/norte">
                    <a>Norte</a>
                </Link>
            </li>
            <li>
                <Link href="/conheca/nordeste">
                    <a>Nordeste</a>
                </Link>
            </li>
            <li>
                <Link href="/conheca/centro-oeste">
                    <a>Centro-Oeste</a>
                </Link>
            </li>
            <li>
                <Link href="/conheca/sudeste">
                    <a>sudeste</a>
                </Link>
            </li>
            <li>
                <Link href="/conheca/sul">
                    <a>Sul</a>
                </Link>
            </li>
        </ul>
        </div>
    )
}
export default Nav;