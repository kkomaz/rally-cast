// ./src/pages/profile.js
import Button from "react-bootstrap/Button";

function Profile({ user }) {
  return (
    <div>
      <Button variant="primary">Primary</Button>
      <h2>
        <img src={user.picture} alt={user.displayName} /> Hello, {user.displayName}
      </h2>
      <p>This is what we know about you:</p>
      <ul>
        { Object.keys(user).map(key => (
          <li key={key}>{key}: {user[key].toString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
