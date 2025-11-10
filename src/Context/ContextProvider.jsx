import React, { useState } from 'react';
import { AppContext } from './AppContext';

const ContextProvider = ({children}) => {

    
  const [user, setUser] = useState({ name : "Rahim", age : 20})

  const handleDressData = (dress)=>{
    console.log('giit this' , dress)
  } 


  const userInfo ={
        user,
        setUser,
        handleDressData
  }

    return (
       <AppContext value={userInfo}>
        {children}
       </AppContext>
    );
};

export default ContextProvider;