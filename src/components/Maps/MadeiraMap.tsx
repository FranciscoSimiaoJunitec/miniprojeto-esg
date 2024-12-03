import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import geoData from '../../assets/portugal-regions.json';

type MadeiraMapProps = {
  tooltipId: string;
  selectedRegion: any | null;
  setSelectedRegion: (region: any | null) => void; // Updated to accept full region object
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
              const isPortugal = geo.properties.id.startsWith('PT');
              const isSelected = selectedRegion === geo.id;

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
                  onClick={() => {
                    if (isPortugal) {
                      setSelectedRegion(geo.id); // Pass full region object
                    }
                  }}
                  style={{
                    default: {
                      fill: isPortugal ? (isSelected ? '#ff6961' : '#73cfee') : '#033681',
                      cursor: isPortugal ? 'pointer' : 'default',
                      stroke: '#1d4777',
                      strokeWidth: 1,
                      outline: 'none',
                    },
                    hover: {
                      fill: isPortugal ? (isSelected ? '#ff6961' : '#3399ff') : '#033681',
                      cursor: isPortugal ? 'pointer' : 'default',
                      stroke: '#1d4777',
                      strokeWidth: 1,
                      outline: 'none',
                    },
                    pressed: {
                      fill: isPortugal ? (isSelected ? '#ff6961' : '#3399ff') : '#033681',
                      cursor: isPortugal ? 'pointer' : 'default',
                      stroke: '#1d4777',
                      strokeWidth: 1,
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <ReactTooltip id={tooltipId} place="top" className="font-bold" />
    </div>
  );
};

export default MadeiraMap;
