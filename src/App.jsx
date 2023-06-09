import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://10.25.244.54:5555/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>DITe.6403019</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
