import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';

function App() {


  return (
    <>
     <Router>
        <Header />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          
        </Routes>
      </Router>

    </>
  )
}

export default App
