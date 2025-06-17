import React, { useEffect, useState } from "react";
import { auth } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <div className="text-center mt-5 text-white">Please login to see your profile.</div>;
  }

  return (
    <div className="profile-container bg-light text-dark p-4 mt-5 rounded shadow">
      <div className="text-center mb-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Profile Avatar"
          className="profile-avatar"
        />
        <h3 className="mt-3">Welcome, <span className="text-primary">{user.displayName || "User"}</span> 👋</h3>
      </div>

      <div className="profile-details">
        <p><strong>📧 Email:</strong> {user.email}</p>
        <p><strong>🆔 User ID:</strong> {user.uid}</p>
      </div>
    </div>
  );
};

export default Profile;
