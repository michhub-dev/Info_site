import React from "react";
import LightSpeed from 'react-reveal/LightSpeed';
import Swing from 'react-reveal/Swing';
import Reveal from 'react-reveal/Reveal';

export default function Header() {
  return (
    <>
      <header className="bg-purple-600 px-4 py-3 w-screen border-b-4 border-gray-500 flex justify-center">
        <div className="w-full max-w-4xl ">
          <div className="flex items-center justify-between text-gray-400">
            <svg
              className="fill-current animate-spin"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m19.828 6.612-5.52-5.535a3.135 3.135 0 0 0-4.5 0L4.273 6.612l7.755 3.87zm2.118 2.235 1.095 1.095a3.12 3.12 0 0 1 0 4.5L14.22 23.35a2.685 2.685 0 0 1-.72.525V13.077zm-19.893 0L.958 9.942a3.12 3.12 0 0 0 0 4.5L9.78 23.35c.21.214.453.392.72.525V13.077z" />
            </svg>
            
            <button type="button" className=" text-gray-400 hover:text-gray-400 ">
              <svg
                className="fill-current"
                width="50px"
                height="50px"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12h30v4H10z" />
                <path d="M10 22h30v4H10z" />
                <path d="M10 32h30v4H10z" />
              </svg>
            </button>
          </div>
          <div className="my-4">
          <LightSpeed duration={3000} delay={1000}><h1 className="text-indigo-100 font-sans text-bold text-2xl">What are you interested in learning?</h1></LightSpeed>
          <Swing duration={4000} delay={1000}> <p className="text-gray-100 font-sans text-sm">Choose from the long list of courses available on this platform</p></Swing>
              
              <div className="mt-4 flex relative ">
                 <Reveal effect="fadeInUp">
                  <div >
                      <a href="#" className="bg-pink-600 transition scale-75 animate-pulse translate-x-4 skew-y-3 duration-300 animate-spin ease-linear hover:bg-pink-400 text-indigo-100 font-bold uppercase text-xs font-sans rounded-full mt-2 py-2 px-4">Enroll Now</a>
                  </div>
                  </Reveal>
                  <div className="absolute right-0 bg-white rounded-full  flex justify-center items-center p-5 border-4 border-gray-500">
                      <svg className="w-16 h-16  animate-pulse  " viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M272,240a16,16,0,1,0,16,16A16,16,0,0,0,272,240Zm-64-64a16,16,0,1,0,16,16A16,16,0,0,0,208,176Zm301.2,99c-20.93-47.12-48.43-151.73-73.07-186.75A207.9,207.9,0,0,0,266.09,0H192C86,0,0,86,0,192A191.23,191.23,0,0,0,64,334.81V512H320V448h64a64,64,0,0,0,64-64V320H480A32,32,0,0,0,509.2,275ZM368,240H355.88c-28.51,0-42.79,34.47-22.63,54.63l8.58,8.57a16,16,0,1,1-22.63,22.63l-8.57-8.58C290.47,297.09,256,311.37,256,339.88V352a16,16,0,0,1-32,0V339.88c0-28.51-34.47-42.79-54.63-22.63l-8.57,8.58a16,16,0,0,1-22.63-22.63l8.58-8.57c20.16-20.16,5.88-54.63-22.63-54.63H112a16,16,0,0,1,0-32h12.12c28.51,0,42.79-34.47,22.63-54.63l-8.58-8.57a16,16,0,0,1,22.63-22.63l8.57,8.58c20.16,20.16,54.63,5.88,54.63-22.63V96a16,16,0,0,1,32,0v12.12c0,28.51,34.47,42.79,54.63,22.63l8.57-8.58a16,16,0,0,1,22.63,22.63l-8.58,8.57C313.09,173.53,327.37,208,355.88,208H368a16,16,0,0,1,0,32Z"/></svg>
                  </div>
              </div>
              
          </div>
        </div>
      </header>
    </>
  );
}
