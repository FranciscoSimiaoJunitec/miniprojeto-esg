import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import geoData from '../assets/portugal-regions.json';

const PortugalMap: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '100%',
      paddingLeft: '20px',
    }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [-8, 39.5],
          scale: 3500,
        }}
        style={{ 
          width: '100%',
          height: '600px',
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: '-50',
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
                  style={{
                    default: {
                      fill: isPortugal ? '#73cfee' : '#033681', 
                      stroke: '#1d4777',
                      strokeWidth: 0.5,
                      outline: 'none : none',
                    },
                    hover: {
                      fill: isPortugal ? '#3399ff' : '#033681',
                      stroke: '#1d4777',
                      strokeWidth: 0.5,
                      outline: 'none : none',
                    },
                    // pressed: {
                    //   fill: isPortugal ? '#0066cc' : '#033681',
                    //   stroke: '#1d4777',
                    //   strokeWidth: 0.5,
                    //   outline: 'none : none',
                    // },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default PortugalMap;
