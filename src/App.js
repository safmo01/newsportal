
import './App.css';
import './components/Header/Header';
import {HashRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Highlights from './components/Carousal/Highlights';
import Justin from './components/Carousal/Justin';
import Footer from './components/Footer/Footer';
import Interview from './components/Carousal/Interview';
import Category_news from './components/Carousal/Category_news';
function App() {
  return (
    <div className>
      <HashRouter>

      <Header></Header>
<Highlights></Highlights>
<Justin></Justin>
<Category_news></Category_news>
<Interview></Interview>
<Footer></Footer>
      </HashRouter>


    </div>       
       
           
        
  );
}

export default App;
