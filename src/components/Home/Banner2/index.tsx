import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import styles from "./styles.module.scss"

const items = [
  {
    src: "https://i.postimg.cc/1z8Nq6qd/Sem-t-tulo.png",
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: "https://i.postimg.cc/T1Jy6JzK/Sem-t-tulo-2.png",
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: "https://i.postimg.cc/NG62mQKQ/Sem-t-tulo-1.png",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];
const Banner2 = () => <UncontrolledCarousel items={items}  className={styles.banner}/>;
/* const Example = () => (
  <Row>
    <Col md="8" className="mx-auto">
      <UncontrolledCarousel items={items} className={styles.} />
    </Col>
  </Row>
);
 */
export default Banner2;