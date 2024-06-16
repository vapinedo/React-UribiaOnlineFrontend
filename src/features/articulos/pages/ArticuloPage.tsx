import { Helmet } from 'react-helmet';
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
            const fetchArticulo = async () => {
                try {
                    const nuevoArticulo = await getArticulo(id);
                    setArticulo(nuevoArticulo);
                } catch (error) {
                    console.error('Error al cargar el artículo:', error);
                }
            };
            fetchArticulo();
        }
    }, [getArticulo, id]);

    if (loading) {
        return <p>Cargando artículo...</p>;
    }

    if (error) {
        return <p>Error al cargar artículo</p>;
    }

    if (!articulo) {
        return <p>No se encontró artículo con ID {id}</p>;
    }

    return (
        <div>
            <Helmet>
                <title>{articulo.nombre} - Detalles del Artículo</title>
                <meta property="og:title" content={`${articulo.nombre} - Detalles del Artículo`} />
                <meta property="og:description" content={`Precio: $${articulo.precio}. Estado: ${articulo.estadoArticulo}`} />
                <meta property="og:image" content={articulo.imagenURLs[0]} />
                <meta property="og:url" content={`https://vapinedo.github.io/React-UribiaOnlineFrontend/articulo/${id}`} />
                <meta property="og:type" content="article" />
            </Helmet>
            
            <article className="card">
                <img className="card-img-top" src={articulo.imagenURLs[0]} alt={articulo.nombre} />
                <div className="card-body">
                    <p className="text-muted" style={{ fontSize: "1.3rem", marginBottom: "10px" }}>{articulo.nombre}</p>
                    <h4 className="card-text">$ {articulo.precio}</h4>
                    <p className="card-text badge text-bg-success">{articulo.estadoArticulo}</p>
                    <small className="text-muted">Publicado hace 1 hora</small>
                </div>
            </article>
        </div>
    );
};

export default ArticuloPage;
