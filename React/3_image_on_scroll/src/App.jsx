import React from 'react';
import './App.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App() {
  const Parent = React.useRef();
  const info = React.useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.main',
          start: 'top 0%',
          end: 'top -100%',
          scrub: true,
          pin: true,
        },
      });

      tl.from('#img1', {
        y: '85%',
        opacity: 0,
        duration: 1.5,
        ease: 'power4.inOut',
      });

      tl.from('#img2', {
        y: '-85%',
        opacity: 0,
        duration: 1.5,
        delay: -1.7,
        ease: 'power4.inOut',
      });

      tl.from('img', {
        scale: 1.2,
        duration: 1.5,
        ease: 'power4.inOut',
      });

      document.querySelectorAll('#info > #holder >div').forEach((el) => {
        tl.from(el, {
          x: '-100%',
          opacity: 0,
          duration: 1,
          delay: -0.9,
          ease: 'power4.inOut',
        });
      });
    },
    { scope: Parent },
  );

  return (
    <div ref={Parent}>
      <div className="temp"></div>
      <div className="main">
        <div id="info">
          <div id="holder" ref={info}>
            <div id="content1">Relieving the burden of disease caused by behaviors.</div>
            <div id="content2">
              Better treats serious cordiometabolc diseases to transform lives and reduce healthcare
              utilization through the use of digital therapeutics.
            </div>
            <div id="content3">
              <div id="sub_content1">
                <hr />
              </div>
              <div id="sub_content2">Explore</div>
              <div id="sub_content3">
                <svg
                  fill="#ffffff"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                >
                  {' '}
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>{' '}
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>{' '}
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                      id="XMLID_27_"
                      d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                    ></path>{' '}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div id="gallery">
          <div className="img" id="img1" style={{ backgroundColor: 'orange' }}>
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="img" id="img2" style={{ backgroundColor: 'green' }}>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="temp" id="img_hold"></div>
      <div className="temp">Hello World..!</div>
    </div>
  );
}
