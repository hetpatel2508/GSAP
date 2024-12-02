import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../App.css';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery({ LOGO, GalleryParent }) {
  React.useEffect(() => {
    let ctx = gsap.context(() => {
      // GSAP timeline setup for the gallery images
      let t1 = gsap.timeline({
        defaults: {
          duration: 1,
        },
        scrollTrigger: {
          trigger: GalleryParent.current,
          start: 'top 20%',
          end: 'bottom bottom',
          // markers: true,
        },
      });

      t1.from('.img_holder>*', {
        y: 200,
        opacity: 0,
      });
    });
    return () => ctx.revert();
  }, [GalleryParent]);

  const handleMouseEnter = (id) => {
    const allImages = document.querySelectorAll('.xyzxyz');
    allImages.forEach((el) => {
      el.style.opacity = '0'; // Reset opacity of all elements
    });
    // Show the hovered element
    const shadow = document.querySelector(`#xyz${id}`);
    if (shadow) {
      shadow.style.opacity = '1';
    }

    const img = document.querySelector(`#img${id}`);
    if (img) {
      img.classList.add('scale-110');
    }

    const text = document.querySelector(`#text${id}`);
    if (text) {
      text.classList.remove('text-[#FFFFFF99]');
      text.classList.add('translate-y-[-20%]', 'text-white');
    }

    const svg = document.querySelector(`#svg${id}`);
    if (svg) {
      svg.classList.add('fill-white');
    }
  };

  const handleMouseLeave = () => {
    const allImages = document.querySelectorAll('.xyzxyz');
    allImages.forEach((el) => {
      el.style.opacity = '0'; // Reset opacity of all elements
    });

    const img = document.querySelectorAll('.MyImg');
    img.forEach((el) => {
      el.classList.remove('scale-110');
    });

    const texts = document.querySelectorAll('.view-portfolio');
    texts.forEach((el) => {
      el.classList.remove('translate-y-[-20%]', 'text-white');
      el.classList.add('text-[#FFFFFF99]');
    });

    const svgs = document.querySelectorAll('.view-portfolio-svg');
    svgs.forEach((el) => {
      el.classList.remove('fill-white');
    });
  };

  return (
    <div ref={GalleryParent}>
      <div className="w-[100%] h-screen bg-[#000000] flex justify-center items-center overflow-hidden relative">
        <div className="w-[80%] h-[80%] mt-[10%] flex flex-row items-center justify-evenly img_holder ">
          <div
            className="w-[278px] h-[389px] bg-slate-400 flex flex-row items-center relative justify-center"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="xyzxyz z-[3]" id="xyz0"></div>
            <div className="GallaryPardo z-[2]"></div>
            <div
              className="w-full h-[40px] absolute bottom-[4%] z-[2] flex flex-row items-center justify-center gap-0 text-[#FFFFFF99] fill-[#FFFFFF99] transform  view-portfolio "
              id="text0"
              style={{ transition: 'all 0.5s ease' }}
            >
              <div className="w-[143px] h-[30px] uppercase traking-[2px] flex flex-row items-center justify-center">
                View portfolio
              </div>
              <div className="w-[30px] h-[30px] rounded-full flex flex-row items-center justify-center view-portfolio-svg">
                <svg width="16" height="16" className="mt-[16px]" id="svg0">
                  <g stroke="#FFFfff99" fill="none" fillRule="evenodd">
                    <path d="M9.414 2.343L15.071 8l-5.657 5.657M15.071 8H.93"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="bg-[url('https://andyhardy.co/media/pages/home/85d01c4049-1683607197/andy-bg-560x800-crop.jpg')] bg-center bg-no-repeat bg-cover absolute z-[0]"></div>
            <img
              src="https://andyhardy.co/assets/img/logo-andy.png"
              className="w-[118px] h-[28px] z-[4] MyImg"
              id="img0"
            ></img>
          </div>
          <div
            className="w-[278px] h-[389px] mb-[10%] bg-red-400 flex flex-row items-center justify-center"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="xyzxyz absolute z-[2]" id="xyz1"></div>
            <div className="GallaryPardo z-[1]"></div>
            <div
              className="w-full h-[40px] absolute bottom-[4%] z-[2] flex flex-row items-center justify-center gap-0 text-[#FFFFFF99] fill-[#FFFFFF99] transform view-portfolio"
              style={{ transition: 'all 0.5s ease' }}
              id="text1"
            >
              <div className="w-[93px] h-[30px] uppercase traking-[2px] flex flex-row items-center justify-center">
                mail list
              </div>
              <div className="w-[30px] h-[30px] rounded-full flex flex-row items-center justify-center view-portfolio-svg">
                <svg width="12" height="12" className="mt-[20px]">
                  <g stroke="#FFFFFF99" fill="none" fillRule="evenodd">
                    <path d="M3 1h8v8M11 1L1 11"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="bg-[url('https://andyhardy.co/media/pages/home/9c0cca0f68-1683607198/felan-bg-560x800-crop.jpg')] bg-center bg-no-repeat bg-cover absolute z-[0]"></div>

            <div className="w-[121px] h-[31px] flex flex-row justify-center align-center z-[3]">
              <svg
                width="120"
                height="30"
                id="img1"
                className="w-[118px] h-[28px] z-[2] MyImg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#FFFFFF" fillRule="evenodd">
                  <path d="M6.288 16.255c.63-2.696 2.306-4.148 4.821-4.148 2.516 0 4.192 1.452 4.821 4.148H6.288zm15.72 1.66c0-6.016-4.61-10.579-10.899-10.579C4.611 7.336 0 11.9 0 18.33c0 .544.045 1.068.11 1.584h21.71c.053-.197.189-.821.189-1.999zM10.809 29.345c7.873 0 10.152-6.75 10.152-6.75h-6.215s-1.244 1.84-3.937 1.84c-1.705 0-3.076-.738-3.906-1.902H.524c1.5 4.13 5.334 6.812 10.285 6.812M46.983 7.336c-4.122 0-5.977 2.892-5.977 2.892H40.8s-1.65-2.892-5.771-2.892c-3.092 0-4.947 2.273-4.947 2.273h-.206l-.413-1.86h-5.358v21.072h6.183V16.839c0-2.272 1.237-3.512 3.092-3.512s3.092 1.24 3.092 3.512v11.982h6.183V16.839c0-2.272 1.277-3.512 3.092-3.512 1.855 0 3.091 1.24 3.091 3.512v11.982h6.184V16.012c0-5.164-3.504-8.676-8.039-8.676M70 7.44c-1.261 0-2.28.237-3.085.55v5.786a4.763 4.763 0 0 1 2.255-.55c2.7 0 4.776 2.066 4.776 5.166 0 3.1-2.076 5.167-4.776 5.167-2.699 0-4.775-2.067-4.775-5.167 0-.128.008-.25.016-.375v-8.51h-.016V0h-6.23v28.932h5.4l.415-2.067h.207s1.66 2.48 5.814 2.48c5.606 0 10.174-4.546 10.174-10.953C80.175 11.986 75.607 7.44 70 7.44M82.27 28.821h6.289V0h-6.288zM101.989 24.436c-1.705 0-3.076-.74-3.907-1.903h-6.379c1.501 4.13 5.334 6.812 10.286 6.812 7.872 0 10.15-6.75 10.15-6.75h-6.214s-1.243 1.84-3.936 1.84M97.468 16.255c.628-2.696 2.305-4.148 4.82-4.148 2.516 0 4.192 1.452 4.822 4.148h-9.642zm15.72 1.66c0-6.016-4.612-10.579-10.9-10.579-6.497 0-11.109 4.563-11.109 10.993 0 .544.045 1.068.109 1.584H113c.052-.197.188-.821.188-1.999zM113.592 4.48h-.928v-.812h2.62v.812h-.93v2.856h-.762zM116.332 3.668h1.138l.65 2.28h.092l.65-2.28H120v3.668h-.743V5.083h-.093l-.65 2.253h-.696l-.65-2.253h-.093v2.253h-.743z"></path>
                </g>
              </svg>
            </div>
          </div>
          <div
            className="w-[278px] h-[389px] bg-blue-400 flex flex-row items-center justify-center"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="xyzxyz z-[1]" id="xyz2"></div>
            <div className="GallaryPardo z-[2]"></div>
            <div
              className="w-full h-[40px] absolute bottom-[4%] z-[2] flex flex-row items-center justify-center gap-0 text-[#FFFFFF99] fill-[#FFFFFF99] transform view-portfolio"
              id="text2"
              style={{ transition: 'all 0.5s ease' }}
            >
              <div className="w-[113px] h-[30px] uppercase traking-[2px] flex flex-row items-center justify-center">
                education
              </div>
              <div className="w-[30px] h-[30px] rounded-full flex flex-row items-center justify-center view-portfolio-svg">
                <svg width="12" height="12" className="mt-[20px]">
                  <g stroke="#FFFFFF99" fill="none" fillRule="evenodd">
                    <path d="M3 1h8v8M11 1L1 11"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="bg-[url('https://andyhardy.co/media/pages/home/cdf385d1f1-1683607198/education-bg-560x800-crop.jpg')] bg-center bg-no-repeat bg-cover absolute z-[0]"></div>

            <div className="w-[100px] h-[100px] rounded-full flex flex-row justify-center align-center z-[3]">
              <svg width="98" height="100" id="img2" className="MyImg">
                <g fill="#FEFEFE" fillRule="evenodd">
                  <path d="M6.868 21.128l7.602 4.528a.244.244 0 01.085.333l-.64 1.074a.243.243 0 01-.334.085L9.238 24.56l2.82 4.28c.08.12.084.277.01.401l-.49.823a.38.38 0 01-.36.184l-5.105-.44 4.343 2.586a.243.243 0 01.085.333l-.64 1.074a.244.244 0 01-.333.085l-7.602-4.528a.244.244 0 01-.085-.333l.64-1.074c.003-.005.007-.007.01-.011a.377.377 0 01.338-.156l6.801.587-3.756-5.7a.378.378 0 01-.024-.371c.003-.005.002-.01.005-.014l.64-1.074a.244.244 0 01.333-.085M16.343 13.403a2.883 2.883 0 00-.391 4.054 2.884 2.884 0 004.054.391 2.883 2.883 0 00.391-4.054 2.883 2.883 0 00-4.054-.391m4.768 5.785a4.622 4.622 0 01-6.5-.627 4.622 4.622 0 01.628-6.499 4.622 4.622 0 016.499.628 4.622 4.622 0 01-.627 6.498M34.6 2.08l2.975 8.331a.244.244 0 01-.147.311l-1.177.42a.243.243 0 01-.312-.147l-1.7-4.76-.552 5.094a.378.378 0 01-.249.316l-.902.322a.378.378 0 01-.393-.086L28.49 8.288l1.7 4.76a.243.243 0 01-.148.311l-1.177.42a.244.244 0 01-.311-.147L25.579 5.3a.243.243 0 01.147-.31l1.177-.42c.005-.003.01-.002.015-.003a.377.377 0 01.36.096l4.867 4.784.736-6.785a.377.377 0 01.219-.302l.012-.008 1.177-.42a.243.243 0 01.311.148M43.863 2.183l.055 2.024 3.662-.098a.244.244 0 01.25.237l.034 1.25a.243.243 0 01-.237.25l-3.663.098.057 2.12 4.748-.128a.244.244 0 01.25.237l.033 1.25a.243.243 0 01-.237.25l-4.99.133-1.25.034a.244.244 0 01-.25-.237L42.088.758a.243.243 0 01.237-.25l.77-.02a.24.24 0 01.097-.024L48.565.32a.243.243 0 01.25.236l.033 1.25a.244.244 0 01-.237.25l-4.748.127zM63.862 3.391l-2.384 8.52a.243.243 0 01-.3.17l-1.203-.337c-.01-.003-.019-.01-.028-.014a.246.246 0 01-.114-.095l-.016-.043-2.715-6.73-1.512 5.403a.243.243 0 01-.3.168l-1.203-.336a.244.244 0 01-.17-.3l2.384-8.52a.243.243 0 01.3-.169l1.203.336c.064.018.115.06.146.114l.001-.003 2.696 6.882 1.542-5.514a.244.244 0 01.3-.168l1.204.336c.129.036.205.17.169.3M77.072 10.52l-.674 1.052a.244.244 0 01-.337.073l-2.262-1.45-3.98 6.21a.244.244 0 01-.335.073l-1.053-.674a.243.243 0 01-.073-.336l3.98-6.21-2.263-1.449a.243.243 0 01-.074-.336l.675-1.053a.243.243 0 01.336-.073l5.986 3.836a.243.243 0 01.074.337M82.554 18.34c-.167.005-.385.06-.594.45-.185.342.008.913.203 1.364l.311.69.003.005.018.042.014.03c.333.762.684 1.865.139 2.88-.46.852-1.195 1.336-2.073 1.36-.953.028-1.992-.52-2.731-1.406a4.496 4.496 0 01-.377-.524c-.57-.928-.713-1.918-.413-2.781a.378.378 0 01.536-.213l.888.482a.372.372 0 01.187.408c-.108.482.15.98.281 1.194.396.645 1.075 1.12 1.58 1.105.166-.005.383-.06.593-.449.185-.343-.01-.917-.206-1.369l-.299-.648.008-.004-.014-.025c-.343-.762-.744-1.913-.177-2.965.459-.853 1.195-1.336 2.073-1.362 1.128-.032 2.377.744 3.108 1.932.574.933.714 1.93.407 2.796a.364.364 0 01-.516.206l-.912-.495a.357.357 0 01-.18-.393c.114-.485-.146-.989-.279-1.205-.395-.644-1.075-1.12-1.578-1.105M86.672 41.499l-.262-1.222a.243.243 0 01.187-.29l8.648-1.858a.243.243 0 01.289.187l.263 1.221a.244.244 0 01-.187.29l-8.649 1.858a.243.243 0 01-.29-.186M96.503 55.817l-8.839-.388a.244.244 0 01-.232-.254l.054-1.249c0-.01.006-.02.008-.03a.238.238 0 01.067-.133l.037-.025 5.94-4.171-5.606-.247a.243.243 0 01-.232-.254l.055-1.248a.244.244 0 01.254-.233l8.839.388c.134.006.238.12.232.254l-.055 1.249a.243.243 0 01-.077.167h.003L90.86 53.83l5.72.252c.134.006.237.12.232.254l-.055 1.248a.244.244 0 01-.254.233M82.638 76.519l3.414.69-1.774-2.997-1.64 2.307zm-4.922.42l.78-1.096a.267.267 0 01.27-.107l2.01.406 2.534-3.566-1.044-1.763a.269.269 0 01.012-.292l.779-1.096a.267.267 0 01.448.019l4.92 8.313a.286.286 0 01-.002.285l.007-.004-.017.025a.192.192 0 01-.016.021l-.778 1.1v-.01a.286.286 0 01-.27.097l-9.468-1.915a.267.267 0 01-.165-.417zM60.584 97.984l-3.108-8.282a.244.244 0 01.142-.313l1.17-.439a.243.243 0 01.313.143l1.776 4.73.47-5.1a.379.379 0 01.245-.32l.896-.337a.378.378 0 01.394.08l3.712 3.533-1.776-4.732a.243.243 0 01.142-.313l1.17-.439a.244.244 0 01.314.142l3.107 8.282a.243.243 0 01-.142.314l-1.17.439c-.005.001-.01 0-.015.002a.378.378 0 01-.361-.09L62.92 90.58l-.627 6.795a.379.379 0 01-.213.306c-.006.002-.009.006-.013.007l-1.17.44a.243.243 0 01-.313-.143M50.146 90.44l1.245-.097c.134-.01.252.09.262.223l.687 8.82a.243.243 0 01-.223.261l-1.246.098a.244.244 0 01-.262-.224l-.687-8.82a.243.243 0 01.224-.261M34.622 98.147l1.635-8.692a.243.243 0 01.285-.194l1.227.23c.011.003.02.01.03.012.05.017.092.045.12.085l.022.04 3.287 6.469 1.037-5.512a.243.243 0 01.284-.194l1.228.23c.132.025.219.153.194.285l-1.635 8.692a.244.244 0 01-.284.194l-1.228-.23a.242.242 0 01-.154-.101l-.001.003-3.282-6.62-1.058 5.625a.244.244 0 01-.285.194l-1.227-.231a.244.244 0 01-.195-.285M25.658 85.682c.87-.287 1.819-.196 2.827.27.018.008.035.019.051.03a.384.384 0 01.065.03c.963.584 1.575 1.33 1.819 2.222.357 1.302-.218 2.394-.337 2.602l-2.544 4.744a.312.312 0 01-.422.127l-.98-.526a.312.312 0 01-.128-.422l2.573-4.796s.35-.622.16-1.284c-.124-.432-.46-.82-1-1.158l-.008-.007c-.009-.003-.018-.005-.026-.009-.576-.256-1.081-.315-1.506-.174-.645.213-.963.832-.965.838l-.02.04-2.535 4.728a.345.345 0 01-.467.142l-.922-.495a.345.345 0 01-.141-.467l2.527-4.714c.106-.215.698-1.299 1.979-1.721M9.61 82.499l.89-.878a.244.244 0 01.343.002l1.888 1.912 5.247-5.18a.243.243 0 01.344.001l.878.889a.244.244 0 01-.002.345l-5.247 5.18 1.887 1.912a.243.243 0 01-.002.344l-.889.878a.243.243 0 01-.344-.002l-4.995-5.059a.243.243 0 01.003-.344M5.618 74.272l1.794-.938-1.696-3.246a.243.243 0 01.102-.329l1.108-.578a.243.243 0 01.328.103l1.697 3.246 1.879-.983-2.2-4.207a.244.244 0 01.104-.33l1.107-.577a.243.243 0 01.328.102l2.312 4.423.58 1.108a.243.243 0 01-.104.328L5.12 76.492a.243.243 0 01-.328-.103l-.357-.682a.234.234 0 01-.064-.077l-2.49-4.761a.244.244 0 01.103-.329l1.107-.579a.243.243 0 01.329.103l2.2 4.208zM0 50.778h47.42V49.5H0z"></path>
                </g>
              </svg>
            </div>
          </div>
          <div
            className="w-[278px] h-[389px] mb-[10%] bg-green-400 flex flex-row items-center justify-center"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="xyzxyz z-[2]" id="xyz3"></div>
            <div className="GallaryPardo z-[1]"></div>
            <div
              className="w-full h-[40px] absolute bottom-[4%] z-[2] flex flex-row items-center justify-center gap-0 text-[#FFFFFF99] fill-[#FFFFFF99] transform view-portfolio"
              style={{ transition: 'all 0.5s ease' }}
              id="text3"
            >
              <div className="w-[113px] h-[30px] uppercase traking-[2px] flex flex-row items-center justify-center">
                my presets
              </div>
              <div className="w-[30px] h-[30px] rounded-full flex flex-row items-center justify-center view-portfolio-svg">
                <svg width="12" height="12" className="mt-[20px]">
                  <g stroke="#FFFFFF99" fill="none" fillRule="evenodd">
                    <path d="M3 1h8v8M11 1L1 11"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="bg-[url('https://andyhardy.co/media/pages/home/50843ba13c-1683607198/presets-bg-560x800-crop.jpg')] bg-center bg-no-repeat bg-cover absolute z-[0]"></div>
            <div className="w-[150px] h-[40px] flex flex-row items-center justify-center z-[3]">
              <svg width="150" height="36" id="img3" className="MyImg">
                <path
                  d="M19.231 13.054c.24 0 .36-.06.36-.18s-.219-.174-.657-.162c-.438.012-.768-.015-.99-.081-.222-.066-.333-.315-.333-.747V5.391l-.001-.26v-.486c-.003-1.314-.009-2.08-.017-2.301a22.366 22.366 0 01-.018-.63c0-.348.087-.582.261-.702.174-.12.513-.168 1.017-.144l.414.018c.144.012.216-.042.216-.162 0-.108-.12-.162-.36-.162h-.828c-.144 0-.306.006-.486.018h-.306L15.127.562h-.378l-2.43 8.298A633 633 0 019.727.58a1.916 1.916 0 00-.198-.018L6.127.58 5.641.562c-.204-.012-.306.042-.306.162 0 .108.096.162.288.162.744 0 1.173.081 1.287.243.114.162.171.723.171 1.683v8.75c-.005.365-.022.61-.054.736-.06.228-.276.366-.648.414-.096.012-.384.018-.864.018-.204 0-.306.048-.306.144 0 .108.126.162.378.162.168 0 .492-.012.972-.036.36-.024.678-.03.954-.018l1.602.036c.18 0 .27-.042.27-.126 0-.144-.216-.21-.648-.198-.432.012-.738-.06-.918-.216a.376.376 0 01-.162-.261 13.546 13.546 0 01-.018-.963V1.948a983.57 983.57 0 002.25 6.966l.176.527.308.924.25.75.192.576.134.402.076.228.016.049c.108.336.228.504.36.504.12 0 .276-.336.468-1.008l1.566-5.508c.624-2.172 1.128-3.756 1.512-4.752l.018 9.756c0 .66-.018 1.02-.054 1.08-.12.204-.456.3-1.008.288l-.612-.018c-.168 0-.252.054-.252.162 0 .108.084.162.252.162h2.106c.42-.012.696-.018.828-.018.324 0 .819.006 1.485.018.518.01.914.015 1.19.017l.331.001zm7.714.162c1.632 0 3.009-.621 4.131-1.863 1.122-1.242 1.683-2.763 1.683-4.563 0-1.824-.546-3.351-1.638-4.581C30.029.979 28.673.364 27.053.364c-1.68 0-3.087.612-4.221 1.836-1.134 1.224-1.701 2.748-1.701 4.572 0 1.776.57 3.294 1.71 4.554 1.14 1.26 2.508 1.89 4.104 1.89zm.216-.288c-.684 0-1.206-.264-1.566-.792-.864-1.26-1.296-3.162-1.296-5.706 0-1.752.243-3.15.729-4.194S26.165.67 26.981.67c.804 0 1.392.372 1.764 1.116.564 1.14.846 2.904.846 5.292 0 1.968-.252 3.54-.756 4.716-.324.756-.882 1.134-1.674 1.134zm11.98.09c1.668 0 2.922-.162 3.762-.486 1.236-.48 2.178-1.242 2.826-2.286.624-.996.936-2.178.936-3.546 0-2.04-.726-3.624-2.178-4.752-1.164-.9-2.838-1.35-5.022-1.35h-.384C38.596.594 37.98.588 37.233.58c-.672-.012-1.368-.018-2.088-.018h-.324c-.168 0-.252.054-.252.162 0 .132.132.192.396.18.492-.012.798.09.918.306.072.12.108.444.108.972v9.162c0 .648-.024 1.014-.072 1.098-.108.192-.42.282-.936.27-.336-.012-.504.042-.504.162 0 .096.09.144.27.144L35.883 13l1.17-.018h.648a22.564 22.564 0 011.44.036zm.666-.324c-.492 0-.81-.066-.954-.198-.096-.084-.144-.522-.144-1.314V1.966c0-.444.096-.726.288-.846.144-.096.444-.144.9-.144 1.26 0 2.184.459 2.772 1.377.588.918.882 2.367.882 4.347 0 3.996-1.248 5.994-3.744 5.994zm18.64.432l.009-.36.027-1.242.017-1.596.001-.066V9.85c0-.18-.048-.27-.144-.27-.084 0-.144.09-.18.27-.132.744-.255 1.254-.369 1.53-.114.276-.321.534-.621.774a2.54 2.54 0 01-1.044.396c-.288.036-1.092.066-2.412.09l-1.152.018V6.592h1.224c.756 0 1.239.105 1.449.315.21.21.375.741.495 1.593.048.336.084.531.108.585.024.054.078.081.162.081.108 0 .162-.072.162-.216 0-.108-.006-.198-.018-.27a56.009 56.009 0 01-.036-2.34v-.221c.003-.282.008-.515.018-.697.036-.672.054-1.116.054-1.332 0-.216-.054-.324-.162-.324-.12 0-.21.222-.27.666-.12.828-.351 1.341-.693 1.539-.342.198-1.173.291-2.493.279V.94a45.405 45.405 0 011.728-.054c1.092 0 1.917.189 2.475.567.558.378.891.981.999 1.809.036.312.114.468.234.468.12 0 .18-.06.18-.18 0-.144-.03-.528-.09-1.152L57.943.436a8.053 8.053 0 01-.972.072L55.747.49c-1.404-.024-3.21-.012-5.418.036-.588.012-1.047.018-1.377.018-.33 0-.495.06-.495.18 0 .108.186.162.558.162.336 0 .558.036.666.108.108.072.168.204.18.396.012.072.018.468.018 1.188v9.126c0 .192-.012.366-.036.522-.048.288-.354.45-.918.486a6.686 6.686 0 00-.549.054c-.054.012-.081.054-.081.126 0 .096.108.144.324.144L50.131 13c2.376-.06 5.148-.018 8.316.126zm11.8.18c.876 0 1.314-.336 1.314-1.008 0-.408-.18-.612-.54-.612-.36 0-.54.162-.54.486 0 .156.069.276.207.36.138.084.207.15.207.198 0 .096-.09.144-.27.144-.216 0-.426-.135-.63-.405-.204-.27-.354-.945-.45-2.025-.12-1.356-.474-2.337-1.062-2.943-.588-.606-1.536-.951-2.844-1.035l.018-.108c1.032-.12 1.812-.3 2.34-.54 1.2-.552 1.8-1.404 1.8-2.556 0-.504-.144-.966-.432-1.386A2.598 2.598 0 0068.213.94c-.612-.264-1.758-.396-3.438-.396h-1.692l-.378.018h-.594c-.204 0-.414-.006-.63-.018h-.324c-.468 0-.756.009-.864.027-.108.018-.162.069-.162.153 0 .108.132.162.396.162.372 0 .642.036.81.108.132.06.21.147.234.261.024.114.036.483.036 1.107v9.27c0 .42-.018.672-.054.756-.072.168-.312.264-.72.288-.492.024-.738.09-.738.198 0 .096.084.144.252.144l.828-.018h.252c.156.012.294.018.414.018h1.296c.192 0 .396-.006.612-.018h.288l1.746.018c.144 0 .216-.048.216-.144 0-.108-.144-.162-.432-.162-.468 0-.786-.039-.954-.117-.168-.078-.252-.219-.252-.423-.01-.057-.015-.384-.017-.98l-.001-4.636c.708-.012 1.221.168 1.539.54.318.372.537 1.026.657 1.962l.18 1.476c.072.612.366 1.188.882 1.728.66.696 1.542 1.044 2.646 1.044zm-5.904-7.074v-3.21c.004-1.003.034-1.583.09-1.74.096-.264.342-.396.738-.396 1.224 0 1.836.774 1.836 2.322 0 1.068-.21 1.842-.63 2.322-.42.48-1.098.714-2.034.702zm8.164 6.785l.432-.017a49.38 49.38 0 011.656-.036c.18 0 .63.012 1.35.036.072.012.162.018.27.018.18 0 .27-.048.27-.144 0-.036-.006-.06-.018-.072-.048-.06-.27-.09-.666-.09-.336 0-.63-.048-.882-.144-.156-.06-.234-.216-.234-.468V5.89a33.865 33.865 0 01-.018-1.188V3.37a247.994 247.994 0 005.319 6.813c1.614 1.986 2.487 2.979 2.619 2.979.084 0 .126-.102.126-.306V9.286l-.001-.975a561.513 561.513 0 00-.017-3.969l-.018-2.088c-.012-.696.006-1.08.054-1.152.048-.12.234-.186.558-.198.552-.024.873-.042.963-.054.09-.012.135-.048.135-.108 0-.096-.102-.15-.306-.162-.163-.01-.649-.015-1.457-.017L82.21.562H81.56a5.781 5.781 0 01-.36.018h-.396c-.216 0-.324.048-.324.144 0 .072.072.114.216.126l.774.036c.312.012.516.057.612.135.096.078.144.261.144.549v7.128L75.909.58c-.552.024-1.272.036-2.16.036h-.207c-.33-.002-.585-.008-.765-.018a26.02 26.02 0 00-.774-.036c-.168 0-.252.054-.252.162 0 .096.096.15.288.162.72.024 1.212.126 1.476.306.348.24.558.624.63 1.152.024.156.036.612.036 1.368v7.398c0 .768-.03 1.2-.09 1.296-.096.144-.45.24-1.062.288-.528.036-.792.096-.792.18 0 .096.09.144.27.144H72.5l.007-.001zm30.314.037c.24 0 .36-.06.36-.18s-.219-.174-.657-.162c-.438.012-.768-.015-.99-.081-.222-.066-.333-.315-.333-.747V5.391l-.001-.26v-.486c-.003-1.314-.009-2.08-.017-2.301a22.366 22.366 0 01-.018-.63c0-.348.087-.582.261-.702.174-.12.513-.168 1.017-.144l.414.018c.144.012.216-.042.216-.162 0-.108-.12-.162-.36-.162h-.828c-.144 0-.306.006-.486.018h-.306L98.717.562h-.378l-2.43 8.298A633 633 0 0193.317.58a1.916 1.916 0 00-.198-.018L89.717.58l-.486-.018c-.204-.012-.306.042-.306.162 0 .108.096.162.288.162.744 0 1.173.081 1.287.243.114.162.171.723.171 1.683v8.586c0 .456-.018.756-.054.9-.06.228-.276.366-.648.414-.096.012-.384.018-.864.018-.204 0-.306.048-.306.144 0 .108.126.162.378.162.168 0 .492-.012.972-.036.36-.024.678-.03.954-.018l1.602.036c.18 0 .27-.042.27-.126 0-.144-.216-.21-.648-.198-.432.012-.738-.06-.918-.216a.376.376 0 01-.162-.261 8.451 8.451 0 01-.017-.635l-.001-9.634a983.57 983.57 0 002.25 6.966l.484 1.451.25.75.192.576.134.402.092.277c.108.336.228.504.36.504.12 0 .276-.336.468-1.008l1.566-5.508c.624-2.172 1.128-3.756 1.512-4.752l.018 9.756c0 .66-.018 1.02-.054 1.08-.12.204-.456.3-1.008.288l-.612-.018c-.168 0-.252.054-.252.162 0 .108.084.162.252.162h2.106c.42-.012.696-.018.828-.018.324 0 .819.006 1.485.018.518.01.914.015 1.19.017l.331.001zm7.714.162c1.632 0 3.009-.621 4.131-1.863 1.122-1.242 1.683-2.763 1.683-4.563 0-1.824-.546-3.351-1.638-4.581-1.092-1.23-2.448-1.845-4.068-1.845-1.68 0-3.087.612-4.221 1.836-1.134 1.224-1.701 2.748-1.701 4.572 0 1.776.57 3.294 1.71 4.554 1.14 1.26 2.508 1.89 4.104 1.89zm.216-.288c-.684 0-1.206-.264-1.566-.792-.864-1.26-1.296-3.162-1.296-5.706 0-1.752.243-3.15.729-4.194S109.755.67 110.571.67c.804 0 1.392.372 1.764 1.116.564 1.14.846 2.904.846 5.292 0 1.968-.252 3.54-.756 4.716-.324.756-.882 1.134-1.674 1.134zm13.564.288c1.632 0 3.009-.621 4.131-1.863 1.122-1.242 1.683-2.763 1.683-4.563 0-1.824-.546-3.351-1.638-4.581-1.092-1.23-2.448-1.845-4.068-1.845-1.68 0-3.087.612-4.221 1.836-1.134 1.224-1.701 2.748-1.701 4.572 0 1.776.57 3.294 1.71 4.554 1.14 1.26 2.508 1.89 4.104 1.89zm.216-.288c-.684 0-1.206-.264-1.566-.792-.864-1.26-1.296-3.162-1.296-5.706 0-1.752.243-3.15.729-4.194S123.535.67 124.351.67c.804 0 1.392.372 1.764 1.116.564 1.14.846 2.904.846 5.292 0 1.968-.252 3.54-.756 4.716-.324.756-.882 1.134-1.674 1.134zm11.98.09c1.668 0 2.922-.162 3.762-.486 1.236-.48 2.178-1.242 2.826-2.286.624-.996.936-2.178.936-3.546 0-2.04-.726-3.624-2.178-4.752-1.164-.9-2.838-1.35-5.022-1.35h-.384c-.485-.003-1.101-.009-1.848-.018-.672-.012-1.368-.018-2.088-.018h-.324c-.168 0-.252.054-.252.162 0 .132.132.192.396.18.492-.012.798.09.918.306.072.12.108.444.108.972v9.162c0 .648-.024 1.014-.072 1.098-.108.192-.42.282-.936.27-.336-.012-.504.042-.504.162 0 .096.09.144.27.144l1.134-.018 1.17-.018h.648a22.564 22.564 0 011.44.036zm.666-.324c-.492 0-.81-.066-.954-.198-.096-.084-.144-.522-.144-1.314V1.966c0-.444.096-.726.288-.846.144-.096.444-.144.9-.144 1.26 0 2.184.459 2.772 1.377.588.918.882 2.367.882 4.347 0 3.996-1.248 5.994-3.744 5.994zM.599 35.036c.096 0 .18-.006.252-.018a24.824 24.824 0 011.746-.054c.936 0 1.776.012 2.52.036.372.012.69.018.954.018.228 0 .342-.054.342-.162 0-.096-.108-.144-.324-.144-.708 0-1.122-.066-1.242-.198-.12-.132-.18-.582-.18-1.35v-4.356c.432-.012.954-.018 1.566-.018.456 0 .774.066.954.198.372.264.588.834.648 1.71.024.384.114.576.27.576.108 0 .162-.096.162-.288 0-.192-.006-.423-.018-.693a47.54 47.54 0 01-.018-1.665v-1.17c0-.504.006-.867.018-1.089.009-.159.014-.245.017-.26l-.003-.066c-.013-.125-.06-.187-.14-.187-.096 0-.156.078-.18.234-.144 1.092-.357 1.758-.639 1.998-.282.24-.987.36-2.115.36h-.522V22.94a29.127 29.127 0 011.656-.054c1.044 0 1.77.096 2.178.288.684.324 1.146.966 1.386 1.926.084.348.141.552.171.612.03.06.081.09.153.09.084 0 .126-.048.126-.144 0-.072-.006-.144-.018-.216-.096-.552-.192-1.548-.288-2.988a10.14 10.14 0 01-.864.054l-1.242-.018c-.756-.012-1.68-.012-2.772 0-.732 0-1.578.012-2.538.036-.665.01-1.088.015-1.27.017l-.44.001c-.24 0-.36.06-.36.18 0 .084.171.138.513.162.342.024.57.066.684.126.114.06.183.174.207.342l.018 10.44c0 .24-.024.408-.072.504-.06.24-.372.372-.936.396-.384.012-.576.072-.576.18s.072.162.216.162zm11.224-.018c.168 0 .426-.006.774-.018a74.784 74.784 0 012.376-.054c.516 0 1.134.018 1.854.054.072.012.15.018.234.018.156 0 .234-.048.234-.144 0-.084-.054-.132-.162-.144-.66-.036-1.047-.102-1.161-.198-.114-.096-.171-.402-.171-.918v-10.17l.054-.342c.084-.132.312-.21.684-.234.312-.012.495-.027.549-.045.054-.018.081-.063.081-.135 0-.096-.078-.144-.234-.144h-.18c-.144 0-.393.009-.747.027-.354.018-.627.027-.819.027h-1.165a73.815 73.815 0 01-1.823-.036c-.264 0-.42.006-.468.018-.048.012-.072.06-.072.144 0 .084.168.126.504.126.6 0 .9.15.9.45l.018.306v9.521c-.005.697-.035 1.115-.09 1.252-.06.15-.276.261-.648.333a8.19 8.19 0 00-.693.036c-.066.012-.099.048-.099.108 0 .108.09.162.27.162zm6.76-.001l.432-.017a49.38 49.38 0 011.656-.036c.18 0 .63.012 1.35.036.072.012.162.018.27.018.18 0 .27-.048.27-.144 0-.036-.006-.06-.018-.072-.048-.06-.27-.09-.666-.09-.336 0-.63-.048-.882-.144-.156-.06-.234-.216-.234-.468v-6.21a33.865 33.865 0 01-.018-1.188V25.37a247.994 247.994 0 005.319 6.813c1.614 1.986 2.487 2.979 2.619 2.979.084 0 .126-.102.126-.306l-.001-4.545a561.513 561.513 0 00-.017-3.969l-.018-2.088c-.012-.696.006-1.08.054-1.152.048-.12.234-.186.558-.198.552-.024.873-.042.963-.054.09-.012.135-.048.135-.108 0-.096-.102-.15-.306-.162-.163-.01-.649-.015-1.457-.017l-.431-.001H27.637a5.781 5.781 0 01-.36.018h-.396c-.216 0-.324.048-.324.144 0 .072.072.114.216.126l.774.036c.312.012.516.057.612.135.096.078.144.261.144.549v7.128l-6.318-8.118c-.552.024-1.272.036-2.16.036h-.207c-.33-.002-.585-.008-.765-.018a26.02 26.02 0 00-.774-.036c-.168 0-.252.054-.252.162 0 .096.096.15.288.162.72.024 1.212.126 1.476.306.348.24.558.624.63 1.152.024.156.036.612.036 1.368v7.583c-.005.653-.035 1.023-.09 1.111-.096.144-.45.24-1.062.288-.528.036-.792.096-.792.18 0 .096.09.144.27.144h-.007l.007-.001zm13.168.001c.168 0 .426-.006.774-.018a74.784 74.784 0 012.376-.054c.516 0 1.134.018 1.854.054.072.012.15.018.234.018.156 0 .234-.048.234-.144 0-.084-.054-.132-.162-.144-.66-.036-1.047-.102-1.161-.198-.114-.096-.171-.402-.171-.918v-10.17l.054-.342c.084-.132.312-.21.684-.234.312-.012.495-.027.549-.045.054-.018.081-.063.081-.135 0-.096-.078-.144-.234-.144h-.18c-.144 0-.393.009-.747.027-.354.018-.627.027-.819.027h-1.165a73.815 73.815 0 01-1.823-.036c-.264 0-.42.006-.468.018-.048.012-.072.06-.072.144 0 .084.168.126.504.126.6 0 .9.15.9.45l.018.306v9.521c-.005.697-.035 1.115-.09 1.252-.06.15-.276.261-.648.333a8.19 8.19 0 00-.693.036c-.066.012-.099.048-.099.108 0 .108.09.162.27.162zm7.12.27c.06 0 .108-.066.144-.198.108-.432.264-.648.468-.648.072 0 .156.018.252.054 1.284.492 2.292.738 3.024.738 1.2 0 2.187-.357 2.961-1.071s1.161-1.617 1.161-2.709c0-.972-.306-1.776-.918-2.412-.42-.432-1.278-1.008-2.574-1.728l-.257-.145c-.916-.523-1.544-.958-1.885-1.304-.372-.378-.558-.813-.558-1.305 0-.564.198-1.008.594-1.332.396-.324.93-.486 1.602-.486.48 0 .9.108 1.26.324.276.168.549.441.819.819.27.378.459.759.567 1.143.108.384.216.576.324.576.096 0 .144-.054.144-.162a.468.468 0 00-.018-.144 14.68 14.68 0 01-.072-1.584c0-.18.012-.408.036-.684.024-.276.036-.444.036-.504 0-.156-.06-.234-.18-.234-.084 0-.138.054-.162.162-.06.312-.18.468-.36.468-.096 0-.258-.048-.486-.144-.684-.288-1.326-.432-1.926-.432-1.116 0-2.04.339-2.772 1.017-.732.678-1.098 1.533-1.098 2.565 0 .876.216 1.632.648 2.268.468.696 1.356 1.392 2.664 2.088 1.176.636 1.872 1.062 2.088 1.278.288.3.432.702.432 1.206 0 .588-.222 1.086-.666 1.494-.444.408-.99.612-1.638.612-.732 0-1.416-.264-2.052-.792-.588-.492-.966-1.182-1.134-2.07-.096-.516-.204-.774-.324-.774-.12 0-.18.096-.18.288 0 .072.012.312.036.72.012.204.018.48.018.828 0 .432-.024.81-.072 1.134-.06.396-.09.672-.09.828 0 .168.048.252.144.252zm22.384-.18c.108 0 .162-.036.162-.108 0-.132-.114-.204-.342-.216-.48-.024-.819-.117-1.017-.279-.198-.162-.297-.633-.297-1.413v-8.856c0-.6.054-.975.162-1.125.108-.15.384-.243.828-.279.444-.036.666-.096.666-.18 0-.072-.06-.108-.18-.108l-1.332.054h-1.368c-.576 0-1.107-.009-1.593-.027a32.261 32.261 0 00-1.017-.027h-.18c-.156 0-.234.054-.234.162 0 .12.204.18.612.18.612 0 .918.408.918 1.224v4.014a43.016 43.016 0 01-3.906.036l-.432-.018v-4.248c0-.36.042-.609.126-.747.084-.138.303-.213.657-.225.354-.012.564-.027.63-.045.066-.018.099-.069.099-.153 0-.12-.084-.18-.252-.18-.036 0-.156.006-.36.018-.456.024-.912.036-1.368.036l-2.232-.018-1.319-.017h-.034c-.13.011-.195.047-.195.107 0 .096.078.144.234.144.456 0 .786.039.99.117.204.078.306.309.306.693v9.936c0 .576-.048.894-.144.954-.216.144-.606.216-1.17.216-.168 0-.252.048-.252.144 0 .108.108.162.324.162h.18c.6 0 1.233-.015 1.899-.045.666-.03 1.035-.045 1.107-.045-.108 0 .174.012.846.036.672.024 1.086.036 1.242.036.12 0 .18-.036.18-.108 0-.06-.03-.099-.09-.117a7.154 7.154 0 00-.648-.099c-.468-.06-.708-.246-.72-.558l-.036-5.562c.204.012.414.018.63.018l3.708-.018v4.176l-.018.9a6.969 6.969 0 01-.036.594c0 .12-.099.225-.297.315a1.87 1.87 0 01-.693.153c-.3.012-.45.066-.45.162 0 .108.186.156.558.144l.558-.018c.372-.012.648-.018.828-.018 1.932 0 3.108.036 3.528.108.072.012.15.018.234.018zm1.558-.09c.168 0 .426-.006.774-.018a74.784 74.784 0 012.376-.054c.516 0 1.134.018 1.854.054.072.012.15.018.234.018.156 0 .234-.048.234-.144 0-.084-.054-.132-.162-.144-.66-.036-1.047-.102-1.161-.198-.114-.096-.171-.402-.171-.918v-10.17l.054-.342c.084-.132.312-.21.684-.234.312-.012.495-.027.549-.045.054-.018.081-.063.081-.135 0-.096-.078-.144-.234-.144h-.18c-.144 0-.393.009-.747.027-.354.018-.627.027-.819.027h-1.165a73.815 73.815 0 01-1.823-.036c-.264 0-.42.006-.468.018-.048.012-.072.06-.072.144 0 .084.168.126.504.126.6 0 .9.15.9.45l.018.306v9.521c-.005.697-.035 1.115-.09 1.252-.06.15-.276.261-.648.333a8.19 8.19 0 00-.693.036c-.066.012-.099.048-.099.108 0 .108.09.162.27.162zm6.76-.001l.432-.017a49.38 49.38 0 011.656-.036c.18 0 .63.012 1.35.036.072.012.162.018.27.018.18 0 .27-.048.27-.144 0-.036-.006-.06-.018-.072-.048-.06-.27-.09-.666-.09-.336 0-.63-.048-.882-.144-.156-.06-.234-.216-.234-.468v-6.21a33.865 33.865 0 01-.018-1.188V25.37a247.994 247.994 0 005.319 6.813c1.614 1.986 2.487 2.979 2.619 2.979.084 0 .126-.102.126-.306l-.001-4.545a561.513 561.513 0 00-.017-3.969l-.018-2.088c-.012-.696.006-1.08.054-1.152.048-.12.234-.186.558-.198.552-.024.873-.042.963-.054.09-.012.135-.048.135-.108 0-.096-.102-.15-.306-.162-.163-.01-.649-.015-1.457-.017l-.431-.001H78.627a5.781 5.781 0 01-.36.018h-.396c-.216 0-.324.048-.324.144 0 .072.072.114.216.126l.774.036c.312.012.516.057.612.135.096.078.144.261.144.549v7.128l-6.318-8.118c-.552.024-1.272.036-2.16.036h-.207c-.33-.002-.585-.008-.765-.018a26.02 26.02 0 00-.774-.036c-.168 0-.252.054-.252.162 0 .096.096.15.288.162.72.024 1.212.126 1.476.306.348.24.558.624.63 1.152.024.156.036.612.036 1.368v7.583c-.005.653-.035 1.023-.09 1.111-.096.144-.45.24-1.062.288-.528.036-.792.096-.792.18 0 .096.09.144.27.144h-.007l.007-.001zm19.342.235c1.296 0 2.658-.486 4.086-1.458a13.45 13.45 0 01-.018-.738c0-.804.012-1.278.036-1.422.036-.252.324-.372.864-.36.456.012.684-.042.684-.162 0-.108-.072-.162-.216-.162h-.234c-.144 0-.465.009-.963.027-.498.018-.861.027-1.089.027l-1.152-.018a86.72 86.72 0 00-1.584-.018c-.204 0-.306.054-.306.162 0 .108.126.162.378.162h.45c.324 0 .525.057.603.171.078.114.117.639.117 1.575 0 1.248-.492 1.872-1.476 1.872-.78 0-1.404-.312-1.872-.936-.744-.984-1.116-2.73-1.116-5.238 0-4.032 1.134-6.048 3.402-6.048.732 0 1.302.222 1.71.666.552.612.9 1.446 1.044 2.502.06.48.174.72.342.72.12 0 .18-.114.18-.342l-.036-.63a21.77 21.77 0 01-.036-1.242c0-.54.006-.882.018-1.026.036-.456.054-.696.054-.72 0-.12-.042-.18-.126-.18-.072 0-.138.072-.198.216-.132.288-.294.432-.486.432-.108 0-.306-.066-.594-.198-.78-.36-1.536-.54-2.268-.54-1.776 0-3.252.63-4.428 1.89-1.176 1.26-1.764 2.838-1.764 4.734 0 1.788.573 3.282 1.719 4.482 1.146 1.2 2.571 1.8 4.275 1.8zm20.072-.162l-.018-1.278c-.012-.324.006-.75.054-1.278.012-.156.018-.348.018-.576 0-.264-.042-.396-.126-.396-.072 0-.126.096-.162.288-.12.684-.252 1.182-.396 1.494-.276.612-.792.996-1.548 1.152-.48.096-1.35.144-2.61.144-.288 0-.546-.006-.774-.018-.048-3.048-.072-5.01-.072-5.886v-4.284c0-.84.039-1.314.117-1.422.078-.108.339-.162.783-.162.312 0 .468-.054.468-.162 0-.096-.06-.144-.18-.144-.072 0-.138.006-.198.018h-4.572a2.32 2.32 0 00-.288-.018c-.168 0-.252.048-.252.144 0 .096.066.144.198.144l.45-.018c.3-.012.522.072.666.252.072.096.108.348.108.756l.018 9.756c0 .48-.054.768-.162.864-.168.156-.552.24-1.152.252-.168 0-.252.048-.252.144 0 .096.264.144.792.144h.756c4.02 0 6.798.03 8.334.09zm6.868.216c2.712 0 4.068-1.416 4.068-4.248v-7.614c.012-.156.036-.258.072-.306.108-.156.414-.24.918-.252.408-.012.612-.066.612-.162 0-.108-.186-.162-.558-.162h-.99l-.306.018c-.18 0-.444-.009-.792-.027a16.635 16.635 0 00-.792-.027c-.168 0-.252.048-.252.144 0 .132.216.204.648.216.348 0 .582.036.702.108.18.096.27.3.27.612v.306a6.03 6.03 0 00-.018.414v5.94c0 1.644-.234 2.784-.702 3.42-.384.528-.984.792-1.8.792-.72 0-1.302-.216-1.746-.648-.36-.348-.582-.912-.666-1.692-.036-.264-.054-.882-.054-1.854v-6.732c0-.12.012-.246.036-.378.036-.192.318-.288.846-.288.372 0 .558-.054.558-.162 0-.12-.102-.18-.306-.18h-.378.026c-.028.003-.301.009-.818.018-.202.005-.447.008-.737.009h-.468a135.05 135.05 0 01-1.135-.009l-1.116-.018c-.072 0-.162-.006-.27-.018h-.144c-.216 0-.324.054-.324.162 0 .084.066.132.198.144.636.048 1.014.114 1.134.198.12.084.18.318.18.702v6.912c0 1.62.288 2.748.864 3.384.768.852 1.848 1.278 3.24 1.278zm14.572-.252c.192 0 .288-.06.288-.18 0-.096-.066-.15-.198-.162-.684-.06-1.104-.132-1.26-.216-.156-.084-.24-.276-.252-.576l-.018-10.944c.24-.024.522-.036.846-.036.84 0 1.452.168 1.836.504.384.336.684.966.9 1.89.108.468.228.702.36.702.084 0 .126-.048.126-.144a4.77 4.77 0 00-.036-.378 43.168 43.168 0 01-.27-2.988 8.334 8.334 0 01-.9.036c-.444 0-.936.006-1.476.018-.54.012-1.152.018-1.836.018h-.404a98.015 98.015 0 01-2.647-.036l-1.207-.035-.044-.001-1.314.018h-.27c-.024.432-.084 1.236-.18 2.412-.048.564-.072.894-.072.99 0 .144.054.216.162.216.132 0 .24-.264.324-.792.132-.9.417-1.527.855-1.881.438-.354 1.137-.531 2.097-.531.18 0 .336.006.468.018v8.42c-.003 1.762-.015 2.712-.036 2.848-.048.288-.402.444-1.062.468a5.582 5.582 0 00-.594.036c-.048.012-.072.054-.072.126 0 .096.084.144.252.144l3.06-.054 1.854.054c.12 0 .27.006.45.018.144.012.234.018.27.018zm5.392-7.344c.468 0 .978-.162 1.53-.486.852-.504 1.278-1.314 1.278-2.43 0-.696-.171-1.248-.513-1.656-.342-.408-.807-.612-1.395-.612-.468 0-.843.12-1.125.36-.282.24-.423.558-.423.954 0 .336.105.612.315.828.21.216.483.324.819.324.588 0 .882-.336.882-1.008.468.276.702.744.702 1.404 0 1.08-.684 1.782-2.052 2.106-.096.024-.144.066-.144.126s.042.09.126.09zm5.41 7.578c.06 0 .108-.066.144-.198.108-.432.264-.648.468-.648.072 0 .156.018.252.054 1.284.492 2.292.738 3.024.738 1.2 0 2.187-.357 2.961-1.071s1.161-1.617 1.161-2.709c0-.972-.306-1.776-.918-2.412-.42-.432-1.278-1.008-2.574-1.728-1.056-.588-1.77-1.071-2.142-1.449-.372-.378-.558-.813-.558-1.305 0-.564.198-1.008.594-1.332.396-.324.93-.486 1.602-.486.48 0 .9.108 1.26.324.276.168.549.441.819.819.27.378.459.759.567 1.143.108.384.216.576.324.576.096 0 .144-.054.144-.162a.468.468 0 00-.018-.144 14.68 14.68 0 01-.072-1.584c0-.18.012-.408.036-.684.024-.276.036-.444.036-.504 0-.156-.06-.234-.18-.234-.084 0-.138.054-.162.162-.06.312-.18.468-.36.468-.096 0-.258-.048-.486-.144-.684-.288-1.326-.432-1.926-.432-1.116 0-2.04.339-2.772 1.017-.732.678-1.098 1.533-1.098 2.565 0 .876.216 1.632.648 2.268.468.696 1.356 1.392 2.664 2.088 1.176.636 1.872 1.062 2.088 1.278.288.3.432.702.432 1.206 0 .588-.222 1.086-.666 1.494-.444.408-.99.612-1.638.612-.732 0-1.416-.264-2.052-.792-.588-.492-.966-1.182-1.134-2.07-.096-.516-.204-.774-.324-.774-.12 0-.18.096-.18.288 0 .072.012.312.036.72.012.204.018.48.018.828 0 .432-.024.81-.072 1.134-.06.396-.09.672-.09.828 0 .168.048.252.144.252z"
                  fill="#FFF"
                  fillRule="nonzero"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
