
import React, { useEffect, useRef } from 'react';
import './App.css';

export default function App() {
  const canvasRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    class Application {
      constructor(canvas, heading) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas.style.backgroundColor = 'transparent';
        this.images = [];
        this.loadedImages = 0;
        this.totalImages = 64;
        this.currentFrameIndex = 1;
        this.heading = heading;

        for (let i = 0; i < this.totalImages; i++) {
          const img = new window.Image();
          img.onload = () => {
            this.loadedImages++;
            if (this.loadedImages === this.totalImages) {
              this.addEventListeners();
              this.render();
            }
          };
          img.src = `https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/medium/${String(i).padStart(4, '0')}.png`;
          this.images.push(img);
        }
      }

      handleDifferentUIComponents = {
        handleHeadingAnimationBasedonScroll: () => {
          const heading = this.heading;
          const scrollTop = window.scrollY;
          const viewportHeight = window.innerHeight;
          const opacity = Math.max(0, 1 - (scrollTop / (2 * viewportHeight)));
          heading.style.opacity = opacity;
        }
      }

      addEventListeners() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
      }

      handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScrollTop;
        const frameCount = this.totalImages;
        const frameIndex = Math.min(
          frameCount - 1,
          Math.floor(scrollFraction * frameCount)
        );
        this.currentFrameIndex = frameIndex;
        this.render();
        this.handleDifferentUIComponents.handleHeadingAnimationBasedonScroll();
      }

      handleResize = () => {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.render();
      }

      render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const img = this.images[this.currentFrameIndex];
        if (!img) return;
        const canvasRatio = this.canvas.width / this.canvas.height;
        const imgRatio = img.width / img.height;
        let drawWidth, drawHeight, offsetX = 0, offsetY = 0;
        if (canvasRatio > imgRatio) {
          drawWidth = this.canvas.width;
          drawHeight = drawWidth / imgRatio;
          offsetY = (this.canvas.height - drawHeight) / 2;
        } else {
          drawHeight = this.canvas.height;
          drawWidth = drawHeight * imgRatio;
          offsetX = (this.canvas.width - drawWidth) / 2;
        }
        this.ctx.save();
        if (this.totalImages - this.currentFrameIndex < 10) {
          this.ctx.globalAlpha = (this.totalImages - this.currentFrameIndex) / 10;
        }
        this.ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        this.ctx.restore();
      }

      cleanup() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
      }
    }

    const canvas = canvasRef.current;
    const heading = headingRef.current;
    let app;
    if (canvas && heading) {
      app = new Application(canvas, heading);
    }
    return () => {
      if (app) app.cleanup();
    };
  }, []);

  return (
    <div>
      <h1 ref={headingRef}>Airpods Pro</h1>
      <canvas ref={canvasRef}></canvas>
      <div className="landing_container"></div>
    </div>
  );
}
