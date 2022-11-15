import React from "react";
import { Card } from "antd";
const gridStyle = {
  width: "25%",
  textAlign: "center",
};

const CardPersonaje = ({ value }) => {
  if (!value) {
    return <h1>Lo sentimos , no encontramos personajes! :( </h1>;
  }
  return (
    <Card title="Busca tu Personaje favorito">
      {value.map((personaje) => (
        <Card.Grid key={personaje.id} style={gridStyle}>
          <img alt="example" src={personaje.image} className="imagen-card" />

          <h2>{personaje.name}</h2>
          <p className={personaje.status}>{personaje.status}</p>
        </Card.Grid>
      ))}
    </Card>
  );
};

export default CardPersonaje;
