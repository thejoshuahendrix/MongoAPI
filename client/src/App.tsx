import { useState, useRef } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import { useOnClickOutside } from './hooks';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Menu from './components/Menu';
import Burger from './components/Burger';
import Hero from './components/Hero';
import NewsAPI from './pages/NewsAPI';
import Footer from './components/Footer';


library.add(fab);

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
        <Hero />
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/portfolio' exact component={Portfolio} />
            <Route path='/newsapi' exact component={NewsAPI} />

          </Switch>
        </Router>
        <Footer />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
    </ThemeProvider>
  );
}
export default App;
