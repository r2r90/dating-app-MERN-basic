import './App.css';
import Header from './components/Header/Header';
import DatingCards from './components/DatingCards/DatingCards';
import SwipeButtons from './components/SwipeButtons/SwipeButtons';

function App() {
  return (
    <div className="app">
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
