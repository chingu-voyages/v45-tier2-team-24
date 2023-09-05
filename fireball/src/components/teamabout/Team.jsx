import React from "react";
import data from "./teamData";
import styles from "./Team.module.css";
import TeamMember from "./TeamMember";
import backgroundVideo from "./images/backgroundVideo.mp4";
import mobileBackgroundVideo from "./images/mobileBackgroundVideo.mp4";

export default function Team() {
  //console.log(data);
  return (
    <>
      <div>
        <video className={styles.backgroundVideo} autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <video className={styles.mobileBackgroundVideo} autoPlay loop muted>
          <source src={mobileBackgroundVideo} type="video/mp4" />
        </video>
        <div className={styles.moonWrapper}>
          {data.map((memberData, index) => (
            <TeamMember key={index} memberData={memberData} />
          ))}
        </div>
      </div>
    </>
  );
}
