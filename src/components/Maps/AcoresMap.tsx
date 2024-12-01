import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import geoData from '../../assets/acores.json';


type AcoresMapProps = {
  tooltipId: string;
  selectedRegion: string | null;
  setSelectedRegion: (region: string | null) => void;
};

const AcoresMap: React.FC<AcoresMapProps> = ({
  tooltipId,
  selectedRegion,
  setSelectedRegion,
}) => {

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
                const isAcores = geo.properties.id.startsWith('AC');
                const regionId = geo.properties.id;
                const isSelected = selectedRegion === regionId;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    data-tooltip-id={tooltipId} 
                    data-tooltip-content={isAcores ? geo.properties.name : undefined}
                    onMouseEnter={() => {
                      if (isAcores) {
                        setTooltipContent(geo.properties.name);
                      }
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('');
                    }}
                    onClick={() => {
                      if (isAcores) {
                        setSelectedRegion(regionId)};
                      }
                    }
                    style={{
                      default: {
                        fill: isAcores ? (isSelected ? '#ff6961' : '#73cfee') : '#033681',
                        cursor: 'pointer',
                        stroke: '#1d4777',
                        strokeWidth: 0.5,
                        outline: 'none',
                      },
                      hover: {
                        fill: isAcores ? (isSelected ? '#ff6961' : '#3399ff') : '#033681',
                        cursor: 'pointer',
                        stroke: '#1d4777',
                        strokeWidth: 0.5,
                        outline: 'none',
                      },
                      pressed: {
                        fill: isAcores ? (isSelected ? '#ff6961' : '#3399ff') : '#033681',
                        cursor: 'pointer',
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
      </div>
      <ReactTooltip id={tooltipId} place="top" className='font-bold'/>
    </div>
  );
};

export default AcoresMap;
