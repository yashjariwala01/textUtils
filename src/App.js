import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import { Example1, Example2 } from "./components/example";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      message: message,
      type: type
    })
  }

  setTimeout(() => {
    setAlert(null);
  }, 2500);
 
  const switchModefunc=()=>{
    if(mode=== "light"){
      setMode("dark");
      document.body.style.backgroundColor="grey";
      showAlert("Dark mode has been switched","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been switched","success");

    }
  }  

  return (
 <div>
    <Navbar title="The Delta Company" about="about our company" mode={mode} switchMode ={switchModefunc} />
    <Alert alert={alert}/>
    <div className="container col-8 my-4">
    <TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>  
    {/* <About/> */}
    </div>
  </div>
  
  );
}

export default App;
