import React from 'react';
import "./User.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPlus } from '@fortawesome/free-solid-svg-icons';





const User = (props) => {
    const addUser = props.adduser;
    
    return (
        <div className="user-container">
            <div className="userinfo-container">
            <h3>Username: {props.user.name}</h3>
            <img className="user-img"src={props.user.image} alt="" />
            <h4>Email: {props.user.email}</h4>
            <h4>Address: {props.user.address.street}, {props.user.address.city}</h4>
            <h4>Phone: {props.user.phone}</h4>
            <h4>Annual Salary: ${props.user.salary}</h4>
            <button onClick={()=> addUser(props.user)} className="add-button"><FontAwesomeIcon icon={faUserPlus} /> Add Salary</button>
            </div>
            
        </div>
    );
}

export default User;