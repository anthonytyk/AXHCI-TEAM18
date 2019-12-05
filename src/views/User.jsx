/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_frozen from "@amcharts/amcharts4/themes/frozen";
import * as am4maps from "@amcharts/amcharts4/maps"
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline"; 
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets"; 
import ApexCharts from 'apexcharts'
import ReactApexChart from "react-apexcharts";


class User extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        yaxis: {
          min: 24.5
        },
        annotations: {
          yaxis: [{
            y: 24.9,
            borderColor: '#3fc1c9',
            label: {
              borderColor: '#3fc1c9',
              style: {
                color: '#fff',
                background: '#3fc1c9',
              },
              text: 'Target BMI',
            }
          }]
        },
        colors:['#364f6b'],
        chart: {
              zoom: {
                  enabled: false
              }
          },
          dataLabels: {
              enabled: false
          },
          stroke: {
              curve: 'straight'
          },
          title: {
              text: 'BMI Trend',
              align: 'left'
          },
          grid: {
              row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
              },
          },

          xaxis: {
              categories: ['June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          }
      },
      series: [{
          name: "BMIs",
          data: [27.1, 26.99, 26.92, 26.64, 26.32, 26.01, 25.95]
      }],
    }
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/school.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/monkey.jpg")}
                      />
                      <h5 className="title">Sean Lee</h5>
                    </a>
                    Male
                    <br></br>
                    <p className="description">@axhci2019</p>
                  </div>
                  <p className="description text-center">
                    "I am feeling so motivated!" <br />
                  </p>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col className="ml-auto" lg="3" md="6" xs="6">
                        <h5>
                          338 <br />
                          <small>Days</small>
                        </h5>
                      </Col>
                      <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                        <h5>
                          50,027 <br />
                          <small>Calories Burned</small>
                        </h5>
                      </Col>
                      <Col className="mr-auto" lg="3">
                        <h5>
                          267 <br />
                          <small>Hours of Exercise</small>
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Connected Devices</CardTitle>
                </CardHeader>
                <CardBody>
                  <ul className="list-unstyled team-members">
                    <li>
                      <Row>
                        <Col md="8" xs="7">
                          Windows 10 <br />
                          <span className="text-success">
                            <small>This PC</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="5" xs="3">
                        </Col>
                      </Row>
                    </li>
                    <br></br>
                    <li>
                      <Row>
                        <Col md="8" xs="7">
                          Fitbit Alta Fitness Tracker <br />
                          <span className="text-muted">
                            <small>Last Sync: 4/12/2019 10:02:32 GMT+8</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="5" xs="3">
                        </Col>
                      </Row>
                    </li>
                    <br></br>
                    <li>
                      <Row>
                        <Col className="col-ms-7" xs="7">
                          Samsung Galaxy Note 9 <br />
                          <span className="text-muted">
                            <small>Last Sync: 2/12/2019 16:31:42 GMT+8</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="5" xs="3">
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>

            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Edit Profile & Daily Goals</CardTitle>
                </CardHeader>
                <CardBody>


                  <Form>
                  <Row>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <label>Calorie Intake Limit</label>
                          <Input
                            defaultValue="2500"
                            
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Exercise Duration Goal (Min)</label> 
                          <Input
                            defaultValue="30"
                            type="text"
                          /> 
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Daily Target Steps</label> 
                          <Input
                            defaultValue="10000"
                            type="text"
                          /> 
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Target BMI</label> 
                          <Input
                            defaultValue="24.9"
                            type="text"
                          /> 
                        </FormGroup>
                      </Col>

                    </Row>
                    <Row>
                    <Col className="pr-1" md="12">
                    <div id="chart">
                      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="450" />
                      </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Current Height (cm)</label>
                          <Input
                            defaultValue="170"
                            
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Current Weight (kg)</label> 
                          <Input
                            defaultValue="75"
                            type="text"
                          /> 
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Current BMI</label> 
                          <Input
                          disabled
                            defaultValue="25.95"
                            type="text"
                          /> 
                        </FormGroup>
                      </Col>

                    </Row>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Company (disabled)</label>
                          <Input
                            defaultValue="University of Glasgow"
                            disabled
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            defaultValue="axhci2019"
                            placeholder="Username"
                            disabled
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input placeholder="Email" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            defaultValue="Sean"
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            defaultValue="Lee"
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            defaultValue="123A Punggol Field #12-007"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            defaultValue="Singapore"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            defaultValue="Singapore"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input placeholder="812345" type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>About Me</label>
                          <Input
                            type="textarea"
                            defaultValue="A student trying to keep fit."
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          Update Profile
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                          className="btn-round"
                          color="danger"
                          type="submit"
                        >
                          Log Out
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default User;
