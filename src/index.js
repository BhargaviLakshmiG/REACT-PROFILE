import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Header from './Components/Header' ;
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Skills from  './Components/Skills';
import Aboutme from './Components/Aboutme';
import Portfolio from './Components/Portfolio';


import reportWebVitals from './reportWebVitals';
import Contact from './Components/Contact';
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/


const App = () =>{
  return (
    <div className="App">
     < Header />
     <hr />
     < Navbar />
     <hr/>
     < Banner />
     <hr />
     < Aboutme />
     <hr />
     < Skills />
     <hr />
     <Portfolio />
     <hr />
     <Contact />
    </div>
  );
}



ReactDOM.render(<App />,document.getElementById("root"));

