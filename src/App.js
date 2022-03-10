import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FormCalendrier } from './Calendrier/FormCalendrier';

function App() {
  return (
    <div className="container">
      <div className='text-center'>    
      <FormCalendrier></FormCalendrier>
     
      </div>
    </div>
  );
}

export default App;
