import React from 'react';
import './App.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Navbar from './Component/Navbar';
import Logo from './Component/Logo';
import Parallex from './Component/Parallex';

gsap.registerPlugin(useGSAP);

export default function App() {
  const parent = React.useRef();
  const infoChild = React.useRef();
  const navbar = React.useRef();
  const LOGO = React.useRef();

  useGSAP(
    () => {
      const t1 = gsap.timeline();

      t1.from(
        '#pardo>img',
        {
          opacity: 0,
          rotate: 10,
          scale: 2.8,
          duration: 1,
          ease: 'power4.inOut',
        },
        0,
      );

      t1.to(
        '#pardo',
        {
          opacity: 0,
          duration: 1.6,
          ease: 'power4.inOut',
        },
        1,
      );

      t1.to(
        navbar.current,
        {
          opacity: 1,
          // zIndex: 20,
          duration: 1,
          delay: 0.8,
          ease: 'power4.inOut',
        },
        0.88,
      );

      t1.to(
        infoChild.current,
        {
          opacity: 1,
          top: '19.5%',
          duration: 1,
          delay: 0.3,
          ease: 'power4.inOut',
        },
        2,
      );
    },
    { scope: parent },
  );

  return (
    <div className="">
      <div ref={parent}>
        <Navbar />
        <Logo MyRef={navbar} LOGO={LOGO} />

        {/* <div
          id="pardo"
          className="w-full h-screen bg-black fixed flex flex-row items-center justify-center text-white text-4xl z-10"
        >
          <img
            src="https://andyhardy.co/assets/img/logo-andy.png"
            alt=""
            className="w-[130px] h-[130px] object-contain"
          />
        </div> */}

        <Parallex infoChild={infoChild} />

        <div className="w-[100%] h-screen bg-[#000000] "></div>
        <div className="w-[100%] h-screen bg-red-200"></div>
      </div>
    </div>
  );
}
