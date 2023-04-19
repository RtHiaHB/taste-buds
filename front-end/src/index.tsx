import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import Locations from './Locations';
//import MapContainer from './MapContainer';


//ReactDOM.render(<Locations />, document.getElementById('root'));

const root = ReactDOM.createRoot((document.getElementById('root') as unknown) as DocumentFragment);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

