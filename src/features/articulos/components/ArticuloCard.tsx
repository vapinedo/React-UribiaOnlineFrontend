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
    <article className="card">
      <img className="card-img-top" src={articulo.imagenURLs[0]} alt={articulo.nombre} />
      <div className="card-body">
        <p className="text-muted" style={{ fontSize: "1.3rem", marginBottom: "10px" }}>{articulo.nombre}</p>
        <h4 className="card-text">$ {articulo.precio}</h4>
        <p className="card-text badge text-bg-primary">{articulo.estadoArticulo}</p>
        <p className="card-text mb-2">Barrio {barrioNombre}</p>
        <small className="text-muted">Publicado hace 1 hora</small>
      </div>
    </article>
  );
}

export default ArticuloCard;
