import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import VendingMachine from './VendingMachine'
import Hersheys from './Hersheys'
import Resees from './Resees'
import Chips from './Chips'

function App() {
  
  return (
    <div className='App'>
        <BrowserRouter>           
            <Routes>
                <Route path="/" element={<VendingMachine/>}/>
                <Route path="/hersheys" element={<Hersheys/>}/>
                <Route path="/resees" element={<Resees/>}/>
                <Route path="/chips" element={<Chips/>}/>
            </Routes>
        </BrowserRouter>
    </div>
);
}

export default App
