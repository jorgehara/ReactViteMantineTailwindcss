import React, { useEffect, useState } from "react";

const TableOfCharacteresEjemplo = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    setDatos([
      { id: 1, nombre: "Dato 1" },
      { id: 2, nombre: "Dato 2" },
      { id: 3, nombre: "Dato 3" },
    ]);
  }, []);

  return (
    <div>
      {datos.map((dato) => (
        <p key={dato.id}>{dato.nombre}</p>
      ))}
    </div>
  );
};
export default TableOfCharacteresEjemplo;
