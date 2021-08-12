import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

const Footer = () =>{
    return(
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLinks}>
                <div className={styles.footerInfo}>
                    <Link href="#" passHref><a>Sobre Nós</a></Link>
                    <Link href="#"  passHref><a>Contato</a></Link>
                    <Link href="#"  passHref><a>Termo de Uso</a></Link>
                </div>
                <div className={styles.footerInfo}>
                    <Link href="#"  passHref><a>Perguntas Frequentes</a></Link>
                    <Link href="#"  passHref><a>Politica de Privacidade</a></Link>
                </div>

                </div>
                <div className={styles.footerSocial}>
                    <Link href="#"  passHref><i className="fab fa-facebook"></i></Link>
                    <Link href="#"  passHref><i className="fab fa-instagram"></i></Link>
                    <Link href="#"  passHref><i className="fab fa-twitter"></i></Link>
                </div>
                
            </div>
            <div className={styles.Autorais}>
            Jornada Brasil © 2021. Todos os direitos reservados.
            </div>

        </div>
    )
}
export default Footer;