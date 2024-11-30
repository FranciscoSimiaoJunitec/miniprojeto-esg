import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import geoData from '../../assets/acores.json';


type AcoresMapProps = {
  tooltipId: string;
};

const AcoresMap: React.FC<AcoresMapProps> = ({ tooltipId }) => {
  const [tooltipContent, setTooltipContent] = useState('');

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <div style={{ padding: '20px' }}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            center: [-35, 37],
            scale: 2000,
          }}
          style={{ width: '100%', height: '100%' }}
        >
          <Geographies geography={geoData}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isMadeira = geo.properties.id.startsWith('AC');
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    data-tooltip-id={tooltipId} 
                    data-tooltip-content={isMadeira ? geo.properties.name : undefined}
                    onMouseEnter={() => {
                      if (isMadeira) {
                        setTooltipContent(geo.properties.name);
                      }
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('');
                    }}
                    style={{
                      default: {
                        fill: isMadeira ? '#73cfee' : '#033681',
                        stroke: isMadeira ? '#73cfee' : '#033681', 
                        strokeWidth: 3,
                        outline: 'none',
                      },
                      hover: {
                        fill: isMadeira ? '#3399ff' : '#033681',
                        stroke: isMadeira ? '#3399ff' : '#033681', 
                        strokeWidth: 3,
                        outline: 'none',
                      },
                      pressed: {
                        fill: isMadeira ? '#3399ff' : '#033681',
                        stroke: isMadeira ? '#3399ff' : '#033681',
                        strokeWidth: 3,
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
      <ReactTooltip id={tooltipId} place="top" />
    </div>
  );
};

export default AcoresMap;
