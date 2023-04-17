import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import View from './components/View';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='view' element={<View />}></Route>
      </Routes>
    </>
  );
}

export default App;
