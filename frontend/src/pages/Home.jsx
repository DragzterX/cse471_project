import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner.jsx';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/users')
      .then((response) => {
        setUsers(response.data); // Fixed: setUsers instead of setBooks
        setLoading(false);
      })
      .catch((error) => {
        console.error(error); // Fixed: console.error instead of console.log
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {/* Display the list of users */}
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {/* Display user information */}
            <p>{user.Name}</p>
            <p>{user.Phone_number}</p>

            {/* Add other user information as needed */}
            
            {/* Add icons for edit, info, add, delete as needed */}
            <AiOutlineEdit />
            <BsInfoCircle />
            <MdOutlineAddBox />
            <MdOutlineDelete />
          </li>
        ))}
      </ul>

      {/* Link to the sign-up/login page */}
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};