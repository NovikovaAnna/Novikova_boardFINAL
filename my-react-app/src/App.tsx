import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BoardsPage from './components/BoardsPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/boards" element={<BoardsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
