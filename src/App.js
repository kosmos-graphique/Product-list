import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import MainContent from './components/mainContent/mainContent';

function App() {
  return (
    <div className="container">
      <Header />

      <MainContent/>

      <Footer/>
    </div>
  );
}

export default App;
