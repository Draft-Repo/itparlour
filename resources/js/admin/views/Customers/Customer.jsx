import React, { Suspense } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Img from "react-image";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Row,
  Col,
  CardHeader,
  CardFooter,
  CardBody
} from "reactstrap";
import classnames from "classnames";
const Loading = () =><div className="spinner-border m-5"><i class="fas fa-spinner"></i></div>;

class CustomerDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: [],
      activeTab: "1",
      customerId: Number(this.props.match.params.id)
    };
    this.change = this.change.bind(this);
  }

  change(id) {
    this.setState({ customerId: this.state.customerId + id });
    fetch(`/api/customers/${this.state.customerId + id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(async res => {
        const data = await res.json();
        this.setState({
          customer: data
        });
      })
      .catch(function(err) {
        console.log("ERROR!!! " + err.message);
      });
  }

  componentDidMount() {
    fetch(`/api/customers/${this.state.customerId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(async res => {
        const data = await res.json();
        this.setState({
          customer: data
        });
      })
      .catch(function(err) {
        console.log("ERROR!!! " + err.message);
      });
  }

  render() {
    const toggle = tab => {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    };

    return (
      <>
        <Card>
          <CardHeader>
            <Row>
              <Col md="9">
                <h4>
                  {this.state.customer.title}&nbsp;
                  {this.state.customer.firstname}&nbsp;
                  {this.state.customer.lastname}
                </h4>
              </Col>

              <Col md="3">
                <h4
                  style={{
                    color: this.state.customer.balance < 1 ? "red" : "green"
                  }}
                >
                  Balance &nbsp;
                  <i>{this.state.customer.balance}</i>
                </h4>
              </Col>
            </Row>
          </CardHeader>

          <CardBody>
            <Row>
              <Col md="3">
                <Card>
                  <CardHeader>
                    <div style={{width:200, height:200}}>
                      <Img
                        src={[this.state.customer.photo]}
                        loader={<Loading />}
                        unloader={<div>notfound</div>}
                        decode={false}
                      />
                    </div>
                  </CardHeader>
                  <CardBody>
                    <h5>Customer ID : {this.state.customer.id}</h5>
                    <b>
                      {this.state.customer.title}&nbsp;
                      {this.state.customer.firstname}&nbsp;
                      {this.state.customer.lastname}
                    </b>
                    <address>{this.state.customer.address}</address>
                    <a
                      href={`tel://${this.state.customer.mobile}`}
                      style={{ color: "grey" }}
                    >
                      {this.state.customer.mobile}
                    </a>
                    <br />
                    <a
                      href={`mailto:${this.state.customer.email}`}
                      style={{ color: "grey" }}
                    >
                      {this.state.customer.email}
                    </a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="9">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === "1"
                      })}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      Order
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === "2"
                      })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      Parchases
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === "3"
                      })}
                      onClick={() => {
                        toggle("3");
                      }}
                    >
                      Transections
                    </NavLink>
                  </NavItem>
                </Nav>

                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">Tab one</TabPane>
                  <TabPane tabId="2">Tab two</TabPane>
                  <TabPane tabId="3">Tab 3</TabPane>
                </TabContent>
                <br />
                <div className="d-flex justify-content-around">
                  <Router>
                    <Link
                      className={`p-2 ${
                        this.state.customerId < 2 ? "d-none" : "bg-warning"
                      }`}
                      style={{ width: 100, textAlign: "center" }}
                      to={`/customer/${this.state.customerId - 1}`}
                      onClick={() => this.change(-1)}
                    >
                      Previous
                    </Link>
                    <Link
                      className={`p-2 ${
                        this.state.customerId == this.state.customer.total
                          ? "d-none"
                          : "bg-primary"
                      }`}
                      style={{ width: 100, textAlign: "center" }}
                      to={`/customer/${this.state.customerId + 1}`}
                      onClick={() => this.change(1)}
                    >
                      Next
                    </Link>
                  </Router>
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </>
    );
  }
}

export default CustomerDetails;
