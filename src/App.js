import About from './components/About';
import Nav from './components/Nav';
import Text from './components/Text';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App()
{
  

  const[mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },3000);
  }
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }
  const toggleMode=(cls)=>{
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enabled","success")
      document.title="WebD-Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
      document.title="WebD-Light Mode"
    }
  }
  return (
    <>
    <Router>
    <Nav title='Reet' mode={mode} toggleMode={toggleMode} aboutText="About"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <Text heading="Reet is a good boy"mode={mode} showAlert={showAlert}  />
          </Route>
        </Switch>
        
    
    </div>
    </Router>
    {/* <div className="container my-3">
    <About mode={mode} heading="About Us"/>
    </div> */}
    </>
  );
}
export default App;
