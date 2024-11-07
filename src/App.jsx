import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './Pages/Home';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home mode="text" />} />
        <Route path="/image-generator" element={<Home mode="image" />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
