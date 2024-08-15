
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React,{useState} from 'react';
import { BrowserRouter as Router,
   Routes,
   Route } from 'react-router-dom';

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
       setAlert(null);
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode(`dark`);
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils - Dark Mode"
    }
    else{
      setMode(`light`);
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
       document.title="TextUtils - Light Mode"
    }
    }

  
  

  return (
    <>

    
    {/* /users --> Component 1
        /users/home --> Component 2 */}
  <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About" />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<Textform showAlert={showAlert} heading="TextUtils - Your All-in-One Tool: Word Count, Case Conversion, and Voice Output" mode={mode} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
