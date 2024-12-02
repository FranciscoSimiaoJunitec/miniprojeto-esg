import React, { useState } from 'react';

type InstitutionBoardProps = {
  institutions: any[]; // Array of institutions passed as props
  filter: string | null; // Filter selected by the user
};

const InstitutionBoard: React.FC<InstitutionBoardProps> = ({ institutions, filter}) => {
  const [selectedInstitution, setSelectedInstitution] = useState<any | null>(null);

  const filteredInstitutions = filter && filter !== '---' 
  ? institutions.filter((institution) => institution.type === filter) 
  : institutions;

  if (selectedInstitution) {
    // Render a detailed panel for the selected institution
    return (
      <div className="relative p-6 border m-4 border-gray-300 rounded-md shadow-md">
        <button
          onClick={() => setSelectedInstitution(null)}
          className="absolute right-6 text-5xl text-gray-400 px-3 py-1 rounded hover:bg-gray-200 hover:text-white"
        >
          &times;
        </button>
        <div className='flex flex-col items-center justify-center text-center'>
            <img
              src={`${process.env.PUBLIC_URL}/${selectedInstitution.name}.jpg`}
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

  return (
    <div className="overflow-y-auto max-h-96 p-4 border m-6 border-gray-300 rounded-md shadow-md">
      <div className="grid grid-rows-3 grid-cols-3 gap-4">
        {filteredInstitutions.map((institution) => (
          <div
            key={institution.id}
            onClick={() => setSelectedInstitution(institution)}
            className="cursor-pointer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/${institution.name}.jpg`}
              alt="Institution"
              className="p-4 hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstitutionBoard;
