import React from "react";
import data from "./teamData";
import styles from "./Team.module.css";
import TeamMember from "./TeamMember";

export default function Team() {
  //console.log(data);
  return (
    <>
      <div className={styles.teamWrapper}>
        <div className={styles.moonWrapper}>
          <div className={styles.star}></div>
          <div className={styles.meteor1}></div>
          <div className={styles.meteor2}></div>
          <div className={styles.meteor5}></div>
          <div className={styles.meteor10}></div>
          {data.map((memberData, index) => (
            <TeamMember key={index} memberData={memberData} />
          ))}
        </div>
      </div>
    </>
  );
}
