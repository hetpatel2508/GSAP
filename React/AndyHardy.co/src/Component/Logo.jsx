import React from 'react';

export default function Logo({ MyRef, LOGO }) {
  return (
    <div
      className="opacity-0 ml-[41.7%] mt-[40px] fixed w-[250px] h-[50px] cursor-pointer z-20 overflow-hidden flex flex-col gap-0"
      ref={MyRef}
    >
      <div className="w-full min-h-full flex justify-center items-center" ref={LOGO}>
        <span className="text-sm tracking-[8px] flex justify-center items-center text-white">
          ANDREW &nbsp;HARDY
        </span>
      </div>
      <div className="w-full min-h-full flex justify-center items-center">
        <img
          src="https://andyhardy.co/assets/img/logo-andy.png"
          alt=""
          className="w-[97px] h-[23px] object-contain"
        />
      </div>
    </div>
  );
}
