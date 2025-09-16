import { motion } from "framer-motion";
import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
  createTheme,
  ThemeProvider,
} from "flowbite-react";
import paycomIcon from "../assets/logos/PAYC.svg";
import saftiIcon from "../assets/logos/SAFTI.webp";
import rsafIcon from "../assets/logos/RSAFlogo.png";
import safIcon from "../assets/logos/SAFlogo.png";
import tnIcon from "../assets/logos/timothy-ng.jpg";
import FlyIn from "./Utilities/FlyIn";

function createIconComp(src, alt = "Logo", className = "") {
  return function IconComp() {
    return <img src={src} alt={alt} className={className} />;
  };
}

const customTheme = createTheme({
  timeline: {
    root: {
      direction: {
        vertical: "border-none", //remove timeline line
      },
    },
    item: {
        content:{
            body:{
                base: " text-olive dark:text-olive font-body"
            },
            time:{
                base: " text-forest-green dark:text-forest-green font-title font-extrabold"
            },
            title:{
                base: "text-olive dark:text-olive font-title font-extrabold"
            },
        },
      point: {
        marker: {
          icon: {
            wrapper:
              " md:mt-4 mt-8 ring-0 bg-transparent dark:bg-transparent md:h-14 h-10 md:w-14 w-10",
          },
        },
      },
    },
  },
});

const timelineData = {
  "Paycom SDET": {
    logo: createIconComp(paycomIcon, "Paycom Logo", "w-full h-full"),
    time: "Aug 2025 - May 2025",
    company: "Paycom",
    title: "SDET",
    body: "Automated System, Integration, UI and Regression tests using Selenium, eliminating 39 hours/week (~2,035 hours/year) of manual QA efforts and accelerating CI/CD throughput. \n Scheduled A/B down-server test routines that successfully flagged 4 UI bugs, 3 data discrepancies and 9 inconsistencies within staging environments, enhancing product stability and reducing production defects through continuous testing.\n Partnered with QA and development teams to expand test coverage across edge cases, core functionality, and integration points, improving defect detection and release confidence resulting in the early detection of 3 initially missed test cases.",
  },
  "605 Squadron": {
    logo: createIconComp(
      rsafIcon,
      "Republic of Singapore Airforce Logo",
      " rounded-full h-full w-full"
    ),
    time: "May 2021 - Jun 2020",
    company: "Republic of Singapore Airforce",
    title: "1st Lieutenant",
    body: "Job Description here",
  },
  OCS: {
    logo: createIconComp(saftiIcon, "SAFTI Logo", "h-full w-full"),
    time: "Jun 2020 - Sep 2019",
    company: "SAFTI MI",
    title: "Officer Cadet",
    body: "Job Description here",
  },
  "Boot Camp": {
    logo: createIconComp(safIcon, "Singapore Armed Forces Logo"),
    time: "Sep 2019 - Jul 2019",
    company: "Singapore Armed Forces",
    title: "Army Recruit",
    body: "Job Description here",
  },
  Paralegal: {
    logo: createIconComp(tnIcon, "Timothy Ng LLC Logo"),
    company: "Timothy Ng LLC",
    time: "Nov 2018 - Sep 2018",
    title: "Paralegal",
    body: "Job Description here",
  },
};

const WorkExperience = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Timeline className=" 
      ml-10 
      mr-10
      mt-6
      space-y-12
      ">
        <div>
          <h2 className=" text-5xl font-title font-[weight:900]">My Experience</h2>
          <br/>
            <h3 className=" font-subheader text-xl">Milestones & Growth</h3>
        </div>
        {Object.entries(timelineData).map(([title, details], index) => (
          <FlyIn key={index} direction="right" duration={1.2} delay={0.3}>
            <TimelineItem className=" md: mb-10">
              <TimelinePoint icon={details.logo} />
              <TimelineContent className=" text-left md:pl-12 pl-6">
                <TimelineTime>{details.time}</TimelineTime>
                <TimelineTitle className=" text-5xl">
                  {details.company}
                </TimelineTitle>
                <TimelineTitle className="">
                  {details.title}
                </TimelineTitle>
                <TimelineBody className=" -ml-16 md:ml-0 -mr-6 md:mr-0 mt-2 md:mt-4 ">
                  {/* {details.body} */}
                  <ul>
                    {details.body.split("\n").map((line, index) => (
                      <FlyIn
                        direction="left"
                        delay={(index + 1) / 10 + 0.4 + 0.8}
                      >
                        <li key={index} className=" text-sm md:text-base mb-4">
                          {line}
                        </li>
                      </FlyIn>
                    ))}
                  </ul>
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
          </FlyIn>
        ))}
      </Timeline>
    </ThemeProvider>
  );
};

export default WorkExperience;
