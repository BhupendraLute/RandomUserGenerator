import React, { useState, useRef, useEffect } from "react";
import { Container } from "../index";
import fetchData from "../../api/fetchData";
import "./Profiles.css";
import ProfileCard from "./ProfileCard";

function Profiles() {
  const [profileData, setProfileData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchProfileData = async () => {
      try {
        const data = await fetchData(`https://randomuser.me/api/`);
        setProfileData(data.results[0]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [refresh]);

  const handleClick = () => {
    setRefresh(!refresh);
  };

  return (
    <Container>
      <section className="flex-col flex-center flex-gap-2 hero">
        <h1>Random User Profile</h1>
        <p>
          These profiles are coming from <strong>randomuser.me/api/</strong>{" "}
          endpoint.
        </p>
        <p>
          A free, open-source API for generating random user data. Like Lorem
          Ipsum, but for people.
        </p>
        <div className="flex-col flex-center flex-gap-2 card">
          {profileData && profileData.name && (
            <ProfileCard
              photo={profileData.picture.large}
              nameTitle={profileData.name.title}
              firstName={profileData.name.first}
              lastName={profileData.name.last}
              email={profileData.email}
              gender={profileData.gender}
              age={profileData.dob.age}
              state={profileData.location.state}
              country={profileData.location.country}
              postcode={profileData.location.postcode}
            />
          )}

          {isLoading ? (
            <div className="load-btn">Loading...</div>
          ) : (
            <button onClick={handleClick} className="load-btn">
              Load New Profile
            </button>
          )}
        </div>
      </section>
    </Container>
  );
}

export default Profiles;
