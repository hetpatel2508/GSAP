import React from 'react';
import '../App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const parent = React.useRef();

  React.useEffect(() => {
    let ctx = gsap.context(() => {
      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: parent.current,
          start: 'top 20%',
          end: 'bottom bottom',
          // markers: true,
          // scrub: true,
        },
      });

      t1.to(
        '#MyCir',
        {
          rotate: '115deg',
          duration: 1.6,
          ease: 'power4.inOut',
        },
        0,
      );
    }, parent);

    return () => ctx.revert();
  }, [parent]);

  return (
    <div className="w-[100%] h-[120vh] bg-black  pt-[140px] relative" ref={parent}>
      <div className="w-[100%] h-[80vh] flex flex-row items-center justify-center bg-[url('https://andyhardy.co/media/pages/home/1ad6ac672f-1683607197/andy-about-bg-2160x1200-crop.jpg')] bg-cover bg-center bg-no-repeat bg-[#252525] relative">
        <div id="IntroBottomFade"></div>
        <div className="w-[150px] h-[150px] bg-black rounded-full absolute bottom-0 right-[27%]">
          <svg
            width="110"
            height="110"
            id="MyCir"
            viewBox="0 0 110 110"
            className="p-[20px] text-sm font-normal color-[#fff] leading-[1.25] tracking-[4px] whitespace-nowrap rotate-[20deg]"
          >
            <path
              id="textpath-1"
              d="M 55, 55 m -55, 0 a 55,55 0 1,0 110,0 a 55,55 0 1,0 -110,0 "
            ></path>
            <text fill="#FFF" style={{ textTransform: 'uppercase' }}>
              <textPath href="#textpath-1" startOffset="50%" textAnchor="middle">
                Creative &nbsp; Director
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <div className="w-[100%] h-[50vh] pb-4 relative flex flex-row items-center justify-center bg-black">
        <div className="w-[860px] h-full  flex flex-row items-center justify-center pt-6">
          <div className="w-[80%] h-[202px]   font-normal text-[16px] leading-[24px] tracking-normal text-[#ffffffb6]">
            "Meet Andy, your new creative director and visual connoisseur. With a background in
            commercial and photojournalistic photography, he's a multidisciplinary visual creator
            with a focus on film and storytelling. From shooting weddings to founding two production
            company's in the last 5 years, fēlan films & emble studio. Andy collaborates with
            top-tier clients to create meaningful, impactful content. He also teaches, works on live
            stream events, and captures commercial photography & video. Currently, he's a commercial
            director based in Bright Victoria, creating content for a variety of clients ranging
            from Melbourne to Sydney and all along the East Coast of Australia."
          </div>
        </div>
      </div>
    </div>
  );
}
