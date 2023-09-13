import React, { useEffect, useState } from 'react';
import Card from './Card';

const CorpoDocente = () => {
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setProfessores(data.professores))
      .catch((error) => console.error('Erro ao carregar dados:', error));
  }, []);

  return (
    <div className="corpo-docente">
      <h1>Corpo Docente</h1>
      <div className="card-container">
        {professores.map((professor, index) => (
          <Card key={index} professor={professor} />
        ))}
      </div>
    </div>
  );
};

export default CorpoDocente;
