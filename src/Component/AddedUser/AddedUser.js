import React from 'react';
import "./AddedUser.css";

const AddedUser = (props) => {
    console.log(props)
    const users = props.users;

    let totalSalary = 0;
    for (let i = 0; i<users.length; i++) {      
        const userlist = users[i];
        totalSalary = totalSalary + userlist.salary;
   
    }
    return (
        <div>
            <h4 >User Added:{props.users.length}</h4>
            <h5 className="user-count">Total Annual Salary:${totalSalary}</h5>
        </div>
    );
};

export default AddedUser;