import Github from "../assets/Socials/github-mark.svg";
import Linkedin from "../assets/Socials/LI-in-Bug.png";
import ShakeButton from "./Utilities/ShakeButton";

export default function SocialSideBar(){
    return(
        <div className=" fixed top-1/4 left-3 flex flex-col items-start justify-center">
            <ul className=" space-y-3">
                <li>
                <ShakeButton onClick={() => window.open("https://github.com/ephraaimwong", "__blank")}>
                    <img src={Github} className=" w-10"/>
                </ShakeButton>
                </li>
                <li>
                <ShakeButton onClick={()=> window.open("https://www.linkedin.com/in/ephraimjw/", "__blank")}>
                    <img src={Linkedin} className=" w-10 ml-1"/>
                </ShakeButton>
                </li>
            </ul>
        </div>
    );
};