import React from "react";
import data from "./teamData";
import styles from "./Team.module.css";
import TeamMember from "./TeamMember";
import backgroundVideo from "./images/backgroundVideo.mp4";
import mobileBackgroundVideo from "./images/mobileBackgroundVideo.mp4";
import { FormControlLabel, Switch } from "@mui/material";

export default function Team() {
  const [switchChecked, setSwitchChecked] = React.useState(false);
  const videoRef = React.useRef(null);
  const mobileVideoRef = React.useRef(null);

  const togglePlay = () => {
    if (switchChecked) {
      videoRef.current.pause();
      mobileVideoRef.current.pause();
    } else {
      videoRef.current.play();
      mobileVideoRef.current.play();
    }
    setSwitchChecked(!switchChecked);
  };

  return (
    <>
      <div>
        <video className={styles.backgroundVideo} ref={videoRef} loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <video
          className={styles.mobileBackgroundVideo}
          ref={mobileVideoRef}
          loop
          muted
        >
          <source src={mobileBackgroundVideo} type="video/mp4" />
        </video>
        <div className={styles.moonWrapper}>
          <FormControlLabel
            className="text-white px-2"
            control={
              <Switch
                checked={switchChecked}
                onChange={togglePlay}
                color="secondary"
              />
            }
            label="Background Video"
          />
          {data.map((memberData, index) => (
            <TeamMember key={index} memberData={memberData} />
          ))}
        </div>
      </div>
    </>
  );
}
