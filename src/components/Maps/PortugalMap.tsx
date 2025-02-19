import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import geoData from '../../assets/portugal-regions.json';

type PortugalMapProps = {
  tooltipId: string;
  selectedRegion: any | null;
  setSelectedRegion: (region: any | null) => void; 
};

const PortugalMap: React.FC<PortugalMapProps> = ({
  tooltipId,
  selectedRegion,
  setSelectedRegion,
}) => {

  const [tooltipContent, setTooltipContent] = useState('');

  return (
    <>
      <style>
        {`
          @media (max-width: 600px) {
            .map-container {
              height: 300px; /* Adjust the height for mobile devices */
            }
          }

          @media (min-width: 601px) {
            .map-container {
              height: 600px; /* Adjust the height for larger screens */
            }
          }

          .custom-tooltip {
            background-color: rgba(214, 214, 214, 1); /* Semi-transparent color */
            border-radius: 8px; /* Rounded corners */
            padding: 10px;
            font-weight: bold;
            color: #4d73b1; /* White text color */
          }
        `}
      </style>
      <div className="map-container" style={{ height: '100%', width: '100%', position: 'relative' }}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            center: [-9, 39.9],
            scale: 4000,
          }}
          viewBox="0 0 800 600" // Adjust the viewBox to make it responsive
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
                        setSelectedRegion(geo.id);
                      }
                    }}
                    style={{
                      default: {
                        fill: isPortugal ? (isSelected ? '#D2F4FF' : '#74D1EF') : '#00277d',
                        outline: 'none',
                        stroke: isPortugal ? '#00277d' : '#00277d', // Border color
                        strokeWidth: 0.5, // Border width
                      },
                      hover: {
                        fill: isPortugal ? '#D2F4FF' : '#00277d',
                        outline: 'none',
                        stroke: isPortugal ? '#00277d' : '#00277d', // Border color
                        strokeWidth: 0.5, // Border width
                      },
                      pressed: {
                        fill: isPortugal ? '#D2F4FF' : '#00277d',
                        outline: 'none',
                        stroke: isPortugal ? '#00277d' : '#00277d', // Border color
                        strokeWidth: 0.5, // Border width
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        <ReactTooltip id={tooltipId} className="custom-tooltip" />
      </div>
    </>
  );
};

export default PortugalMap;