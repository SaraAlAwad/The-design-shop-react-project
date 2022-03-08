
import './App.css';
import Footer from './components/Footer';
import GridContainer1 from './components/GridContainer1';
import GridContainer2 from './components/GridContainer2';
import Header from './components/Header';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Header />
      <GridContainer1 />
      <GridContainer2 />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
