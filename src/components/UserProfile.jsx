function UserProfile(props) {

  function handleToggle(userId) {

    const details =
      document.getElementById(
        "details-" + userId
      );

    const button =
      document.getElementById(
        "toggle-" + userId
      );

    if(details.style.display === "none") {
      details.style.display = "block";
      button.innerText = "Show Less";
    } else {
      details.style.display = "none";
      button.innerText = "Show More";
    }
  }

  return (

    <div className="profile-card"id={"user-" + props.id}>
     <h2>{props.name}</h2>
      <p>
        <strong>Job:</strong>
        {props.jobTitle}
      </p>

      <p>
        <strong>Company:</strong>
        {props.company}
      </p>

      <div id={"details-" + props.id} style={{display:"none"}}>
        <p>
          <strong>Email:</strong>
          {props.email}
        </p>

        <p>
          <strong>Phone:</strong>
          {props.phone}
        </p>

      </div>

      <button id={"toggle-" + props.id} onClick={() =>handleToggle(props.id)}>
        Show More
      </button>

      <button onClick={() =>props.onDelete(props.id)}>
        Delete
      </button>

    </div>
  );
}

export default UserProfile;