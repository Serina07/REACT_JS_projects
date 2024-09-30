import './App.css';
import ContactHeader from './components/contactHeader/ContactHeader';
import Navigation from './components/Navigation/Navigation';
import classNames from 'classnames'

function App() {
  return (
    <div className={"container"}>
      <Navigation/>
      <ContactHeader/>
    </div>
  );
}

export default App;
