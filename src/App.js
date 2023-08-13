import '../src/scss/App.scss';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import data from "./utils/data"
function App() {
  return (
    <div >
      <Header/>
      <Card data={data}/>
      <Footer/>
    </div>
  );
}

export default App;
