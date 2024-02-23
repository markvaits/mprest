const FormInput =(props)=>{
    return(
        <div className="inputWrap">
            <label>{props.label}</label>
            {props.type === 'select' ? (
            <div><select
              id={props.name}
              name={props.name}
              value={props.value}
              onChange={props.onchange}
            >
              <option value="">Select {props.label}</option>
              {props.options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select></div>
          ):<input type={props.type} value={props.value} name={props.name} onChange={props.onchange} placeholder={props.placeholder} ></input>
           
           
            }
        </div>
    );
};
export default FormInput;