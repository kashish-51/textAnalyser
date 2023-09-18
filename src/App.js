import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';


function App() {
  const[mode,setMode]= useState('cyan');
  const[alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{                                             //showalert is a function which is used to show alert messages
 setAlert({
  msg: message,
  type: type
 })
 setTimeout( ()=> {                                                           //to automatically hide the alert 
   setAlert(null);
 }, 1000);
  }

 const toggleMode=()=>{
    if(mode==='cyan'){
      setMode('#002966');
      document.body.style.backgroundColor = '#000536';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'textAnalyser-Dark mode';                              //show this in title of the website
    }
    else {
      setMode('cyan');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been disabled", "success");
      document.title = 'textAnalyser-Light mode';                             //show this in title of the website

    }
}
  return (
    <>
 <Navbar home="Home" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert} />
 <div className="container" >
 <TextForm heading="Enter your content here" mode={mode} showAlert={showAlert}/>
 </div>
  </>
  );
}
export default App;
