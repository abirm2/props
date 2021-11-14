
import './App.css';

import Profile from './profile/Profile.js';

const Parent= ()=> {
  const handleName =(Name) =>{
    alert('my name is ${Name}')
  }
 
  return (
    <div className="App">
       <Profile FullName='my name is abir  ' Bio='cv' Profession='doctor'  handleName={handleName}/>
      
    </div>
    
  );
}

export default Parent;
