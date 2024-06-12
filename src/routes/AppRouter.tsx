import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "@components/NotFoundPage";

const ArticulosRouter = lazy(() => import("@features/articulos/ArticulosRouter"));

export default function AppRouter() {
    return (
        <section>
            <Suspense fallback={<div>Cargando...</div>}>
                <Routes>
                    <Route path="/*" element={<ArticulosRouter />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </section>
    );
}
