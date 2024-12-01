import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import geoData from '../../assets/madeira.json';


type MadeiraMapProps = {
  tooltipId: string;
  selectedRegion: string | null;
  setSelectedRegion: (region: string | null) => void;
};

const MadeiraMap: React.FC<MadeiraMapProps> = ({
    tooltipId,
    selectedRegion,
    setSelectedRegion,
  }) => {

  const [tooltipContent, setTooltipContent] = useState('');

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [-16.9, 32.7],
          scale: 7000,
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isMadeira = geo.properties.id.startsWith('MD');
              const regionId = geo.properties.id;
              const isSelected = selectedRegion === regionId;

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
                  onClick={() => {
                    if (isMadeira) {
                      setSelectedRegion(regionId)};
                    }
                  }
                  style={{
                    default: {
                      fill: isMadeira ? (isSelected ? '#ff6961' : '#73cfee') : '#033681',
                      cursor: 'pointer',
                      stroke: '#1d4777',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    hover: {
                      fill: isMadeira ? (isSelected ? '#ff6961' : '#3399ff') : '#033681',
                      cursor: 'pointer',
                      stroke: '#1d4777',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    pressed: {
                      fill: isMadeira ? (isSelected ? '#ff6961' : '#3399ff') : '#033681',
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
      <ReactTooltip id={tooltipId} place="top" className='font-bold'/>
    </div>
  );
};

export default MadeiraMap;
