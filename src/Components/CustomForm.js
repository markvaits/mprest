import {useSelector,useDispatch} from 'react-redux';
import { setInput,submitForm}  from '../Redux/actions';
import FormInput from './FormInput';

const CustomForm = ({inputs})=>{
    const formData = useSelector(state=>state.formData);
    const dispatch = useDispatch();

    const handleInputChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        dispatch(setInput(name,value))
    };

    const handleSubmit=(e)=>{
       e.preventDefault();   
       var json = JSON.stringify(formData);
       console.log(json);
       alert(json);
    };

     return(
        <>
       <form onSubmit={handleSubmit}>
        {inputs.map((input)=>(
           <FormInput key={input.name} {...input} value={formData[input.name]} onchange={handleInputChange} ></FormInput>

        ))}
        <button type='submit'>Cotact Us</button>
       </form>
      
       
    </>
     );

};

export default  CustomForm;