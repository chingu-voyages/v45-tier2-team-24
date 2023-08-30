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
      <div className="meteor-1 hidden md:block "></div>
      <div className="meteor-2 hidden md:block"></div>
      <div className="meteor-5 hidden md:block"></div>
      <div className="meteor-10 hidden md:block"></div>
      <div className="relative h-screen flex justify-center items-center">
        <img
          src="src\components\teamabout\images\Moon.png"
          alt=""
          className="absolute sm:max-w-screen-sm md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl max-w-2xl"
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
          placement="right-start"
        >
          <img
            src="src\components\teamabout\images\Rachel.png"
            alt=""
            className="absolute left-[10%] top-[35vh] z-2 cursor-pointer"
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
              Seattle, WA
              <br />
              Something will go here
              <br />
              Social Links:{" "}
              <a href="https://github.com/limyod" target="_blank">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/yodae-lim/" target="_blank">
                <LinkedInIcon />
              </a>
            </React.Fragment>
          }
          placement="left"
        >
          <img
            src="src\components\teamabout\images\Yodae.png"
            alt=""
            className="absolute left-[25%] top-[60vh] z-2 cursor-pointer"
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
          placement="bottom"
        >
          <img
            src="src\components\teamabout\images\CJ.png"
            alt=""
            className="absolute top-[15vh] left-[30%] z-2 cursor-pointer"
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
          placement="right"
        >
          <img
            src="src\components\teamabout\images\Carlos.png"
            alt=""
            className="absolute right-[20%] top-[58vh] z-2 cursor-pointer"
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
          placement="right"
        >
          <img
            src="src\components\teamabout\images\Eric.png"
            alt=""
            className="absolute top-[35vh] right-[10%] z-2 cursor-pointer"
          />
        </HtmlTooltip>
        {/* <HtmlTooltip
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
            className="absolute top-3/4 end-1/2 z-2 cursor-pointer"
          />
        </HtmlTooltip> */}
      </div>
    </>
  );
}
