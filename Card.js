import React from 'react';

const Card = ({ professor }) => {
  const abrirCurriculo = () => {
    const novaJanela = window.open(professor.botao, '_blank');
    novaJanela.focus();
  };

  return (
    <div className="card">
      <img src={professor.foto} alt={professor.nome} />
      <h2>{professor.nome}</h2>
      <p>{professor.formacao}</p>
      <button onClick={abrirCurriculo}>Ver Currículo</button>
    </div>
  );
};

export default Card;
