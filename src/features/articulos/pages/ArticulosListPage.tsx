import { useEffect, useState } from "react";
import { getDoc } from "firebase/firestore";
import useArticulosStore from "@stores/useArticuloStore";
import { Articulo } from "@features/articulos/models/Articulo";
import ArticuloCard from "@features/articulos/components/ArticuloCard";

export default function ArticulosListPage() {
  const [articulosData, setArticulosData] = useState<Articulo[]>([]);
  const { articulos, loading, error, fetchArticulos } = useArticulosStore();

  useEffect(() => {
    const fetchRelatedData = async () => {
      const articulosConNombre: Articulo[] = await Promise.all(
        articulos.map(async (articulo) => {
          let barrioNombre = '';

          if (articulo.barrioRef) {
            const barrioSnapshot = await getDoc(articulo.barrioRef);
            if (barrioSnapshot.exists()) {
              const barrioData = barrioSnapshot.data();
              if (barrioData) {
                barrioNombre = `${barrioData.nombre || ''}`;
              }
            }
          }

          return {
            ...articulo,
            barrioNombre,
          };
        })
      );

      setArticulosData(articulosConNombre);
    };

    fetchRelatedData();
  }, [articulos]);

  useEffect(() => {
    fetchArticulos();
  }, [fetchArticulos]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section>
      {articulosData.map((articulo: Articulo) => (
        <div key={articulo.id}>
          <ArticuloCard articulo={articulo} />
        </div>
      ))}
    </section>
  )
}
