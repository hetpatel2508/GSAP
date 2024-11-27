import React from 'react';
import '../App.css';

export default function Navbar() {
  const circle = React.useRef();
  const Info = React.useRef();

  const handleCircleEnter = () => {
    circle.current.classList.remove('bg-white');

    // Convert the children collection to an array and loop over them
    Array.from(circle.current.children).forEach((child) => {
      child.classList.remove('bg-black');
      child.classList.add('bg-white');
    });

    circle.current.classList.add('bg-[#252525]');
  };

  const handleCircleLeave = () => {
    circle.current.classList.remove('bg-[#252525]');

    // Convert the children collection to an array and loop over them
    Array.from(circle.current.children).forEach((child) => {
      child.classList.remove('bg-white');
      child.classList.add('bg-black');
    });

    circle.current.classList.add('bg-white');
  };

  const handleInfoEnter = () => {
    Info.current.classList.remove('bg-white');
    Info.current.classList.add('bg-[#252525]');

    Info.current.classList.remove('text-black');
    Info.current.classList.add('text-white');
  };

  const handleInfoLeave = () => {
    Info.current.classList.remove('bg-[#252525]');
    Info.current.classList.add('bg-white');

    Info.current.classList.remove('text-white');
    Info.current.classList.add('text-black');
  };

  return (
    <>
      <div className="w-full h-[50px] mt-[40px] fixed z-20 flex flex-row items-center justify-between ">
        <div className="absolute w-[100%] h-[50vh] z-0" id="nakra"></div>
        <div
          className="w-[50px] h-[50px] cursor-pointer rounded-[25px] bg-white ml-[40px] flex flex-col items-center gap-1.5 transition-all duration-300 ease-in-out z-[1]"
          onMouseEnter={handleCircleEnter} // onMouseEnter
          onMouseLeave={handleCircleLeave} // onMouseLeave
          ref={circle}
        >
          <div className="transition-all duration-400 w-[19px] mt-5 h-[2px] bg-black rounded-sm ease-in-out"></div>
          <div className="transition-all duration-400 w-[19px] h-[2px] bg-black rounded-sm ease-in-out"></div>
        </div>
        <div
          className="w-[148px] h-[50px] cursor-pointer rounded-[25px] bg-white mr-[40px] flex justify-center items-center transition-all duration-300 text-[15px] font-semibold text-black ease-in-out z-[1]"
          ref={Info}
          onMouseEnter={handleInfoEnter}
          onMouseLeave={handleInfoLeave}
        >
          Get In Touch
        </div>
      </div>
    </>
  );
}
