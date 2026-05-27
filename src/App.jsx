import "./App.css";

import UserProfile from "./components/UserProfile";

import users from "./data/users";

function App() {

  function handleDelete(userId) {

    const userCard =
    document.getElementById(
      "user-" + userId
    );

    userCard.remove();
  }

  return (

    <div className="app">

      <h1>
        User Profile Card with Toggle
      </h1>

      <div className="card-container">

        {
          users.map((user) => (

            <UserProfile
              key={user.id}
              id={user.id}
              name={user.name}
              jobTitle={user.jobTitle}
              company={user.company}
              email={user.email}
              phone={user.phone}
              onDelete={handleDelete}
            />

          ))
        }

      </div>

    </div>
  );
}

export default App;