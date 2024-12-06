import React, { useState } from 'react';
import allInstitutions from '../assets/allInstitutions.json';

type InstitutionBoardProps = {
  regionID: number | null; // Array of institutions passed as props
  filter: string | null; // Filter selected by the user
};

const InstitutionBoard: React.FC<InstitutionBoardProps> = ({ regionID, filter }) => {
  const [selectedInstitution, setSelectedInstitution] = useState<any | null>(null);

  const region = allInstitutions.find((region) => region.id === regionID);

  const getNoAssociationsMessage = () => {
    if (filter === 'Cultural') {
      return `Sê o primeiro a ajudar-nos a apoiar associações culturais em ${region?.region || 'esta região'}!`;
    } else if (filter === 'Ambiental') {
      return `Sê o primeiro a ajudar-nos a apoiar associações ambientais em ${region?.region || 'esta região'}!`;
    } else if (filter === 'Animal') {
      return `Sê o primeiro a ajudar-nos a apoiar associações de ajuda animal em ${region?.region || 'esta região'}!`;
    } else if (filter === 'Social') {
      return `Sê o primeiro a ajudar-nos a apoiar associações de ajuda social em ${region?.region || 'esta região'}!`;
    } else {
      return `Sê o primeiro a ajudar-nos a apoiar associações em ${region?.region}!`;
    }
  };

  if (selectedInstitution) {
    return (
      (selectedInstitution.name) &&
      <div className="relative p-6 border m-4 border-gray-300 rounded-md shadow-md">
        <button
          onClick={() => setSelectedInstitution(null)}
          className="absolute right-6 text-5xl text-gray-400 px-3 py-1 rounded hover:bg-gray-200 hover:text-white"
        >
          &times;
        </button>
        <div className='flex flex-col items-center justify-center text-center'>
          <img
            src={`${process.env.PUBLIC_URL}/logos/${selectedInstitution.name}.jpg`}
            alt="Institution"
            className="w-32 rounded-md mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">{selectedInstitution.name}</h1>
          <p className="mb-2 text-xs text-center">{selectedInstitution.description}</p>
          <a
            href={selectedInstitution.website}
            target="_blank"
            rel="noreferrer"
            className="text-xs hover:underline mb-2"
          >
            {selectedInstitution.website}
          </a>
          {selectedInstitution.phone && (
            <div className="flex flex-row text-xs mb-2">
              Tel: 
              <a
                href={`tel:${selectedInstitution.phone}`}
                target="_blank"
                rel="noreferrer"
                className="hover:underline pl-1"
              >
                {selectedInstitution.phone}
              </a>
            </div>
          )}
          {selectedInstitution.email && (
            <div className="flex flex-row text-xs mb-2">Email:
              <a
                href={`mailto:${selectedInstitution.email}`}
                target="_blank"
                rel="noreferrer"
                className="hover:underline pl-1"
              >
                {selectedInstitution.email}
              </a>
            </div>
          )}
          {selectedInstitution.donations && (
            <>
              <h2 className="font-bold mb-2">Donativos</h2>
              {selectedInstitution.donations.map((donation: string) => (
                (donation.startsWith('http')) ?
                  <a
                    href={donation}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs hover:underline mb-2"
                  >
                    {donation}
                  </a>
                :
                  <p className="text-xs mb-2">{donation}</p>
              ))}
            </>
          )}  
        </div>
      </div>
    );
  }

  const institutions = regionID === 0 
  ? allInstitutions 
  : allInstitutions.filter((institution) => institution.id === regionID);

  const filteredInstitutions = filter 
    ? institutions.filter((institution) => institution.type === filter)
    : institutions;

  return (
    <div className="overflow-y-auto max-h-96 p-4 border m-6 border-gray-300 rounded-md shadow-md">
      {(filteredInstitutions.length === 0 || !filteredInstitutions[0].name) ? (
        <p className="text-center text-xl font-semibold">
          {getNoAssociationsMessage()}
        </p>
      ) : (
        <div key={regionID} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredInstitutions.map((institution) => (
            (institution.name) &&
            <div
              onClick={() => setSelectedInstitution(institution)}
              className="w-full flex items-center justify-center cursor-pointer hover:scale-105 hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:rounded-lg transition-transform"
            >
              <img
                src={`${process.env.PUBLIC_URL}/logos/${institution.name}.jpg`}
                alt="Institution"
                className="p-4 transition-transform"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstitutionBoard;