import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4maps from "@amcharts/amcharts4/maps"

import ApexCharts from 'apexcharts'
import ReactApexChart from "react-apexcharts";

  

    Apex = {
        chart: {
          toolbar: {
            show: false
          }
        },
        tooltip: {
          shared: false
        },
      }
  
      var colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#00D9E9', '#FF66C3'];
  
      /**
       * Randomize array element order in-place.
       * Using Durstenfeld shuffle algorithm.
       */
      function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }
  
      var arrayData = [{
        y: 400,
        quarters: [{
          x: 'Q1',
          y: 120
        }, {
          x: 'Q2',
          y: 90
        }, {
          x: 'Q3',
          y: 100
        }, {
          x: 'Q4',
          y: 90
        }]
      }, {
        y: 430,
        quarters: [{
          x: 'Q1',
          y: 120
        }, {
          x: 'Q2',
          y: 110
        }, {
          x: 'Q3',
          y: 90
        }, {
          x: 'Q4',
          y: 110
        }]
      }, {
        y: 448,
        quarters: [{
          x: 'Q1',
          y: 70
        }, {
          x: 'Q2',
          y: 100
        }, {
          x: 'Q3',
          y: 140
        }, {
          x: 'Q4',
          y: 138
        }]
      }, {
        y: 470,
        quarters: [{
          x: 'Q1',
          y: 150
        }, {
          x: 'Q2',
          y: 60
        }, {
          x: 'Q3',
          y: 190
        }, {
          x: 'Q4',
          y: 70
        }]
      }, {
        y: 540,
        quarters: [{
          x: 'Q1',
          y: 120
        }, {
          x: 'Q2',
          y: 120
        }, {
          x: 'Q3',
          y: 130
        }, {
          x: 'Q4',
          y: 170
        }]
      }, {
        y: 580,
        quarters: [{
          x: 'Q1',
          y: 170
        }, {
          x: 'Q2',
          y: 130
        }, {
          x: 'Q3',
          y: 120
        }, {
          x: 'Q4',
          y: 160
        }]
      }];
  
      function makeData() {
        var dataSet = shuffleArray(arrayData)
  
        var dataYearSeries = [{
          x: "2011",
          y: dataSet[0].y,
          color: colors[0],
          quarters: dataSet[0].quarters
        }, {
          x: "2012",
          y: dataSet[1].y,
          color: colors[1],
          quarters: dataSet[1].quarters
        }, {
          x: "2013",
          y: dataSet[2].y,
          color: colors[2],
          quarters: dataSet[2].quarters
        }, {
          x: "2014",
          y: dataSet[3].y,
          color: colors[3],
          quarters: dataSet[3].quarters
        }, {
          x: "2015",
          y: dataSet[4].y,
          color: colors[4],
          quarters: dataSet[4].quarters
        }, {
          x: "2016",
          y: dataSet[5].y,
          color: colors[5],
          quarters: dataSet[5].quarters
        }];
  
        return dataYearSeries
      }
  
      function updateQuarterChart(sourceChart, destChartIDToUpdate) {
        var series = [];
        var seriesIndex = 0;
        var colors = []
  
        if (sourceChart.w.globals.selectedDataPoints[0]) {
          var selectedPoints = sourceChart.w.globals.selectedDataPoints;
          for (var i = 0; i < selectedPoints[seriesIndex].length; i++) {
            var selectedIndex = selectedPoints[seriesIndex][i];
            var yearSeries = sourceChart.w.config.series[seriesIndex];
            series.push({
              name: yearSeries.data[selectedIndex].x,
              data: yearSeries.data[selectedIndex].quarters
            })
            colors.push(yearSeries.data[selectedIndex].color)
          }
  
          if (series.length === 0) series = [{
            data: []
          }]
  
          return ApexCharts.exec(destChartIDToUpdate, 'updateOptions', {
            series: series,
            colors: colors,
            fill: {
              colors: colors
            }
          })
  
        }
  
      }
  
      class BarChart extends React.Component {
        
        constructor(props) {
          super(props);
  
          this.state = {
            seriesQuarter: [{
              data: []
            }],
            seriesYear: [{
              data: makeData()
            }],
            chartOptionsYear: {
              chart: {
                id: 'barYear',
                height: 400,
                width: '100%',
                type: 'bar',
                events: {
                  dataPointSelection: function (e, chart, opts) {
                    var quarterChartEl = document.querySelector("#chart-quarter");
                    var yearChartEl = document.querySelector("#chart-year");
  
                    if (opts.selectedDataPoints[0].length === 1) {
                      if (quarterChartEl.classList.contains("active")) {
                        updateQuarterChart(chart, 'barQuarter')
                      } else {
                        yearChartEl.classList.add("chart-quarter-activated")
                        quarterChartEl.classList.add("active");
                        updateQuarterChart(chart, 'barQuarter')
                      }
                    } else {
                      updateQuarterChart(chart, 'barQuarter')
                    }
  
                    if (opts.selectedDataPoints[0].length === 0) {
                      yearChartEl.classList.remove("chart-quarter-activated")
                      quarterChartEl.classList.remove("active");
                    }
  
                  },
                  updated:  function (chart) {
                    updateQuarterChart(chart, 'barQuarter')
                  }
                }
              },
              plotOptions: {
                bar: {
                  distributed: true,
                  horizontal: true,
                  barHeight: '75%',
                  dataLabels: {
                    position: 'bottom'
                  }
                }
              },
              dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                  colors: ['#fff']
                },
                formatter: function (val, opt) {
                  return opt.w.globals.labels[opt.dataPointIndex]
                },
                offsetX: 0,
                dropShadow: {
                  enabled: true
                }
              },
  
              colors: colors,
            
              states: {
                normal: {
                  filter: {
                    type: 'desaturate'
                  }
                },
                active: {
                  allowMultipleDataPointsSelection: true,
                  filter: {
                    type: 'darken',
                    value: 1
                  }
                }
              },
              tooltip: {
                x: {
                  show: false
                },
                y: {
                  title: {
                    formatter: function (val, opts) {
                      return opts.w.globals.labels[opts.dataPointIndex]
                    }
                  }
                }
              },
              title: {
                text: 'Yearly Results',
                offsetX: 15
              },
              subtitle: {
                text: '(Click on bar to see details)',
                offsetX: 15
              },
              yaxis: {
                labels: {
                  show: false
                }
              }
            },
            chartOptionsQuarter: {
              chart: {
                id: 'barQuarter',
                height: 400,
                width: '100%',
                type: 'bar',
                stacked: true
              },
              plotOptions: {
                bar: {
                  columnWidth: '50%',
                  horizontal: false
                }
              },
  
              legend: {
                show: false
              },
              grid: {
                yaxis: {
                  lines: {
                    show: false,
                  }
                },
                xaxis: {
                  lines: {
                    show: true,
                  }
                }
              },
              yaxis: {
                labels: {
                  show: false
                }
              },
              title: {
                text: 'Quarterly Results',
                offsetX: 10
              },
              tooltip: {
                x: {
                  formatter: function (val, opts) {
                    return opts.w.globals.seriesNames[opts.seriesIndex]
                  }
                },
                y: {
                  title: {
                    formatter: function (val, opts) {
                      return opts.w.globals.labels[opts.dataPointIndex]
                    }
                  }
                }
              }
            },
            options: {
              chart: {
                events: {
                  click: function (chart, w, e) {
                    console.log(chart, w, e)
                  }
                },
              },
              colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'],
              plotOptions: {
                bar: {
                  columnWidth: '45%',
                  distributed: true
                }
              },
              dataLabels: {
                enabled: false,
              },
              xaxis: {
                categories: ['John', 'Joe', 'Jake', 'Amber', 'Peter', 'Mary', 'David', 'Lily'],
                labels: {
                  style: {
                    colors: colors,
                    fontSize: '14px'
                  }
                }
              }
            },
            series: [{
              data: [21, 22, 10, 28, 16, 21, 13, 30]
            }],
          }
        }
  
        changeData() {        
          Apex.exec('barYear', 'updateSeries', [{
            data: makeData()
          }])
        }
  
        render() {
          return (
            
  
            <div class="wrap">
              <select id="model" onChange={() => this.changeData()} class="flat-select">
                <option value="iphone5">iPhone 5</option>
                <option value="iphone6">iPhone 6</option>
                <option value="iphone7">iPhone 7</option>
              </select>
              <div id="chart-year" class="chart-box">
                <ReactApexChart options={this.state.chartOptionsYear} series={this.state.seriesYear} type="bar" height="350" />
              </div>
              <div id="chart-quarter" class="chart-box">
                <ReactApexChart options={this.state.chartOptionsQuarter} series={this.state.seriesQuarter} type="bar" height="350" />
              </div>
            </div>
    
  
          );
        }
      }
  
      const domContainer = document.querySelector('#app');
      ReactDOM.render(React.createElement(BarChart), domContainer);
  
    