import img1 from '../../assets/images/review1.jpg';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Para() {
    useEffect(() => {
        var clutter = "";
        const para = document.querySelector(".textpara")
        const characters = para.textContent.split("")
        characters.forEach(function (e) {

            clutter += `<span>${e}</span>`
        })
        para.innerHTML = clutter;
        gsap.set(".textpara span", { opacity: .1 })
        gsap.to(".textpara span", {
            scrollTrigger: {
                trigger: ".para",
                start: "top 70%",
                end: "bottom 90%",
                scrub: 1,
            },
            opacity: 1,
            stagger: .03,

        })
    }, []);



    return (
        <div data-color="white" className="para section w-full flex items-center justify-center px-8  ">
            <div className="text sm:w-[80%] flex flex-col items-center sm:items-start justify-between ">
                <div className='hidden w-[50%] sm:flex items-center justify-center mb-12'>
                    <hr className='bg-zinc-400 w-[20%] h-[.3vh]' />
                </div>
                <h3 className='textpara sm:w-[50%] text-blue-600 font-[Sansita] tracking-wide text-[2.4vh] sm:text-[3.5vh] font-medium text-center leading-[5vh] mb-10'>I’ve seen the way you smile when you talk about her, and how your eyes light up when she’s around. That’s not just love — that’s something deeper. As a mother, all I’ve ever wanted is to see you happy and safe in someone’s heart. And with her, I see exactly that. May your bond grow stronger with time, and may your love always feel like home.</h3>
                <div className="pers w-[50%] flex flex-col items-center justify-center gap-2 ">
                    <div className="image w-24 h-24 overflow-hidden rounded-full ">
                        <img src={img1} />
                    </div>
                    <h1 className=' text-[2.8vh] sm:text-[3.8vh] font-medium'>Mummy Ji</h1>
                    <h3 className='text-zinc-500 text-[2.4vh] whitespace-nowrap'>From a Mother’s Heart</h3>
                </div>
            </div>
        </div>
    )
}

export default Para
