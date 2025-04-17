
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaLogin from './PaginaLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PaginaLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
