import './App.css';
import { Provider } from 'react-redux'
import store from './Redux/store';
import CustomForm from './Components/CustomForm';

function App() {

  const formInputs = [
    { name: 'firsName', label: 'First Name', type: 'text' ,placeholder:'First Name...'},
    { name: 'lastName', label: 'Last Name', type: 'text' ,placeholder:'Last Name...'},
    { name: 'email', label: 'Email', type: 'email',placeholder:'demomael@test.com...' },   
    { name: 'books', label: 'Select books', type: 'select',options:['Book1','Book2','Book3'] },
    { name: 'terms', label: 'Agree to terms', type: 'checkbox' }
  ];

  return (
    <Provider store={store}>
       <div className="App">
        <h1>Custom Form</h1>
        <CustomForm inputs={formInputs}></CustomForm>
      </div>
    </Provider>
  
  );
}

export default App;
