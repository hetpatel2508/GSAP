import React from 'react';
import '../App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Grid() {
  const [hover, setHover] = React.useState(null);
  const parent = React.useRef();

  React.useEffect(() => {
    let ctx = gsap.context(() => {
      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: parent.current,
          start: 'top 20%',
          end: 'bottom bottom',
          markers: true,
          // scrub: true,
        },
      });

      // t1.from(
      //   '#img0',
      //   {
      //     // transform: 'translate(-50%, -50%) rotate(5deg)',
      //     translateX: '-50%',
      //     translateY: '-50%',
      //     rotate: '5deg',
      //     duration: 1,
      //   },
      //   0,
      // );
    });

    return () => ctx.revert();
  }, [parent]);

  return (
    <div
      className="w-full h-[116vh] bg-black  relative flex flex-row items-center justify-center"
      ref={parent}
      id="grid"
    >
      <div className="w-[373px] h-[235px] absolute left-[50%] top-[50%] transform translate-x-[-5%] translate-y-[-10%] ">
        <img
          src="	https://andyhardy.co/assets/img/sand-1.png
"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[373px] h-[235px] absolute left-[50%] top-[50%] transform translate-x-[-125%] translate-y-[-60%] ">
        <img
          src="	https://andyhardy.co/assets/img/sand-1.png
"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[311px] h-[311px]  absolute top-[50%] left-[50%] z-0">
        <div
          id="img0"
          className={`w-[248px] h-[310px] absolute bg-[url('https://andyhardy.co/media/pages/home/edf19a4909-1683607198/derby-mountain-biking-tasmania-mtb-500x620-crop.jpg')] bg-center bg-no-repeat bg-cover transition-all duration-500 ease-in-out transform translate-x-[-95%] translate-y-[-75%] rotate-[-5deg] z-[3]
             ${
               hover === 0 ? 'transform translate-x-[-110%] translate-y-[-90%] rotate-[-15deg]' : ''
             }`}
          onMouseEnter={() => setHover(0)}
          onMouseLeave={() => setHover(null)}
        >
          <div
            className={`w-full h-full absolute XYZGrid z-[6] ${
              hover === 0 ? 'opacity-100' : 'opacity-0'
            }`}
          ></div>
          <div className="w-full h-full absolute z-[6] flex flex-row items-center justify-center">
            <div
              className={`w-[36px] h-[36px] rounded-full transition-all duration-500 ease scale-0 ${
                hover === 0 ? 'opacity-100 scale-95' : 'opacity-0'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M22,12a11.6,11.6,0,0,1-10,6A11.6,11.6,0,0,1,2,12,11.6,11.6,0,0,1,12,6,11.6,11.6,0,0,1,22,12Z"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.5"
                ></path>
                <circle cx="12" cy="12" r="3" fill="none" stroke="#fff" strokeWidth="1.5"></circle>
              </svg>
            </div>
          </div>
        </div>
        <div
          id="img1"
          className={`w-[312px] h-[217px] absolute bg-[url('https://andyhardy.co/media/pages/home/f35a49f524-1683607197/aerial-macedon-drone-620x420-crop.jpg')] bg-center bg-no-repeat bg-cover  transform translate-x-0 translate-y-[-85%] rotate-[10deg] transition-all duration-500 ease z-[4]
          ${hover === 1 ? 'transform translate-x-6 translate-y-[-99%] rotate-[18deg]' : ''}`}
          onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover(null)}
        >
          <div
            className={`w-full h-full absolute XYZGrid z-[6] ${
              hover === 1 ? 'opacity-100' : 'opacity-0'
            }`}
          ></div>
          <div className="w-full h-full absolute z-[6] flex flex-row items-center justify-center">
            <div
              className={`w-[36px] h-[36px] rounded-full transition-all duration-500 ease scale-0 ${
                hover === 1 ? 'opacity-100 scale-95' : 'opacity-0'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M22,12a11.6,11.6,0,0,1-10,6A11.6,11.6,0,0,1,2,12,11.6,11.6,0,0,1,12,6,11.6,11.6,0,0,1,22,12Z"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.5"
                ></path>
                <circle cx="12" cy="12" r="3" fill="none" stroke="#fff" strokeWidth="1.5"></circle>
              </svg>
            </div>
          </div>
        </div>
        <div
          id="img2"
          className={`w-[312px] h-[217px] absolute bg-[url('https://andyhardy.co/media/pages/home/251fd71d66-1683607197/canada-banff-exploring-mountain-620x420-crop.jpg')] bg-center bg-no-repeat bg-cover  transform translate-x-[-110%] translate-y-[-5%] rotate-[-10deg] transition-all duration-500 ease-in-out z-[2]`}
          style={
            hover === 2 ? { transform: 'translateX(-120%) translateY(5%) rotate(-15deg)' } : {}
          }
          onMouseEnter={() => setHover(2)}
          onMouseLeave={() => setHover(null)}
        >
          <div
            className={`w-full h-full absolute XYZGrid z-[6] ${
              hover === 2 ? 'opacity-100' : 'opacity-0'
            }`}
          ></div>
          <div className="w-full h-full absolute z-[6] flex flex-row items-center justify-center">
            <div
              className={`w-[36px] h-[36px] rounded-full transition-all duration-500 ease scale-0 ${
                hover === 2 ? 'opacity-100 scale-95' : 'opacity-0'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M22,12a11.6,11.6,0,0,1-10,6A11.6,11.6,0,0,1,2,12,11.6,11.6,0,0,1,12,6,11.6,11.6,0,0,1,22,12Z"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.5"
                ></path>
                <circle cx="12" cy="12" r="3" fill="none" stroke="#fff" strokeWidth="1.5"></circle>
              </svg>
            </div>
          </div>
        </div>
        <div
          id="img3"
          className={`w-[248px] h-[310px] absolute bg-[url('https://andyhardy.co/media/pages/home/2c6c63f6f5-1683607198/sarah-west-coast-usa-500x620-crop.jpg')] bg-center bg-no-repeat bg-cover  transform translate-x-[-15%] translate-y-[-15%] rotate-[5deg] transition-all duration-500 ease-in-out z-[1]
        ${hover === 3 ? 'transform translate-x-[-5%] translate-y-[-10%] rotate-[16deg]' : ''}`}
          onMouseEnter={() => setHover(3)}
          onMouseLeave={() => setHover(null)}
        >
          <div
            className={`w-full h-full absolute XYZGrid z-[6] ${
              hover === 3 ? 'opacity-100' : 'opacity-0'
            }`}
          ></div>
          <div className="w-full h-full absolute z-[6] flex flex-row items-center justify-center">
            <div
              className={`w-[36px] h-[36px] rounded-full transition-all duration-500 ease scale-0 ${
                hover === 3 ? 'opacity-100 scale-95' : 'opacity-0'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M22,12a11.6,11.6,0,0,1-10,6A11.6,11.6,0,0,1,2,12,11.6,11.6,0,0,1,12,6,11.6,11.6,0,0,1,22,12Z"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.5"
                ></path>
                <circle cx="12" cy="12" r="3" fill="none" stroke="#fff" strokeWidth="1.5"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[700px] h-[22px] absolute bottom-[20px] bg-black flex flex-row items-center justify-center text-[#ffffff99]">
        <div className="h-full text-right tracking-wider">View Portfolio </div>
        <div className="h-full ">
          <svg width="16" height="16" className="mt-1 ml-2.5">
            <g stroke="#FFFFFF99" fill="none" fillRule="evenodd">
              <path d="M9.414 2.343L15.071 8l-5.657 5.657M15.071 8H.93"></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
