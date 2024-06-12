import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const barrioNombre = articulo.barrioNombre || '';

  const handleDetail = () => {
    navigate(`/articulo/${articulo.id}`);
  };

  const handleShare = () => {
    const articleUrl = encodeURIComponent(window.location.href);
    console.log({ articleUrl });
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`;
    window.open(facebookShareUrl, '_blank');
  };

  return (
    <article className="card">
      <img className="card-img-top" src={articulo.imagenURLs[0]} alt={articulo.nombre} />
      <div className="card-body">
        <p className="text-muted" style={{ fontSize: "1.3rem", marginBottom: "10px" }}>{articulo.nombre}</p>
        <h4 className="card-text">$ {articulo.precio}</h4>
        <p className="card-text badge text-bg-success">{articulo.estadoArticulo}</p>
        <p className="card-text mb-2">Barrio {barrioNombre}</p>
        <small className="text-muted">Publicado hace 1 hora</small>
        <hr />

        <button className="btn btn-sm btn-primary" style={{ marginRight: "10px" }} onClick={handleDetail}>
          Ver Detalles
        </button>

        <button className="btn btn-sm btn-outline-primary" onClick={handleShare}>
          <i className='bx bxl-facebook'></i> Compartir
        </button>
      </div>
    </article>
  );
}

export default ArticuloCard;
