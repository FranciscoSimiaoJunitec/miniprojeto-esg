import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import geoData from '../../assets/portugal-regions.json';


type PortugalMapProps = {
  tooltipId: string;
};

const PortugalMap: React.FC<PortugalMapProps> = ({ tooltipId }) => {
  const [tooltipContent, setTooltipContent] = useState('');

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [-9, 39.9],
          scale: 4000,
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isPortugal = geo.properties.id.startsWith('PT');
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  data-tooltip-id={tooltipId} 
                  data-tooltip-content={isPortugal ? geo.properties.name : undefined}
                  onMouseEnter={() => {
                    if (isPortugal) {
                      setTooltipContent(geo.properties.name);
                    }
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('');
                  }}
                  style={{
                    default: {
                      fill: isPortugal ? '#73cfee' : '#033681',
                      stroke: '#1d4777',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    hover: {
                      fill: isPortugal ? '#3399ff' : '#033681',
                      stroke: '#1d4777',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    pressed: {
                      fill: isPortugal ? '#3399ff' : '#033681',
                      stroke: '#1d4777',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <ReactTooltip id={tooltipId} place="top" />
    </div>
  );
};

export default PortugalMap;
