import Hello from "../assets/Hello.gif";
const Hero = () => (
    // <div className="bg-body-primary">
    //     <h1 className=" text-primary"> This is primary dark mode color</h1>
    //     {/* <h1 className=" text-[#e4e4e7]"> This is my hero section!</h1> */}
    //     <h2 className=" text-secondary"> This is my accent color</h2>
    //     <div className=" bg-body-primary-2">
    //         <h1 className=" text-primary"> This is primary-2 color</h1>
    //     </div>
    //     <div className=" bg-body-secondary"> 
    //         <h1 className=" text-primary">
    //             This is secondary color
    //         </h1>
    //         <p className=" text-green-accent">
    //             I like this green as well
    //         </p>
    //     </div>

    // </div>
    <div className=" container bg-body-primary">
        <p className=" text-primary">Hello <img src={Hello} aria-label="Waving Emoji" className=" w-12 inline" />, I'm </p>
        <h1 className=" text-primary"> Ephraim J. Wong | 王恩荣</h1>
        <h3 className=" text-green-accent">Aspiring Software Developer</h3>
    </div>
);

export default Hero;