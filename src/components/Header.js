import React from "react";

export default function Header() {
  return (
    <>
      <header className="bg-blue-800 px-4 py-3 w-screen border-b-4 border-gray-500 flex justify-center">
        <div className="w-full max-w-4xl ">
          <div className="flex items-center justify-between text-gray-500">
            <svg
              className="fill-current"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m19.828 6.612-5.52-5.535a3.135 3.135 0 0 0-4.5 0L4.273 6.612l7.755 3.87zm2.118 2.235 1.095 1.095a3.12 3.12 0 0 1 0 4.5L14.22 23.35a2.685 2.685 0 0 1-.72.525V13.077zm-19.893 0L.958 9.942a3.12 3.12 0 0 0 0 4.5L9.78 23.35c.21.214.453.392.72.525V13.077z" />
            </svg>
            <button type="button" className="text-gray-500 sm:hidden">
              <svg
                class="fill-current"
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
              <h1>What are you interested in learning?</h1>
              <p>Choose from the long list of courses available on this platform</p>
              
              <div>
                  <div>Enroll Now</div>
                  <div></div>
              </div>
              
          </div>
        </div>
      </header>
    </>
  );
}
