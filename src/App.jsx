
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Layout from './components/Common/Layout';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Medicine from './components/Pages/Medicine';
import MedicineBuy from './components/Pages/MedicineBuy';
import News from './components/Pages/News';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="medicine" element={<Medicine />} />
          <Route path="buy" element={<MedicineBuy />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

