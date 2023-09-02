import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ComputerIcon from "@mui/icons-material/Computer";

export default function TeamMember({ memberData }) {
  //console.log(memberData);
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));
  return (
    <HtmlTooltip
      title={
        <React.Fragment>
          <Typography color="inherit">
            {memberData.name}
            <br />
            {memberData.title}
          </Typography>
          <hr />
          {memberData.location}
          <br />
          {memberData.bio}
          <br />
          Social Links:{" "}
          {memberData.github && (
            <a href={memberData.github} target="_blank">
              <GitHubIcon />
            </a>
          )}
          {memberData.linkedIn && (
            <a href={memberData.linkedIn} target="_blank">
              <LinkedInIcon />
            </a>
          )}
          {memberData.twitter && (
            <a href={memberData.twitter} target="_blank">
              <TwitterIcon />
            </a>
          )}
          {memberData.portfolio && (
            <a href={memberData.portfolio} target="_blank">
              <ComputerIcon />
            </a>
          )}
        </React.Fragment>
      }
      placement={memberData.placement}
    >
      <img
        src={memberData.imgSrc}
        alt={memberData.imgAlt}
        className={memberData.imgClassName}
      />
    </HtmlTooltip>
  );
}
