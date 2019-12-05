import React from "react";
import { obesityCountries } from "./data.js";
import { populations } from "./data.js";
import LineChart from "./LineChartComponent.js";

function getObesityData(name) {
  return obesityCountries[name]
    ? [
        { name: "2006", value: obesityCountries[name].year2006 },
        { name: "2007", value: obesityCountries[name].year2007 },
        { name: "2008", value: obesityCountries[name].year2008 },
        { name: "2009", value: obesityCountries[name].year2009 },
        { name: "2010", value: obesityCountries[name].year2010 },
        { name: "2011", value: obesityCountries[name].year2011 },
        { name: "2012", value: obesityCountries[name].year2012 },
        { name: "2013", value: obesityCountries[name].year2013 },
        { name: "2014", value: obesityCountries[name].year2014 },
        { name: "2015", value: obesityCountries[name].year2015 },
        { name: "2016", value: obesityCountries[name].year2016 },
        
      ]
    : null;
}

export default function TooltipTemplate(info) {
  //const tooltip_percentage = info.attribute("percentage");
  const name = info.attribute("name");
  const obesityData = getObesityData(name); 
  const graphic = obesityData ? (
    <LineChart data={obesityData} />
  ) : (
    <div>Data Not Available</div>);
if (info.attribute("name")){
  return (
    <div>
      <h5>{info.attribute("name")}</h5>
      <b>Percentage of death caused by Obesity in 2017:</b> {populations[name]}%
      <hr></hr>
    <b>Percentage of Adults with Obesity from 2006 to 2016</b><br></br>
      <br></br>
      {graphic}
    </div>
  )}
  else {
    return (
      <div>
        <h5>Singapore</h5>
        <b>Percentage:</b> {populations["Singapore"]}%
        <hr></hr>
      <b>Percentage of Adults with Obesity from 2006 to 2016</b><br></br>
      <b>Singapore</b>
    <LineChart title="Singapore" data={getObesityData("Singapore")} />
      </div>
    )
  }
}
