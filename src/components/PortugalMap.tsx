import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import geoData from '../assets/portugal-regions.json';

const PortugalMap: React.FC = () => {
  const [tooltipContent, setTooltipContent] = useState('');

  useEffect(() => {
   
  }, [tooltipContent]);

  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '100%',
      paddingLeft: '20px',
      position: 'relative' 
    }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [-8, 39.9],
          scale: 4000,
        }}
        style={{ 
          width: '100%',
          height: '600px',
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: '-32',
        }}
      >
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isPortugal = geo.properties.id.startsWith('PT');
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  data-tooltip-id={isPortugal ? "my-tooltip" : undefined}
                  data-tooltip-content={isPortugal ? geo.properties.name : undefined}
                  onMouseEnter={() => {
                    if (isPortugal) {
                      const { name } = geo.properties;
                      setTooltipContent(name);
                    }
                  }}
                  onMouseLeave={() => {
                    if (isPortugal) {
                      setTooltipContent('');
                    }
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
      <ReactTooltip
        id="my-tooltip"
        place="top"
      />
    </div>
  );
};

export default PortugalMap;
