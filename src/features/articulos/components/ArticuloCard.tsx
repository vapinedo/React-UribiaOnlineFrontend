import React from "react";
import { Articulo } from "../models/Articulo";
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonBadge, IonText } from '@ionic/react';

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
    <IonCard className="h-100">
      <IonImg src={articulo.imagenURLs[0]} />
      <IonCardHeader>
        <IonCardTitle>{articulo.nombre}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonText>$ {articulo.precio}</IonText>
        <IonBadge color="primary">{articulo.estadoArticulo}</IonBadge>
        <IonText>Barrio {barrioNombre}</IonText>
        <IonText className="text-body-secondary">Publicado hace 1 hora</IonText>
      </IonCardContent>
    </IonCard>
  );
}

export default ArticuloCard;
