import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import imagePaths from "./ImportImages";
import Fade from "embla-carousel-fade";
import AutoHeight from "embla-carousel-auto-height";
import FlyIn from "../Utilities/FlyIn" 
import ArrowBtn from "../../assets/circle-arrow-right.svg";
import ShakeButton from "../Utilities/ShakeButton";



const PhotoCarousel = () => {
    //#region EmblaCarousel Configuration Options && plugins
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop:true,          //infinite loop
        direction: "ltr",
        duration: 40,       //speed of scroll transition
        slidesToScroll: 1,
        skipSnaps: true     //allow vigorous drags to skip slides
        }, 
        [
            Autoplay(
                { delay:5000 } //how often autoplay runs
            ),
            AutoHeight(), //
            Fade()
        ]
    );
    //#endregion

    //#region Logic for Nav via Pagination Dots(Progress Bar)
    const [slideCount, setSlideCount] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const onSelect = useCallback(() =>{
        if(emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if(emblaApi){
            setSlideCount(emblaApi.slideNodes().length);
            emblaApi.on("select", onSelect);
            onSelect();
        }
    }, [emblaApi, onSelect]);
    //#endregion

    //#region Recalculate Slide Frame Dimensions
    useEffect(() => {
        if(emblaApi){
            const reInit = () => emblaApi.reInit();

            requestAnimationFrame(reInit);
            
            const images = emblaApi.slideNodes().flatMap(node => Array.from(node.querySelectorAll("img")))
            images.forEach(img => {
                if(!img.complete) img.addEventListener("load", reInit);
            })

            window.addEventListener("resize", reInit);

            return () => {
                images.forEach(img => img.removeEventListener("load", reInit));
                window.removeEventListener("resize", reInit);
            };
        }
    }, [emblaApi])
    //#endregion

    //#region Arrow Button Navigation
    const scrollPrev = useCallback(() => {
        if(emblaApi) emblaApi.scrollPrev(); console.log("Progress: "+ Math.round(emblaApi.scrollProgress() * 100)/100); console.log(emblaApi.scrollSnapList());
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if(emblaApi) emblaApi.scrollNext(); console.log("Progress: "+ Math.round(emblaApi.scrollProgress() * 100)/100); console.log(emblaApi.scrollSnapList());
    }, [emblaApi])
    //#endregion


    return (
        // <FlyIn direction="left" once = {true}>
        <div ref = {emblaRef} className=" w-full">

                <div className=" flex items-start md:max-h-[85vh] overflow-hidden">
                    {imagePaths.map((source, index) => (
                        <div
                            key= {index}
                            className="flex-[0_0_100%]"
                        >
                            <img
                                src = {source}
                                className=" object-center object-cover md:h-[100vh] md:w-full"
                            />
                        </div>
                    ))}
                </div>
        <div className=" flex md:justify-between justify-center pt-4 md:mb-4">
            <div className="  hidden md:flex md:w-60 justify-around md:pl-6">
            <ShakeButton onClick = {scrollPrev}>
                    <img src={ArrowBtn} className=" rotate-180"/>
            </ShakeButton>
            <ShakeButton onClick = {scrollNext}>
                    <img src={ArrowBtn} className=""/>
            </ShakeButton>
    
        </div>
        <div className=" md:pr-24 flex justify-between w-80 h-5 md:h-auto">
            {Array.from( { length: slideCount} ).map((_, index) => (
                <button 
                    key={index} 
                    onClick = {() => emblaApi && emblaApi.scrollTo(index)} 
                    className={` 
                        rounded-full w-3 h-3 ring-3 
                        transition-transform duration-500 ease-out
                        ${index === selectedIndex ? "ring-forest-green scale-150" : "ring-brown-accent" } 
                    `}
                />
            )) }
            

        </div>
        </div> 
        </div>
        // </FlyIn>
    )
};

export default PhotoCarousel;