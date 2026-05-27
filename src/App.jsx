import "./App.css";

import UserProfile from "./components/UserProfile";

function App() {

  const users = [

    {
      id: 1,
      name: "Niharika",
      jobTitle: "Frontend Developer",
      company: "Google",
      email: "niharika@gmail.com",
      phone: "9876543210"
    },

    {
      id: 2,
      name: "Rahul",
      jobTitle: "Backend Developer",
      company: "Microsoft",
      email: "rahul@gmail.com",
      phone: "9876501234"
    },

    {
      id: 3,
      name: "Sneha",
      jobTitle: "UI Designer",
      company: "Adobe",
      email: "sneha@gmail.com",
      phone: "9999999999"
    },

    {
      id: 4,
      name: "Arjun",
      jobTitle: "React Developer",
      company: "Netflix",
      email: "arjun@gmail.com",
      phone: "8888888888"
    }
  ];

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