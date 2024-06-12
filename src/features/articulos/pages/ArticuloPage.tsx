import { useEffect, useState } from 'react';
import { getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import useArticuloStore from '@stores/useArticuloStore';
import { Articulo } from '@features/articulos/models/Articulo';

declare module '@features/articulos/models/Articulo' {
    interface Articulo {
        barrioNombre?: string;
    }
}

const ArticuloPage = () => {
    const { id } = useParams();
    const [barrio, setBarrio] = useState<any>(null);
    const { getArticulo, loading, error } = useArticuloStore();
    const [articulo, setArticulo] = useState<Articulo | undefined>(undefined);

    useEffect(() => {
        if (id) {
            const nuevoArticulo = getArticulo(id);
            setArticulo(nuevoArticulo);
            if (nuevoArticulo?.barrioRef) {
                getDoc(nuevoArticulo.barrioRef).then((doc) => {
                    if (doc.exists()) {
                        setBarrio(doc.data());
                    } else {
                        console.log("No such document!");
                    }
                }).catch((error) => {
                    console.error("Error getting document:", error);
                });
            }
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
                        {/* <p className="card-text mb-2">Barrio {barrio}</p> */}
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
