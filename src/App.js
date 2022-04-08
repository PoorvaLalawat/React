import logo from './logo.svg';
import './App.css';
import {BasicTable} from './components/BasicTable'
import {Form} from './components/Form'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/' element ={<BasicTable/>}/>
      <Route path='form' element={<Form/>}/>
    </Routes>
    // <div className="App">
    //   <BasicTable/>
    // </div>
  );
}

export default App;
