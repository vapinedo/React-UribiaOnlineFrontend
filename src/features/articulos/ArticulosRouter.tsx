import { Route, Routes } from 'react-router-dom';
import ArticulosListPage from '@features/articulos/pages/ArticulosListPage';

export default function ArticulosRouter() {
    return (
        <Routes>
            <Route path="/" element={<ArticulosListPage />} />
        </Routes>
    )
}
