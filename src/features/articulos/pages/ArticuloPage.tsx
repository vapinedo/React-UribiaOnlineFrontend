import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useArticuloStore from '@stores/useArticuloStore';
import { Articulo } from '@features/articulos/models/Articulo';

const ArticuloPage = () => {
    const { id } = useParams();
    const { getArticulo, loading, error } = useArticuloStore();
    const [articulo, setArticulo] = useState<Articulo | undefined>(undefined);

    useEffect(() => {
        if (id) {
            const nuevoArticulo = getArticulo(id);
            setArticulo(nuevoArticulo);
        }
    }, [getArticulo, id]);

    return (
        <div>
            {loading ? (
                <p>Cargando articulo...</p>
            ) : error ? (
                <p>Error al cargar articulo: {error}</p>
            ) : articulo ? (
                <article className="card">
                    <img className="card-img-top" src={articulo.imagenURLs[0]} alt={articulo.nombre} />
                    <div className="card-body">
                        <p className="text-muted" style={{ fontSize: "1.3rem", marginBottom: "10px" }}>{articulo.nombre}</p>
                        <h4 className="card-text">$ {articulo.precio}</h4>
                        <p className="card-text badge text-bg-success">{articulo.estadoArticulo}</p>
                        <small className="text-muted">Publicado hace 1 hora</small>
                    </div>
                </article>
            ) : (
                <p>No se encontró articulo con ID {id}</p>
            )}
        </div>
    );
};

export default ArticuloPage;
