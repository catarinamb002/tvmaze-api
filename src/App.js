import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Show } from "./pages/Show";
import { Header } from './components/Header';

import './styles/global.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />       
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/show/:id" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
