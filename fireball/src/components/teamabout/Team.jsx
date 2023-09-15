import React from "react";
import data from "./teamData";
import styles from "./Team.module.css";
import TeamMember from "./TeamMember";
import InfoIcon from "@mui/icons-material/Info";
import { Tooltip } from "@mui/material";

export default function Team() {
  return (
    <>
      <div className={styles.moonWrapper}>
        <h1 className="text-white">
          Meet Team Fireball{" "}
          <Tooltip
            title="Hover over or tap on an astronaut!"
            enterTouchDelay={0}
          >
            <InfoIcon fontSize="small"></InfoIcon>
          </Tooltip>
        </h1>

        {/* Map over all of the team data that was imported from teamData file
          and return a TeamMember component for each team member */}
        {data.map((memberData, index) => (
          <TeamMember key={index} memberData={memberData} />
        ))}
      </div>
    </>
  );
}
