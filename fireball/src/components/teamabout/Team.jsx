import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ComputerIcon from "@mui/icons-material/Computer";

export default function Team() {
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
    <>
      <div className="star"></div>
      <div className="meteor-1"></div>
      <div className="meteor-2"></div>
      <div className="meteor-5"></div>
      <div className="meteor-10"></div>
      <div className="container static h-screen flex ">
        <img
          src="src\components\teamabout\images\Moon.png"
          alt=""
          className="fixed w-screen place-self-center"
        />
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">
                Rachel VanHorn
                <br />
                Full Stack Developer
              </Typography>
              <hr />
              Las Vegas, NV
              <br />
              Enthusiastic full stack developer with previous experience in
              zoology, embryology and private home management.
              <br />
              Social Links:{" "}
              <a href="https://github.com/RKVanHorn" target="_blank">
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/rachelkvanhorn/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a href="https://rvanhorn.dev/#" target="_blank">
                <ComputerIcon />
              </a>
            </React.Fragment>
          }
          placement="right"
        >
          <img
            src="src\components\teamabout\images\Rachel.png"
            alt=""
            className="absolute left-80 top-80 z-2 cursor-pointer"
          />
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">
                Yodae
                <br />
                Developer
              </Typography>
              <hr />
              ???
              <br />
              Something will go here
              <br />
              Social Links:{" "}
              <a href="#" target="_blank">
                <GitHubIcon />
              </a>
              <a href="#" target="_blank">
                <LinkedInIcon />
              </a>
              <a href="#" target="_blank">
                <TwitterIcon />
              </a>
              <a href="#" target="_blank">
                <ComputerIcon />
              </a>
            </React.Fragment>
          }
          placement="left"
        >
          <img
            src="src\components\teamabout\images\Yodae.png"
            alt=""
            className="absolute right-80 top-10 z-2 cursor-pointer"
          />
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">
                CJ
                <br />
                Developer
              </Typography>
              <hr />
              WA
              <br />
              Hi I'm CJ, I can center a div in a div.
              <br />
              Social Links:{" "}
              <a href="https://github.com/ConwayCJ" target="_blank">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/conwaycj/" target="_blank">
                <LinkedInIcon />
              </a>
              <a href="#" target="_blank">
                <TwitterIcon />
              </a>
              <a href="https://christopherjconway.netlify.app/" target="_blank">
                <ComputerIcon />
              </a>
            </React.Fragment>
          }
          placement="left-start"
        >
          <img
            src="src\components\teamabout\images\CJ.png"
            alt=""
            className="absolute right-80 bottom-20 z-2 cursor-pointer"
          />
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">
                Carlos Luevano
                <br />
                Front-End Developer
              </Typography>
              <hr />
              Fort Worth, TX
              <br />
              Solutions-oriented professional with hands-on experience
              developing front-end of websites and applications in a fast-paced
              environment.
              <br />
              Social Links:{" "}
              <a href="https://github.com/Clue355" target="_blank">
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-luevano/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a href="https://twitter.com/clue355" target="_blank">
                <TwitterIcon />
              </a>
              <a href="https://carlosluevano.netlify.app" target="_blank">
                <ComputerIcon />
              </a>
            </React.Fragment>
          }
          placement="left-start"
        >
          <img
            src="src\components\teamabout\images\Carlos.png"
            alt=""
            className="absolute right-40 bottom-80 z-2 cursor-pointer"
          />
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">
                Eric
                <br />
                Developer
              </Typography>
              <hr />
              ???
              <br />
              Something will go here
              <br />
              Social Links:{" "}
              <a href="#" target="_blank">
                <GitHubIcon />
              </a>
              <a href="#" target="_blank">
                <LinkedInIcon />
              </a>
              <a href="#" target="_blank">
                <TwitterIcon />
              </a>
              <a href="#" target="_blank">
                <ComputerIcon />
              </a>
            </React.Fragment>
          }
          placement="left"
        >
          <img
            src="src\components\teamabout\images\Eric.png"
            alt=""
            className="absolute left-40 top-20 z-2 cursor-pointer"
          />
        </HtmlTooltip>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">
                Lindsey
                <br />
                Front End Developer
              </Typography>
              <hr />
              Fort Walton Beach, FL
              <br />
              Something will go here
              <br />
              Social Links:{" "}
              <a href="https://github.com/CodeLikeaGirl29" target="_blank">
                <GitHubIcon />
              </a>
              <a href="#" target="_blank">
                <LinkedInIcon />
              </a>
              <a href="#" target="_blank">
                <TwitterIcon />
              </a>
              <a href="https://lindseyk.dev/" target="_blank">
                <ComputerIcon />
              </a>
            </React.Fragment>
          }
          placement="right-start"
        >
          <img
            src="src\components\teamabout\images\Lindsey.png"
            alt=""
            className="absolute left-40 bottom-40 z-2 cursor-pointer"
          />
        </HtmlTooltip>
      </div>
    </>
  );
}
