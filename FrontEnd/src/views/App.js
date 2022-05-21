import './App.scss';
import Navigation from '../components/navmain/navigation';
import Home from './home/home'
import Contact from './contact/contact'
import Diseases from './diseases/diseases'
import Introduction from './intro/intro'
import ChatBody from '../components/chatBody/ChatBody';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation/>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/intro" element={<Introduction/>}></Route>
            <Route path="/diseases" element={<Diseases/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/chatbot" element={<ChatBody/>}></Route>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
