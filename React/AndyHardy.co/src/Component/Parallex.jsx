import React from 'react';
import '../App.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Parallex({ infoChild }) {
  const parent = React.useRef();
  const img = React.useRef();
  const logo = React.useRef();

  React.useEffect(() => {
    let ctx = gsap.context(() => {
      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: parent.current,
          start: 'top top',
          end: '5000 top',
          markers: true,
          scrub: true,
          // pin: true,
        },
      });

      t1.to(
        img.current,
        {
          y: 10,
          // opacity: 0,
          duration: 0.3,
          ease: 'power4.inOut',
        },
        0,
      );

      t1.to(
        logo.current,
        {
          // y: '100%',
          opacity: 0,
          duration: 0.3,
          ease: 'power4.inOut',
        },
        0,
      );
      // })
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-[100%]  relative overflow-hidden" ref={parent}>
      <div className="w-[100%] h-[100%] absolute top-0 left-0 " ref={logo}>
        <img
          src="https://andyhardy.co/assets/img/logo-andy.png"
          className="w-[420px] h-[420px] object-contain relative left-[35%] top-[42%] opacity-0 z-[1]"
          alt=""
          ref={infoChild}
        />
      </div>

      <div className="w-[100%] h-[100%] absolute top-0 left-0 " ref={img}>
        <img
          src="https://andyhardy.co/assets/img/landscape_background_small.jpg"
          className="w-[100%] h-[100%] object-cover "
          alt=""
        />
      </div>
      <div className="w-[100%] h-[100%] absolute -bottom-[0px] left-0 z-[2]">
        <img
          src="https://andyhardy.co/assets/img/landscape_mountain_small.png"
          alt=""
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="xyz"></div>
    </div>
  );
}
