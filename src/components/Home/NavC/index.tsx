import React, {useState} from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from "reactstrap";
import classnames from 'classnames'
import styles from './styles.module.scss'

const NavC = (props) =>{
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab) => {
        if(activeTab !== tab) setActiveTab(tab);
      }

    return(
        <div>
            <Nav tabs className={styles.navConheca}>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '1' })} onClink={() => { toggle('1')}}>
                        Historia
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '2' })} onClink={() => { toggle('2')}}>
                        Cultura
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '3' })} onClink={() => { toggle('3')}}>
                        Pontos Turisticos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '4' })} onClink={() => { toggle('4')}}>
                        Hotel
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '5' })} onClink={() => { toggle('5')}}>
                        Restaurantes
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <h4>Tab 1 Contents</h4>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <h4>Tab 2 Contents</h4>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    )
}
export default NavC;