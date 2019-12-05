import React from "react";
import {
  Chart,
  Series,
  Label,
  AdaptiveLayout
} from "devextreme-react/chart";

function LineChartComponent({ data = [] }) {
  return (
    <Chart id="container-size" dataSource={data} animation={false}>
      <Series argumentField="name" valueField="value" color="#364f6b" >
        <Label visible={true} customizeText={customizeText}>
        </Label>
      </Series>
     <AdaptiveLayout width='100%'></AdaptiveLayout>
    </Chart>
  );
}

function customizeText(pointInfo) {
  return `${pointInfo.argument[0].toUpperCase()}${pointInfo.argument.slice(
    1
  )}: ${pointInfo.value}%`;
}

export default LineChartComponent;