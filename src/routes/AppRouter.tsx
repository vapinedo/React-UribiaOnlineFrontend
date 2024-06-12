import { lazy, Suspense } from "react";
import Navbar from "@components/Navbar";
import { IonContent } from "@ionic/react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "@components/NotFoundPage";

const ArticulosRouter = lazy(()=> import("@features/articulos/ArticulosRouter"));

export default function AppRouter() {
    return (
        <IonContent>
            <Navbar />

            <IonContent>
                <Suspense fallback={<div>Cargando...</div>}>
                    <Routes>
                        <Route path="/*" element={<ArticulosRouter />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
            </IonContent>
        </IonContent>
    );
}
