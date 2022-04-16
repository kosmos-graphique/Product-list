import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import MainComponenetImroved from './components/mainContent/mainComponentImproved';
import Main_content from './components/mainContent/mainContent';

function App() {
  return (
    <div className="mycontainer">
      <Header />
      <div className="main_container">
        <MainComponenetImroved/>
      </div>
      {/* <Main_content/> */}

      <Footer/>
    </div>
  );
}

export default App;
