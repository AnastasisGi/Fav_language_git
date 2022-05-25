import * as React from 'react';
import {Grid,TextField,Button} from '@mui/material';
import {useState,KeyboardEvent,ChangeEventHandler} from 'react';



export default function Form() {
    const [formValues,setFormValues]=useState({name:""});
    
   const  handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    
        const {name,value} = e.target;
        setFormValues({...formValues,name:value});
        // console.log('formvalues',formValues);
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log('formvalues',formValues);
    }


    
  return (
      <>
<form onSubmit={handleSubmit}>

<TextField
id="username-input"
name="username"
label="User Name"
type="text"
value={formValues.name}
onChange={handleInputChange}
/>

<Button variant="contained" color="primary" type="submit">
Submit
</Button>

</form> 




</>
   
  );
}
