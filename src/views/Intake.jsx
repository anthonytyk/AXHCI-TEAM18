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
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_frozen from "@amcharts/amcharts4/themes/frozen";
import * as am4maps from "@amcharts/amcharts4/maps"
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline"; 
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets"; 
import ApexCharts from 'apexcharts'
import ReactApexChart from "react-apexcharts";

import './vars.js'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import { strict } from "assert";

function generateData(month, days, intake) {
  var i = 0;
  var series = [];
  while (i < days) {

    if(i > 3 && month == 'December') {
      if(i == 3) {
        var x = '' + (i + 1).toString();
        var y = Math.floor(Math.random() * (intake.max - intake.min + 1)) + intake.min;
        series.push({
          x: x,
          y: 2048
        });
      }
      else {
        var x = '' + (i + 1).toString();
        var y = Math.floor(Math.random() * (intake.max - intake.min + 1)) + intake.min;
        series.push({
          x: x,
          y: 0
        });
      }
    }

    else if (i > 27 && month == 'Februrary'){
      var x = '' + (i + 1).toString();
      var y = Math.floor(Math.random() * (intake.max - intake.min + 1)) + intake.min;
      series.push({
        x: x,
        y: 0
      });
    }

    else if (i > 29 && month == 'April' || i > 29 && month == 'June' || i > 29 && month == 'September' || i > 29 && month == 'November'){ 
      var x = '' + (i + 1).toString();
      var y = Math.floor(Math.random() * (intake.max - intake.min + 1)) + intake.min;
      series.push({
        x: x,
        y: 0
      });
    }

    else {
      var x = '' + (i + 1).toString();
      var y = Math.floor(Math.random() * (intake.max - intake.min + 1)) + intake.min;
      series.push({
        x: x,
        y: y
      });
    }
    i++;
  }
  return series;
}


class Intake extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    options: {
      annotations: {
        yaxis: [{
          y: 2500,
          borderColor: '#222831',
          label: {
            borderColor: '#222831',
            style: {
              color: '#fff',
              background: '#222831',
            },
            text: 'Target Limit',
          }
        }]
      },
        colors: ["#fc5185", "#3fc1c9", "#364f6b"],
        chart: {
        zoom: {
          enabled: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5]
      },

