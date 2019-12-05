import React from 'react';
import VectorMap, {
  Export,
  Label,
  Layer,
  Legend,
  Source,
  Title,
  Tooltip
} from 'devextreme-react/vector-map';
import "assets/css/world.css";
import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';
import { populations, markers } from './data.js';
import TooltipTemplate from './TooltipTemplate.js';

const sizeGroups = [0, 8000, 10000, 50000];
const colorGroups = [0, 5, 10, 15, 20, 25];
const palette= ['#fbe3b9 ', '#e6e56c ','#fec771 ','#64e291 ',	'#eb7070'] //color palette for map

export default function App() {
  return (
    <div className="content" >
      <div id="#vector-map" height="750px">
        <VectorMap
          
          elementAttr={{ id: 'vector-map' }} bounds={[-180, 85, 180, -60]}>
          <Layer
            name="areas"
            dataSource={mapsData.world}
            colorGroups={colorGroups}
            colorGroupingField="population"
            customize={customizeLayer}
            palette={palette}
            color="#e5dfdf" // color for no data
            hoverEnabled={true}
          >
            <Label dataField="name" enabled={true} />
          </Layer>

          <Legend
            title={'Death % caused by Obesity'}

            horizontalAlignment="left"
            verticalAlignment="bottom"
            customizeItems={customizeItems}
            customizeText={customizeText}
           
          >
            <Source layer="areas" grouping="color"></Source>
          </Legend>

          <Title text="Overview of Death caused by Obesity in 2017">
            
          </Title>

          <Label enabled={true} dataField="name"></Label>
          <Layer
            dataSource={markers}
            name="markers"
            elementType="bubble"
            dataField="value"
            sizeGroups={sizeGroups}
            color='#e6e56c' // color for marker (Singapore)
            minSize ={10}
            maxSize ={10}
            opacity="1.0">
            <Label enabled={true}></Label>
          </Layer>
          
          <Tooltip enabled={true}
            customizeTooltip={customizeTooltip} />

          <Tooltip enabled={true}
            contentRender={TooltipTemplate} />
          <Export enabled={true} />
        </VectorMap>
      </div>
    </div>
  );
}


function customizeText(arg) {
  let text;
  if (arg.index === 0) {
    text = '< 5%';
  } else if (arg.index === 4) {
    text = '> 20%';
  } else {
    text = `${arg.start}% to ${arg.end}%`;
  }
  return text;
}

function customizeTooltip(arg) {
    return {
      text: arg.attribute('tooltip')
    };
}

function customizeItems(items) {
  return items.reverse();
}

function customizeLayer(elements) {
  elements.forEach((element) => {
    let name = element.attribute('name'),
      population = populations[name];
    if (population) {

      element.attribute('population', population);
    }
  });
}
