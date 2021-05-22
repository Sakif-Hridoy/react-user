import './App.css';
import userData from './data/data.json';
import User from './Component/User/User';
import AddedUser from './Component/AddedUser/AddedUser';
import { useState } from 'react';

function App() {
  // User Count State
const [users,setUsers] = useState([]);
// Event Handler Function
const addUser = (username)=>{
  
  const newUserCount = [...users,username];
  setUsers(newUserCount);
}
  return (
    <div className="App">
      <h2 className="total-user">Total User:{userData.length}</h2>
  <div className="user-container">
   <div className="userlist-container">
   <ul>
     {/* Component with Map */}
      {
        userData.map(user=> <User user={user} adduser={addUser}></User>)
      }
    </ul>
   </div>
    <div className="count-container">
    <h4 className="count-header">This is Count</h4>
     {/* Component */}
    <AddedUser users={users}></AddedUser>

    </div>
  </div>
    
    </div>
  );
}

export default App;
