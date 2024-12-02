import React from 'react';
import '../App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Logo({ MyRef, LOGO, GalleryParent }) {
  const logo2 = React.useRef();

  React.useEffect(() => {
    let ctx = gsap.context(() => {
      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: GalleryParent.current,
          start: 'top 20%',
          end: 'bottom bottom',
          // markers: true,
          scrub: true,
          // pin: true,
        },
        defaults: {
          duration: 5,
        },
      });

      t1.to(
        LOGO.current,
        {
          transform: 'translateY(-100%)',
          opacity: 0,
          ease: 'power4.inOut',
        },
        0,
      );

      t1.to(
        logo2.current,
        {
          transform: 'translateY(-100%)',
          ease: 'power4.inOut',
        },
        0,
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="opacity-0 ml-[41.7%] mt-[40px] fixed w-[250px] h-[50px] cursor-pointer z-20 overflow-hidden flex flex-col gap-0 "
      ref={MyRef}
    >
      <div className="w-full h-full flex flex-col overflow-hidden">
        <div className="w-full min-h-[50px]  flex justify-center items-center logo " ref={LOGO}>
          <span className="text-sm tracking-[8px] flex justify-center items-center text-white">
            ANDREW &nbsp;HARDY
          </span>
        </div>
        <div className="w-full min-h-[50px] flex justify-center items-center logo2" ref={logo2}>
          <img
            src="https://andyhardy.co/assets/img/logo-andy.png"
            alt=""
            className="w-[97px] h-[23px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
