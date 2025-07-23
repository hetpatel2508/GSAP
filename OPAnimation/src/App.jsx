import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function App() {


  // Preload images
  const frames = {
    currentIndex: 0,
    maxIndex: 382,
  }

  const [imagesLoaded, setImagesLoaded] = React.useState(0);
  const images = [];


  function preloadImages() {
    for (let i = 1; i <= frames.maxIndex; i++) {
      const imageUrl = `./ImagesOf/frame_${i.toString().padStart(4, '0')}.jpeg`;
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        setImagesLoaded(prev => {
          const newCount = prev + 1;
          images.push(img);

          if (newCount === frames.maxIndex) {
            console.log('All images preloaded haha:>');

            loadImage(frames.currentIndex);
            startAnimation();
          }
          return newCount;
        });
      }
    }
  }


  function loadImage(index) {
    const canvas = document.getElementById('myFrame');
    const ctx = canvas.getContext('2d');
    
    if(index >=0 && index <= frames.maxIndex) {
      const img = images[index];

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.max(scaleX, scaleY);
      
      const newWidth = img.width * scale;
      const newHeight = img.height * scale;

      const offsetX = (canvas.width - newWidth) / 2;
      const offsetY = (canvas.height - newHeight) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high'; 

      ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

      frames.currentIndex = index;

      // setTimeout(() => loadImage(frames.currentIndex), 1000 / 30);
    }
  }

  function startAnimation() { 
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.parent',
        start: 'top top',
        scrub: 2,
        markers: true,
      }
    });

    tl.to(frames, {
      currentIndex: frames.maxIndex,
      onUpdate: () => {
        loadImage(Math.floor(frames.currentIndex));
      },
      ease: 'none', 
    });
  }

  React.useEffect(() => {
    preloadImages();
  }, []);

  return (
    <div className='w-full bg-zinc-900'>
      <div className='parent relative top-0 left-0 w-full h-[800vh]'>
        <div className='w-full h-screen sticky top-0 left-0 cnavas-container'>
          <canvas id='myFrame' className='w-full h-screen'>

          </canvas>
        </div>
      </div>
    </div>
  )
}
