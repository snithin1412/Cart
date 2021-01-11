import React from "react";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

const ICON_ARROW = "./images/icon_arrow.svg";

function MenuTotal(props) {

    const baseprice = props.baseprice;
    const quantity  = props.quantity;
    const amount = baseprice * quantity

  return (
    <React.Fragment>
        <Row className="ml-1">
            <Col xs={6} className="pt-2">
                <Row>
                    <span className="delivery-location">
                    1 Item  |  AED {amount.toFixed(2)}
                    </span>
                </Row>
                <Row>
                    <span style={{color: '#898989'}}>
                    Inclusive of Taxes&nbsp;
                    <b style={{color: '#EF3E42'}}>Details</b>
                    </span>
                </Row>
            </Col>
            <Col xs={6}>
                <Row className="float-right">
                    <span className="my-order">
                    MYORDER &nbsp;
                    <img src={ICON_ARROW} alt="proceed" />
                    </span>
                </Row>
            </Col>
        </Row>
    </React.Fragment>
  );
}

export default MenuTotal;
