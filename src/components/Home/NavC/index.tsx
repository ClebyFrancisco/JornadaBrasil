import React from "react";
import Image from "next/image";
import { Tabs, Tab } from "react-bootstrap";
import styles from './styles.module.scss'

import historia from '../../../../public/images/Conheca/historia.svg'
import cultura from '../../../../public/images/Conheca/cultura.svg'
import pontos from '../../../../public/images/Conheca/pontos.svg'
import hotel from '../../../../public/images/Conheca/hotel.svg'
import restaurantes from '../../../../public/images/Conheca/restaurantes.svg'

const NavC = () =>{
        return(
            <Tabs defaultActiveKey="historia" transition={false} id="tabs" className={styles.navConheca}>
                <Tab eventKey="historia" title="História">
                    <div className={styles.imageConheca}>
                        <Image src={historia} alt="Historia - Conheça+" />
                    </div>
                </Tab>
                <Tab eventKey="cultura" title="Cultura">
                    <div className={styles.imageConheca}>
                        <Image src={cultura} alt="Cultura - Conheça+" />
                    </div>
                </Tab>
                <Tab eventKey="pontos" title="Pontos Turísticos">
                    <div className={styles.imageConheca}>
                        <Image src={pontos} alt="Pontos Turísticos - Conheça+" />
                    </div>
                </Tab>
                <Tab eventKey="hotel" title="Hotel">
                    <div className={styles.imageConheca}>
                        <Image src={hotel} alt="Hotel - Conheça+" />
                    </div>
                </Tab>
                <Tab eventKey="restaurantes" title="Restaurantes">
                    <div className={styles.imageConheca}>
                        <Image src={restaurantes} alt="Restaurantes - Conheça+" />
                    </div>
                </Tab>
            </Tabs>
        )
}

export default NavC;
