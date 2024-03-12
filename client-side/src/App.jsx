import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const user = { email, name };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUser = [...users, data];
        setUser(newUser);
        form.reset();
      });
  };

  return (
    <>
      <h1>User Management System</h1>
      <h1>Number of users: {users.length}</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" />
        <br />
        <input type="text" name="name" id="" />
        <br />
        <input type="submit" value="submit" />
        <br />
      </form>
      {users.map((use) => (
        <p key={use.id}>
          {use.id} -- {use.email} -- {use.name}
        </p>
      ))}
    </>
  );
}

export default App;
