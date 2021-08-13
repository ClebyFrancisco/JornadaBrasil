import React from "react";
import  Link from 'next/link';
import styles from './styles.module.scss'

const NavC = () =>{
    return(
        <div className={styles.navRegiao}>
           <ul>
            <li>
                <Link href="/conheca/norte">
                    <a>Historia</a>
                </Link>
            </li>
            <li>
                <Link href="/conheca/nordeste">
                    <a>Cultura</a>
                </Link>
            </li>
            <li>
                <Link href="/conheca/centro-oeste">
                    <a>Pontos Turísticos</a>
                </Link>
            </li>
            <li>
                <Link href="/conheca/sudeste">
                    <a>Hotel</a>
                </Link>
            </li>
            <li>
                <Link href="/conheca/sul">
                    <a>Restaurantes</a>
                </Link>
            </li>
        </ul>
        </div>
    )
}
export default NavC;