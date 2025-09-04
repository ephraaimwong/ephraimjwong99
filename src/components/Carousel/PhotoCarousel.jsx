import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import imagePaths from "./ImportImages";
import Fade from "embla-carousel-fade";
import AutoHeight from "embla-carousel-auto-height";


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
        <div ref = {emblaRef} className=" overflow-hidden bg-yellow-200">

                <div className=" flex items-start">
                    {imagePaths.map((source, index) => (
                        <div
                            key= {index}
                            className="flex-[0_0_100%]"
                        >
                            <img
                                src = {source}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    ))}
                </div>
        <button onClick = {scrollPrev}>Prev</button>
        <button onClick = {scrollNext}>Next</button>
        <div className=" flex justify-center">
            {Array.from( { length: slideCount} ).map((_, index) => (
                <button 
                    key={index} 
                    onClick = {() => emblaApi && emblaApi.scrollTo(index)} 
                    className={` ${index === selectedIndex ? "bg-blue-500" : "bg-gray-700" } w-12 h-12`}
                />
            )) }
        </div> 
        </div>
        
    )
};

export default PhotoCarousel;