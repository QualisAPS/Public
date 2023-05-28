import Contact from 'pages/Contact';
import Main from 'pages/Main';
import Home from 'pages/Home';
import Files from 'pages/Files';
import NotFound from 'pages/NotFound';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="" element={<Home />} />
        <Route path="contato" element={<Contact />} />
        <Route path="documentos" element={<Files />} />
      </Route>

      {/* catch all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
