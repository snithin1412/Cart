import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import MenuTotal from "./MenuTotal";
import {Link} from "react-router-dom";

const BANNER_IMAGE_MENU = "./images/banner_image_menu.png";
const LOGO ="./images/logo.png";
const MONEY = "./images/icon_money.svg";
const DELIVERY = "./images/icon_delivery.svg";
const PIN = "./images/icon_pin.svg";
const MENU_ITEM = "./images/menu_item.png";
const PLUS = "./images/plus.svg";
const MINUS = "./images/minus.svg";
const NON_VEG = "./images/icon_non_veg.svg";
const MENU = "./images/icon_menu.svg";
const NEXT_ARROW = "./images/next_arrow.svg"

function Menu() {

    const baseprice = 27;
    const [quantity, setQuantity] = useState(0);

    const addQuantity = () => {
        setQuantity(prevQty => prevQty+1);
    }

    const removeQuantity = () => {
        if (quantity > 0) {
            setQuantity(prevQty => prevQty-1);
        }
    }

  return (
    <React.Fragment>
      <Container fluid className="pb-0">
        <Row>
            <img  className="banner-wrapper-menu" src={BANNER_IMAGE_MENU} alt="mcd"/>
        </Row>
        <Row className="logo justify-content-center">
            <img className="logo-dimension"  src={LOGO} alt="logo"/>
        </Row>
      </Container>
      <Container className="menu-wrapper">
        <Row >
          <Col className="menu-content">
            <Row className="m-1">
            <Col xs={6}>
                <Row>
              <span className="title font-weight-bold">McDonald’s</span>
              </Row>
              </Col>
              <Col xs={6}>
              <Row className="next-arrow">
                  <Link to="/main">
                    <img src={NEXT_ARROW} alt="main-page" />
                  </Link>
              </Row>
              </Col>
            </Row>
            <Row className="m-1 pb-1">
                <Col xs={5}>
                    <Row>
                        <span >Burger, Fast Food</span>
                    </Row>
                </Col>
                <Col xs={7}>
                    <Row>
                        <span className="st-1">&#8226;&nbsp;Open</span>
                    </Row>
                </Col>
            </Row>
            <Row className="m-1 pb-1">
                <Col >
                    <Row>
                        <Col xs={1} className="pt-1">
                            <Row>
                                <img src={MONEY} alt="money"/>
                            </Row>
                        </Col>
                        <Col xs={9}>
                            <Row>
                                <span style={{color: '#898989'}}>AED30 min order</span>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col >
                    <Row>
                        <Col xs={1} className="pt-1">
                            <Row>
                                <img src={DELIVERY} alt="delivery"/>
                            </Row>
                        </Col>
                        <Col xs={9} >
                            <Row>
                                <span style={{color: '#898989'}}>25-30mins</span>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="m-1 p-2 delivery">
                <Col>
                    <Row className="p-1">
                        <span >Delivering food to</span>
                    </Row>
                    <Row>
                        <Col xs={1} className="pt-1 pr-0">
                            <Row>
                                <img src={PIN} alt="pin"/>
                            </Row>
                        </Col>
                        <Col xs={8} >
                            <Row>
                                <span className="delivery-location">Trade Centre Area 1, Sh…</span>
                            </Row>
                        </Col>
                        <Col xs={2} >
                            <Row>
                                <span style={{color: '#EF3E42'}}><b>CHANGE</b></span>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="m-1 pt-4 pb-4">
              <Col xs={3}>
                  <Row>
                    <img className="menu-item-dimension" src={MENU_ITEM} alt="menu-item" />
                  </Row>
              </Col>
              <Col xs={9} className="pl-4">
                  <Row>
                    <span className="delivery-location">New Chicken Maharaja Mac</span>
                  </Row>
                  <Row>
                    <span style={{color: '#898989'}}>Burgers &amp; Wraps</span>
                  </Row>
                  <Row>
                      <Col xs={5}>
                        <Row>
                            <span className="delivery-location">AED27.00</span>
                        </Row>
                        <Row>
                            <span style={{color: '#EF3E42'}}>Customize</span>
                        </Row>
                      </Col>
                      <Col xs={7}>
                        <Row className="button-group">
                            <Button onClick={addQuantity} variant="light" style={{padding: "0.25rem 0.5rem"}}>
                                <img src={PLUS} alt="+" />
                            </Button>
                            <input className="input-style" type="text" name="count" value={quantity} />
                            <Button onClick={removeQuantity} variant="light" style={{padding: "0.25rem 0.5rem"}}>
                                <img src={MINUS} alt="-" />
                            </Button>
                        </Row>
                      </Col>
                  </Row>
              </Col>
            </Row>
            <Row className="m-1 pt-2 pb-4">
              <span className="recommended">Recommended (3)</span>
            </Row>
            <Row className="m-1 pb-2">
                <Col >
                    <Row className="pb-2">
                        <Col xs={6}>
                            <Row>
                            <span className="delivery-location">
                                <img src={NON_VEG} alt="Non-veg" />
                                &nbsp;&nbsp;McSpicy Chicken
                            </span>
                            </Row>
                            <Row>
                                <span style={{color: '#898989'}}>Burger &amp; Wraps</span>
                            </Row>
                        </Col>
                        <Col xs={6} >
                            <Row className="button-group">
                                <Button variant="light" style={{padding: "0.25rem 0.5rem"}}>
                                    <img src={PLUS} alt="+" />
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Row>
                            <span >AED 20.00</span>
                            </Row>
                            <Row>
                                <span style={{color: '#EF3E42'}}>Customize</span>
                            </Row>
                        </Col>
                        <Col xs={6} >
                            <Row className="button-group">
                            <span className="menu-button">
                                MENU&nbsp;&nbsp;
                                <img src={MENU} alt="menu-list" />
                            </span>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <MenuTotal baseprice={baseprice} quantity={quantity} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Menu;
