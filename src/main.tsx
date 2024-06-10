import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './App';
import ClinicalStudies from './ClinicalStudies';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Clinical_Studies" element={<ClinicalStudies />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
