import { Route, Routes } from 'react-router-dom';
import ArticulosListPage from '@features/articulos/pages/ArticulosListPage';
import ArticuloDetailsPage from "@features/articulos/pages/ArticuloDetailsPage";

export default function ArticulosRouter() {
    return (
        <Routes>
            <Route path="/" element={<ArticulosListPage />} />
            <Route path="/detalles/:id" element={<ArticuloDetailsPage />} />
        </Routes>
    )
}
