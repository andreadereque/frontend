import React from 'react';

const Filters = ({ selectedBarrio, setSelectedBarrio, selectedNota, setSelectedNota, selectedTipo, setSelectedTipo, barrios, tipos }) => {
  return (
    <div className="row mb-4">
      <div className="col-md-4">
        <label className="form-label">Barrio:</label>
        <select className="form-select" value={selectedBarrio} onChange={e => setSelectedBarrio(e.target.value)}>
          <option value=''>Todos</option>
          {barrios.map(barrio => (
            <option key={barrio} value={barrio}>{barrio}</option>
          ))}
        </select>
      </div>

      <div className="col-md-4">
        <label className="form-label">Nota mínima:</label>
        <select className="form-select" value={selectedNota} onChange={e => setSelectedNota(e.target.value)}>
          <option value=''>Todas</option>
          <option value='1'>1+</option>
          <option value='2'>2+</option>
          <option value='3'>3+</option>
          <option value='4'>4+</option>
          <option value='5'>5+</option>
        </select>
      </div>

      <div className="col-md-4">
        <label className="form-label">Tipo:</label>
        <select className="form-select" value={selectedTipo} onChange={e => setSelectedTipo(e.target.value)}>
          <option value=''>Todos</option>
          {tipos.map(tipo => (
            <option key={tipo} value={tipo}>{tipo}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
