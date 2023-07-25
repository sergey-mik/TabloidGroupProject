import React, { useEffect, useState } from "react";
import { getAllUserProfiles } from "../modules/userProfileManager";

export default function UserProfilesList() {
  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    const fetchUserProfiles = async () => {
      try {
        const data = await getAllUserProfiles();
        setUserProfiles(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfiles();
  }, []);

  // Sort the user profiles alphabetically by display name
  const sortedUserProfiles = userProfiles.sort((a, b) => a.displayName.localeCompare(b.displayName));

  return (
    <div>
      <h2>User Profiles List</h2>
      {sortedUserProfiles.map((userProfile) => (
        <div key={userProfile.id}>
          <h3>{userProfile.displayName}</h3>
          <p>Full Name: {userProfile.firstName} {userProfile.lastName}</p>
          <p>User Type: {userProfile.userType.name}</p>
        </div>
      ))}
    </div>
  );
}
