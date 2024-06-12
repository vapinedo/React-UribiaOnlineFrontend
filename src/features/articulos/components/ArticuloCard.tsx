import React from "react";
import { Articulo } from "@features/articulos/models/Articulo";

declare module '@features/articulos/models/Articulo' {
  interface Articulo {
    barrioNombre?: string;
  }
}

interface ArticuloCardProps {
  articulo: Articulo;
}

const ArticuloCard: React.FC<ArticuloCardProps> = ({ articulo }) => {
  const barrioNombre = articulo.barrioNombre || '';

  return (
    <div>
      <img src={articulo.imagenURLs[0]} />
      <header>
        <h3>{articulo.nombre}</h3>
      </header>
      <div>
        <p>$ {articulo.precio}</p>
        <p>{articulo.estadoArticulo}</p>
        <p>Barrio {barrioNombre}</p>
        <p>Publicado hace 1 hora</p>
      </div>
    </div>
  );
}

export default ArticuloCard;
