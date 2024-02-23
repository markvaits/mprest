const initialState={
    formData:{}
};

const formReducer = (state=initialState,action)=>{
switch(action.type)
{
  case 'SET_INPUT':
    return{
        ...state,
        formData:{
            ...state.formData,
            [action.payload.inputName]:action.payload.value
        }
    } 
    default: return state;
};

};
export default formReducer;