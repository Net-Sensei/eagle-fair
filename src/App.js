import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Pages from './components/mainPages/Pages';
import PropagateLoader from "react-spinners/PropagateLoader"
import Logo from "./logo.png"

function App() {

  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[])

  // ///////ADD LOGO FOR LOADING WITH SPINNER/////////

  return (
    <div className="App">
       {
          loading ?
            <div className="loadingScreen">
               <div className="spinner">
                    <div className="navbar-brand logo__loading text-secondary pl-4 mt-1" style={{marginLeft: '15px'}} href="#">
                        <img className="logoHeader" src={Logo} alt="admin-logo" /> 
                        <p className="font-dosis">EAGLE-FAIR</p>
                    </div>
                  <PropagateLoader size={15} color="#21cbcb" loading={loading}/>
               </div>
            </div>
          :
          <>
            <Pages/>
            <Footer/>
          </>
       }
    </div>
  );
}

export default App;
