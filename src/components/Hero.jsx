import Hello from "../assets/Hello.gif";
import NameToggle from "./Utilities/NameToggle";
const Hero = () => (
    // ml-6 md:ml-20
    <div className=" container text-left md:min-h-[100vh] space-y-14">
        <div className=" font-title text-9xl ">
            <h1 >Full Stack</h1>
            <h1 className="  ml-32 text-forest-green font-[weight:900]"> Developer</h1>
        </div>

        <div className=" grid grid-cols-4 text-3xl font-subheader">
        
            <h1 className=" text-body-primary text-5xl font-bold col-span-1"><NameToggle name1 = "Ephraim J. Wong" name2= "王恩荣"/></h1> 
            <h3 className=" col-span-3">
            DO THE THING ONCE. <br />DO THE THING RIGHT.
            <br/><br/>
            AUTOMATE IT TO HAVE THE THING RIGHT, ALL THE TIME.
        </h3>


        </div>
        <div className=" grid grid-cols-4 text-xl">
            <h3 className=" col-span-1">(about.)</h3>
            <p className=" col-span-3 ">My passion for automating the <span className=" font-new">FUTURE</span> comes from pain points of the <span className="font-old text-2xl">PAST</span>, grounded by the technologies of <span className=" font-title font-[weight:900]">today</span>.</p>
        </div>
    </div>
);

export default Hero;