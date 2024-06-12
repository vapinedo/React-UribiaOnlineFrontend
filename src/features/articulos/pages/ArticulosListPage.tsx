import { useEffect, useState } from "react";
import { getDoc } from "firebase/firestore";
import useArticulosStore from "@stores/useArticuloStore";
import { Articulo } from "@features/articulos/models/Articulo";
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
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
    <IonContent>
      <IonGrid>
        <IonRow className="ion-align-items-stretch">
          {articulosData.map((articulo: Articulo) => (
            <IonCol size="12" sizeMd="4" key={articulo.id}>
              <ArticuloCard articulo={articulo} />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </IonContent>
  )
}
