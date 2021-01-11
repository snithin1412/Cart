import React from "react";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

const BANNER_IMAGE = "./images/banner_image.png";
const TIMINGS ="./images/time_icon.svg";
const LOCATION = "./images/view_map.svg";
const BACK_ARROW = "./images/back_arrow.svg"
const ITEM_1 = "./images/item_1.png";
const ITEM_2 = "./images/item_2.png";
const ITEM_3 = "./images/item_3.png";

function Main() {
  return (
    <React.Fragment>
      <Container fluid className="pb-0">
        <Row>
            <img className="banner-wrapper" src={BANNER_IMAGE} alt="mcd"/>
        </Row>
        <Row className="topp-left">
            <Link to="/">
                <img  src={BACK_ARROW} alt="back"/>
            </Link>
        </Row>
      </Container>
      <Container className="about-wrapper">
        <Row className="ml-1">
          <Col>
            <Row className="pb-1 pt-3">
              <span className="title font-weight-bold">McDonald’s</span>
            </Row>
            <Row className="pb-3">
                <Col xs={5}>
                    <Row>
                        <span style={{color: '#898989'}}>Dubai Media City</span>
                    </Row>
                </Col>
                <Col xs={7}>
                    <Row>
                        <span >&#8226;&nbsp;Burger, Fast Food</span>
                    </Row>
                </Col>
            </Row>
            <Row className="pb-1">
              <span style={{color: '#898989'}}>AVERAGE MEAL COST</span>
            </Row>
            <Row className="pb-2">
              <span >AED 70</span>
            </Row>
            <Row className="pb-1">
              <span style={{color: '#898989'}}>ACCEPTED PAYMENT METHODS</span>
            </Row>
            <Row className="pb-4">
              <span >Cash and Cards accepeted</span>
            </Row>
            <Row className="pt-2 pb-4">
                <Col >
                    <Row>
                        <Col xs={1} className="pt-1">
                            <Row>
                                <img src={TIMINGS} alt="timings"/>
                            </Row>
                        </Col>
                        <Col xs={8} >
                            <Row>
                                <span>TIMINGS</span>
                            </Row>
                            <Row>
                                <span style={{color: '#49BB5C'}}>Opens Now</span>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col >
                    <Row>
                        <Col xs={1} className="pt-1">
                            <Row>
                                <img src={LOCATION} alt="location" />
                            </Row>
                        </Col>
                        <Col xs={8} >
                            <Row>
                                <span>LOCATION</span>
                            </Row>
                            <Row>
                                <span style={{color: '#00A1FF'}}>View map</span>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="pt-2 pb-3">
                <Col xs={4} className="p-1">
                    <Card>
                        <Card.Img src={ITEM_1} width="88px" height="88px" alt="item-1"/>
                    </Card>
                </Col>
                <Col xs={4} className="p-1">
                    <Card>
                        <Card.Img src={ITEM_2} width="88px" height="88px" alt="item-2"/>
                    </Card>
                </Col>
                <Col xs={4} className="p-1">
                    <Card>
                        <Card.Img src={ITEM_3} width="88px" height="88px" alt="item-3"/>
                    </Card>
                </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
          <Row className="ml-1 pb-2">
              <span className="font-14">Description</span>
          </Row>
          <Row className="ml-1">
              <span className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet ante at risus mollis, ut rutrum arcu venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam nec erat suscipit, pretium quam eget, condimentum enim. Donec et ligula ut ante ornare porta. Suspendisse mollis eros vel dapibus feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet ante at risus mollis, ut rutrum arcu venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam nec erat suscipit, pretium quam eget, condimentum enim. Donec et ligula ut ante ornare porta. Suspendisse mollis eros vel dapibus feugiat.</span>
          </Row>
      </Container>
    </React.Fragment>
  );
}

export default Main;