      markers: {
        size: 0,
        
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        categories: ['28 Nov', '29 Nov', '30 Nov', '01 Dec', '02 Dec', '03 Dec', '04 Dec'],
      },
      tooltip: {
        y: [{
          title: {
            formatter: function (val) {
              return val;
            }
          }
        }, {
          title: {
            formatter: function (val) {
              return ("Calories Intake from " + val);
            }
          }
        }, {
          title: {
            formatter: function (val) {
              return ("Calories Burn from " + val);
            }
          }
        }]
      },
      grid: {
        borderColor: '#f1f1f1',
      }
      },
      series: [{
        name: "Total Calories",
        data: [2525, 2698, 1600, 2719, 2035, 1536, 2048]
      },
      {
        name: "Food",
        data: [2701, 2892, 2102, 3021, 2105, 1987, 2415]
      },
      {
        name: 'Exercise',
        data: [176, 194, 502, 302, 70, 451, 367]
      }
    ],

      options1: {
        plotOptions: {
          heatmap: {
            enableShades: false,
            colorScale: {
              ranges: [{
                  from: 0,
                  to: 0,
                  name: 'No data',
                  color: '#c9d1d3'
                },
                {
                  from: 1,
                  to: 2499,
                  name: 'Below Limit',
                  color: '#3fc1c9'
                },
                {
                  from: 2499,
                  to: 3000,
                  name: 'Exceeded Limit',
                  color: '#fc5185'
                }
              ]
            }
          }
        },

        chart: {
          toolbar: {
            show: false
          },
          events: {
            dataPointSelection: function (e, chart, opts) {
              global.e = e;
              global.chart = chart;
              global.opts = opts;
              global.value = e.target.getAttribute("val");
              //var el = e.target;
              //var seriesIndex = parseInt(el.getAttribute("i"));
              //var dataPointIndex = parseInt(el.getAttribute("j"));
             // var seriesNames = opts.global.seriesNames[seriesIndex];
              //global.value = opts.w.globals.labels[e.target.attributes];
              //global.value = e.target;
          }   
        }
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#fe5b00"]
      },
      series1: [
        {
          name: 'Janurary',
          data: generateData('January', 31, {
            min: 900,
            max: 2700
          })
        },
        {
          name: 'Februrary',
          data: generateData('Februrary', 31, {
            min: 900,
            max: 2700
          })
        },
        {
          name: 'March',
          data: generateData('March', 31, {
            min: 900,
            max: 2700
          })
        },
        {
          name: 'April',
          data: generateData('April', 31, {
            min: 900,
            max: 2700
          })
        },
        {
          name: 'May',
          data: generateData('May', 31, {
            min: 900,
            max: 2700
          })
        },
        {
          name: 'June',
          data: generateData('June', 31, {
            min: 900,
            max: 2700
          })
        },
        {
          name: 'July',
          data: generateData('July', 31, {
            min: 900,
            max: 2700
          })
        },
        {
          name: 'August',
          data: generateData('August', 31, {
            min: 900,
            max: 2700
          })
        },
        {
          name: 'September',
          data: generateData('September', 31, {
            min: 900,
            max: 2700
          })
        },
        {
          name: 'October',
          data: generateData('October', 31, {
            min: 900,
            max: 2700
          })
        },
        {
          name: 'November',
          data: generateData('November', 31, {
            min: 900,
            max: 2700
          })
        },
        {
          name: 'December',
          data: generateData('December', 31, {
            min: 900,
            max: 2700
          })
        }
      ],

    }

  }

  componentDidMount(){
    var iconPath = "M53.5,476c0,14,6.833,21,20.5,21s20.5-7,20.5-21V287h21v189c0,14,6.834,21,20.5,21 c13.667,0,20.5-7,20.5-21V154h10v116c0,7.334,2.5,12.667,7.5,16s10.167,3.333,15.5,0s8-8.667,8-16V145c0-13.334-4.5-23.667-13.5-31 s-21.5-11-37.5-11h-82c-15.333,0-27.833,3.333-37.5,10s-14.5,17-14.5,31v133c0,6,2.667,10.333,8,13s10.5,2.667,15.5,0s7.5-7,7.5-13 V154h10V476 M61.5,42.5c0,11.667,4.167,21.667,12.5,30S92.333,85,104,85s21.667-4.167,30-12.5S146.5,54,146.5,42 c0-11.335-4.167-21.168-12.5-29.5C125.667,4.167,115.667,0,104,0S82.333,4.167,74,12.5S61.5,30.833,61.5,42.5z"
    
    // Themes begin
    am4core.useTheme(am4themes_frozen);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Chart 1
    var chart1 = am4core.create("chart1", am4charts.GaugeChart);
    chart1.hiddenState.properties.opacity = 0; // this makes initial fade in effect

    chart1.innerRadius = -25;

    var axis = chart1.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 3000;
    axis.strictMinMax = true;
    axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor("background");
    axis.renderer.grid.template.strokeOpacity = 0.3;

    var colorSet = new am4core.ColorSet();

    var range0 = axis.axisRanges.create();
    range0.value = 0;
    range0.endValue = 1200;
    range0.axisFill.fillOpacity = 1;
    range0.axisFill.fill = '#3fc1c9';
    range0.axisFill.zIndex = - 1;

    var range1 = axis.axisRanges.create();
    range1.value = 1200;
    range1.endValue = 2500;
    range1.axisFill.fillOpacity = 1;
    range1.axisFill.fill = '#3fc1c9';
    range1.axisFill.zIndex = -1;

    var range2 = axis.axisRanges.create();
    range2.value = 2500;
    range2.endValue = 3000;
    range2.axisFill.fillOpacity = 1;
    range2.axisFill.fill = '#fc5185';
    range2.axisFill.zIndex = -1;

    var hand = chart1.hands.push(new am4charts.ClockHand());

    var value = 2048;
    var day = parseInt(global.opts.dataPointIndex);
    var month = parseInt(global.opts.seriesIndex);

    day++;
    month++;

    var label1 = chart1.createChild(am4core.Label);
    label1.text = "Intake for " + "4" + "/" + "12" + "/2019: " + "2048";
    label1.isMeasured = false;
    label1.y = am4core.percent(0);
    label1.x = am4core.percent(50);
    label1.horizontalCenter = "middle";
    label1.fontSize = 20;

    hand.showValue(value, am4core.ease.cubicOut);

    //chart2
    // Create chart instance
    var chart2 = am4core.create("chart2", am4charts.RadarChart);

    if (parseInt(global.value) == 0) {
      steps = 0;
      vigorous = 0;
    }
    else {
      var steps = (3 + 1) * 3;
      var vigorous = (11 + 1) * 9;
      if (vigorous > 100) {
        vigorous = 100;
      }

    }
    // Add data
    chart2.data = [{
      "category": "Vigorous",
      "value": vigorous,
      "full": 100
    }, {
      "category": "Steps",
      "value": steps,
      "full": 100       
    }];

    var label2 = chart2.createChild(am4core.Label);
    label2.text = "Percentage of Target Met" + "\n" + "4" + "/" + "12" + "/2019";
    label2.isMeasured = false;
    label2.y = am4core.percent(0);
    label2.x = am4core.percent(0);
    label2.horizontalCenter = "left";
    label2.fontSize = 20;

    // Make chart not full circle
    chart2.startAngle = -90;
    chart2.endAngle = 180;
    chart2.innerRadius = am4core.percent(20);

    // Set number format
    chart2.numberFormatter.numberFormat = "#.#'%'";

    // Create axes
    var categoryAxis = chart2.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.fontWeight = 500;
    categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
      return (target.dataItem.index >= 0) ? chart2.colors.getIndex(target.dataItem.index) : fill;
    });
    categoryAxis.renderer.minGridDistance = 10;

    var valueAxis = chart2.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;

    // Create series
    var series1 = chart2.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = "full";
    series1.dataFields.categoryY = "category";
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    series1.columns.template.fillOpacity = 0.08;
    series1.columns.template.cornerRadiusTopLeft = 20;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 20;

    var series2 = chart2.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = "value";
    series2.dataFields.categoryY = "category";
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series2.columns.template.radarColumn.cornerRadius = 20;

    series2.columns.template.adapter.add("fill", function(fill, target) {
      return chart2.colors.getIndex(target.dataItem.index);
    });

    // Add cursor
    chart2.cursor = new am4charts.RadarCursor();

    this.chart2 = chart2;

    this.updateSeries = (e,chart,opts) => {

      var iconPath = "M53.5,476c0,14,6.833,21,20.5,21s20.5-7,20.5-21V287h21v189c0,14,6.834,21,20.5,21 c13.667,0,20.5-7,20.5-21V154h10v116c0,7.334,2.5,12.667,7.5,16s10.167,3.333,15.5,0s8-8.667,8-16V145c0-13.334-4.5-23.667-13.5-31 s-21.5-11-37.5-11h-82c-15.333,0-27.833,3.333-37.5,10s-14.5,17-14.5,31v133c0,6,2.667,10.333,8,13s10.5,2.667,15.5,0s7.5-7,7.5-13 V154h10V476 M61.5,42.5c0,11.667,4.167,21.667,12.5,30S92.333,85,104,85s21.667-4.167,30-12.5S146.5,54,146.5,42 c0-11.335-4.167-21.168-12.5-29.5C125.667,4.167,115.667,0,104,0S82.333,4.167,74,12.5S61.5,30.833,61.5,42.5z"
    
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Chart 1
      var chart1 = am4core.create("chart1", am4charts.GaugeChart);
      chart1.hiddenState.properties.opacity = 0; // this makes initial fade in effect

      chart1.innerRadius = -25;

      var axis = chart1.xAxes.push(new am4charts.ValueAxis());
      axis.min = 0;
      axis.max = 3000;
      axis.strictMinMax = true;
      axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor("background");
      axis.renderer.grid.template.strokeOpacity = 0.3;

      var colorSet = new am4core.ColorSet();

      var range0 = axis.axisRanges.create();
      range0.value = 0;
      range0.endValue = 1200;
      range0.axisFill.fillOpacity = 1;
      range0.axisFill.fill = '#3fc1c9';
      range0.axisFill.zIndex = - 1;

      var range1 = axis.axisRanges.create();
      range1.value = 1200;
      range1.endValue = 2500;
      range1.axisFill.fillOpacity = 1;
      range1.axisFill.fill = '#3fc1c9';
      range1.axisFill.zIndex = -1;

      var range2 = axis.axisRanges.create();
      range2.value = 2500;
      range2.endValue = 3000;
      range2.axisFill.fillOpacity = 1;
      range2.axisFill.fill = '#fc5185';
      range2.axisFill.zIndex = -1;

      var hand = chart1.hands.push(new am4charts.ClockHand());

      var value = parseInt(global.value);
      var day = parseInt(global.opts.dataPointIndex);
      var month = parseInt(global.opts.seriesIndex);

      day++;
      month++;

      var label1 = chart1.createChild(am4core.Label);
      label1.text = "Intake for " + day + "/" + month + "/2019: " + value;
      label1.isMeasured = false;
      label1.y = am4core.percent(0);
      label1.x = am4core.percent(50);
      label1.horizontalCenter = "middle";
      label1.fontSize = 20;

      hand.showValue(value, am4core.ease.cubicOut);

      //chart2
      // Create chart instance
      var chart2 = am4core.create("chart2", am4charts.RadarChart);

      if (parseInt(global.value) == 0) {
        steps = 0;
        vigorous = 0;
      }
      else {
        var steps = (parseInt(global.opts.dataPointIndex) + 1) * 3;
        var vigorous = (parseInt(global.opts.seriesIndex) + 1) * 9;
        if (vigorous > 100) {
          vigorous = 100;
        }
      }
      // Add data
      chart2.data = [{
        "category": "Vigorous",
        "value": vigorous,
        "full": 100
      }, {
        "category": "Steps",
        "value": steps,
        "full": 100       
      }];

      var label2 = chart2.createChild(am4core.Label);
      label2.text = "Percentage of Target Met" + "\n" + day + "/" + month + "/2019";
      label2.isMeasured = false;
      label2.y = am4core.percent(0);
      label2.x = am4core.percent(0);
      label2.horizontalCenter = "left";
      label2.fontSize = 20;

      // Make chart not full circle
      chart2.startAngle = -90;
      chart2.endAngle = 180;
      chart2.innerRadius = am4core.percent(20);

      // Set number format
      chart2.numberFormatter.numberFormat = "#.#'%'";

      // Create axes
      var categoryAxis = chart2.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "category";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.grid.template.strokeOpacity = 0;
      categoryAxis.renderer.labels.template.horizontalCenter = "right";
      categoryAxis.renderer.labels.template.fontWeight = 500;
      categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
        return (target.dataItem.index >= 0) ? chart2.colors.getIndex(target.dataItem.index) : fill;
      });
      categoryAxis.renderer.minGridDistance = 10;

      var valueAxis = chart2.xAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.grid.template.strokeOpacity = 0;
      valueAxis.min = 0;
      valueAxis.max = 100;
      valueAxis.strictMinMax = true;

      // Create series
      var series1 = chart2.series.push(new am4charts.RadarColumnSeries());
      series1.dataFields.valueX = "full";
      series1.dataFields.categoryY = "category";
      series1.clustered = false;
      series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
      series1.columns.template.fillOpacity = 0.08;
      series1.columns.template.cornerRadiusTopLeft = 20;
      series1.columns.template.strokeWidth = 0;
      series1.columns.template.radarColumn.cornerRadius = 20;

      var series2 = chart2.series.push(new am4charts.RadarColumnSeries());
      series2.dataFields.valueX = "value";
      series2.dataFields.categoryY = "category";
      series2.clustered = false;
      series2.columns.template.strokeWidth = 0;
      series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
      series2.columns.template.radarColumn.cornerRadius = 20;

      series2.columns.template.adapter.add("fill", function(fill, target) {
        return chart2.colors.getIndex(target.dataItem.index);
      });

      // Add cursor
      chart2.cursor = new am4charts.RadarCursor();

      this.chart2 = chart2;


      this.setState({
        series2:this.state.newseries
      })

      if(global.opts.dataPointIndex != undefined){
        document.getElementById('nutri_intake').scrollIntoView();
      } 
    }
  }

  componentWillUnmount() {
    if (this.chart1) {
      this.chart1.dispose();
    }

    if (this.chart2) {
      this.chart2.dispose();
    }
  }


  render() {
    const { showing } = this.state;
    return (
      <>
        <div className="content">
        <Row>
            <Col lg="6" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="2" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 " />
                      </div>
                    </Col>
                    <Col md="10" xs="7">
                      <div className="numbers">
                        <p className="card-category">Daily Calorie Limit</p>
                        <CardTitle tag="p">2048 / 2500</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="2" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-user-run" />
                      </div>
                    </Col>
                    <Col md="10" xs="7">
                      <div className="numbers">
                        <p className="card-category">Daily Exercise Goal</p>
                        <CardTitle tag="p"><font color= '#fc5185'>8,800 Steps Left!</font></CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Progress for Past 7 Days</CardTitle>
                </CardHeader>
                <CardBody>
                  <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="350" />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Year 2019</CardTitle>
                </CardHeader>
                <CardBody>
                  <div id="chart">
                    <ReactApexChart onClick={() => this.updateSeries()} options={this.state.options1} series={this.state.series1} type="heatmap" height="350" />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col id="nutri_intake" md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Weekly Calorie Intake</CardTitle>
                </CardHeader>
                <CardBody>
                  <div id="chart1" style={{ width: "100%", height: "500px" }}>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Exercise Monitoring</CardTitle>
                </CardHeader>
                <CardBody>
                  <div id="chart">
                  <div id="chart2" style={{ width: "100%", height: "500px" }}>
                  </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </div>
      </>
    );
  }
}

export default Intake;
