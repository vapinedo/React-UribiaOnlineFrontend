import { Route, Routes } from 'react-router-dom';
import ArticuloPage from '@features/articulos/pages/ArticuloPage';
import ArticulosListPage from '@features/articulos/pages/ArticulosListPage';

export default function ArticulosRouter() {
    return (
        <Routes>
            <Route path="/" element={<ArticulosListPage />} />
            <Route path="/articulo/:id" element={<ArticuloPage />} />
        </Routes>
    )
}
