import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PagesCreateNotes from './pages/PagesCreateNotes';
import PagesHome from './pages/PagesHome';
import PagesCreateUser from './pages/PagesCreateUser'
import "./style/styleGen.css"
import "./style/responDesing.css"
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

          <Routes>
              <Route path='/' element={<PagesHome />} />
              <Route path='/createNote' element={<PagesCreateNotes />} />
              <Route path='/edit/:id' element={<PagesCreateNotes />} />
              <Route path='createUser' element={<PagesCreateUser />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
