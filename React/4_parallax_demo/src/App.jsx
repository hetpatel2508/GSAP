import React from 'react';
import './App.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App() {
  const [background, setBackground] = React.useState(20);

  const parallaxRef = React.useRef(null);
  const mountain3 = React.useRef(null);
  const mountain2 = React.useRef(null);
  const mountain1 = React.useRef(null);
  const cloudsBottom = React.useRef(null);
  const cloudsLeft = React.useRef(null);
  const cloudsRight = React.useRef(null);
  const stars = React.useRef(null);
  const sun = React.useRef(null);
  const copy = React.useRef(null);
  const btn = React.useRef(null);

  React.useEffect(() => {
    let ctx = gsap.context(() => {
      let t1 = gsap.timeline({
        defaults: {
          duration: 1,
        },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top top',
          end: '5000 top',
          // markers: true,
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            let progress = self.progress;
            let bg = Math.round(progress * 100);
            setBackground(bg + 20);
          },
        },
      });

      t1.to(mountain3.current, { y: -80 }, 0);
      t1.to(mountain2.current, { y: -30 }, 0);
      t1.to(mountain1.current, { y: 50 }, 0);

      t1.to(sun.current, { y: 150 }, 0);

      t1.to(cloudsLeft.current, { x: -100, y: -50, scale: 0.8, opacity: 0 }, -0.5);
      t1.to(cloudsRight.current, { x: 100, y: -50, scale: 0.8, opacity: 0 }, -0.5);
      t1.to(cloudsBottom.current, { y: 100, opacity: 0 }, -0.5);

      t1.to(stars.current, { top: 0, opacity: 1 }, 0.5);

      t1.to(copy.current, { y: -410, opacity: 1 }, 0);

      t1.to(btn.current, { opacity: 1 }, 1.2);
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="parallax-outer">
      <div
        ref={parallaxRef}
        style={{
          background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67, #EDFC54 )`,
        }}
        className="parallax"
      >
        <img ref={mountain3} className="mountain-3" src="/parallax/mountain-3.svg" />
        <img ref={mountain2} className="mountain-2" src="/parallax/mountain-2.svg" />
        <img ref={mountain1} className="mountain-1" src="/parallax/mountain-1.svg" />
        <img ref={sun} className="sun" src="/parallax/sun.svg" />
        <img ref={cloudsBottom} className="clouds-bottom" src="/parallax/cloud-bottom.svg" />
        <img ref={cloudsLeft} className="clouds-left" src="/parallax/clouds-left.svg" />
        <img ref={cloudsRight} className="clouds-right" src="/parallax/clouds-right.svg" />
        <img ref={stars} className="stars" src="/parallax/stars.svg" />
        <div ref={copy} className="copy">
          <h1>Journey</h1>
          <span ref={btn}>Discover more</span>
        </div>
      </div>

      <div className="about">
        <h2>Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod! Quasi, quidem.
          Quae, quos. Quisquam, quod! Quasi, quidem. Quae, quos. Quisquam, quod! Quasi, quidem.
          Quae, quos. Quisquam, quod! Quasi, quidem. Quae, quos. Quisquam, quod! Quasi, quidem.
          Quae, quos. Quisquam, quod! Quasi, quidem. Quae, quos. Quisquam, quod! Quasi, quidem.
          Quae, quos. Quisquam, quod! Quasi, quidem. Quae, quos. Quisquam, quod! Quasi, quidem.
        </p>
      </div>
    </div>
  );
}
