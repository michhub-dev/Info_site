import React from 'react';
import Zoom from 'react-reveal/Zoom'; 

export default function Main(){
    return (
        <>
         <main className="flex flex-col items-center mt-16 w-full">
            <Zoom></Zoom>
             <div className="mx-4 max-w-4xl">
                 <h2 className="font-bold text-xl border-b pb-1 border-indigo-600 text-indigo-700 font-sans ">How it works?</h2>
                 
                 <p className="text-sm mt-4 text-gray-600 shadow-lg p-4 rounded-lg">
                    Register and select a prefered course. If you are not sure of the course to enroll, do well to reach out 
                    via the message box below.
                 </p>
                 <h2 className="text-xl mt-8 font-bold pt-1 font-sans text-indigo-700 border-b border-indigo-600 ">
                     Advantages 
                 </h2>
                 
                 <div className="flex flex-col sm:flex-row sm:-mx-2">
                     <div className="sm:w-1/3 mt-4">
                         <div className="bg-white sm:p-3 md:p-8 h-full sm:mx-2 flex flex-col items-center rounded-lg p-8 border-b-4 border-gray-500">
                             <div className="w-16 p-2 rounded-full bg-gray-200 text-indigo-700">
                                 <svg 
                                 className="h-12 w-12 fill-current"
                                 viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 8v11.529S6.621 19.357 12 22c5.379-2.643 10-2.471 10-2.471V8s-5.454 0-10 2.471C7.454 8 2 8 2 8z"/><circle cx="12" cy="5" r="3"/>
                                 </svg>
                             </div>
                             <div className="font-bold ml-4 font-sans mt-4 ">Self-pace</div>
                             <Zoom duration={3000} delay={1000}>
                             <div className="mt-2 text-gray-600 shadow-lg p-4 rounded-lg text-center text-sm">
                                 Take the course at your prefered time and day. You can save to watch offline or stream
                             </div>
                             </Zoom>
                         </div>
                     </div>
                        <div className="sm:w-1/3 mt-4">
                         <div className="bg-white sm:p-3 md:p-8 h-full sm:mx-2 flex flex-col items-center rounded-lg p-8 border-b-4 border-gray-500">
                             <div className="w-16 p-2 rounded-full bg-gray-200 text-indigo-700">
                                 <svg className="h-12 w-12 fill-current" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                        <path  d="M13 0a5 5 0 0 0-5 5 4.88 4.88 0 0 0 .35 1.829c-.01.01-.03.02-.04.03L4.3 10.881 2.707 9.293a1 1 0 0 0-1.414 1.414L2.882 12.3l-.585.587-.59-.589a1 1 0 1 0-1.414 1.41l.591.59-.29.291a1.974 1.974 0 0 0 0 2.819 1.975 1.975 0 0 0 2.82 0l7.727-7.718c.01-.01.02-.03.03-.04A4.881 4.881 0 0 0 13 10a5 5 0 0 0 0-10zm0 7a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/>
                                </svg>
                             </div>
                             <div className="font-bold ml-4 mt-4 font-sans">Easy access</div>
                            <Zoom duration={3000} delay={1000}>
                              <div className="mt-2 text-gray-600 shadow-lg p-4 rounded-lg text-center text-sm">
                                 You get access to all our free courses. 
                                 Switch between courses and work on amazing projects
                              </div>
                            </Zoom>
                         </div>
                     </div>
                        <div className="sm:w-1/3 mt-4 ">
                         <div className="bg-white sm:p-3 md:p-8 h-full sm:mx-2 flex flex-col items-center rounded-lg p-8 border-b-4 border-gray-500">
                             <div className="w-16 p-2 rounded-full bg-gray-200 text-indigo-700">
                                 <svg className="h-12 w-12 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M144.8 17c-11.3-17.8-37.2-22.8-54-9.4C35.3 51.9 0 118 0 192h256L144.8 17zM496 96h-48c-35.3 0-64 28.7-64 64v64H0c0 50.6 23 96.4 60.3 130.7C25.7 363.6 0 394.7 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-8.9-1.8-17.2-4.4-25.2 21.6 5.9 44.6 9.2 68.4 9.2s46.9-3.3 68.4-9.2c-2.7 8-4.4 16.3-4.4 25.2 0 44.2 35.8 80 80 80s80-35.8 80-80c0-37.3-25.7-68.4-60.3-77.3C425 320.4 448 274.6 448 224v-64h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM80 464c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm320-32c0 17.6-14.4 32-32 32s-32-14.4-32-32 14.4-32 32-32 32 14.4 32 32z"/>
                                 </svg>
                             </div>
                             <div className="font-bold ml-4 mt-4 font-sans">Easy navigation</div>
                             <Zoom duration={3000} delay={1000}>
                             <div className="mt-2 text-gray-600 shadow-lg text-center text-sm p-4 rounded-lg">
                                Our platform is easy to navigate, checkout for the amazing career opportunities we got
                             </div>
                             </Zoom>
                         </div>
                     </div>
                     
                 </div>
                 
             </div>
             <div className="bg-gray-800 py-12 w-full mt-12 flex flex-col items-center border-t-2 border-black">
                 <h2 className="text-xl font-bold text-gray-400">Send us email</h2>
                 
                 <form className="w-full text-gray-200 max-w-xl mt-4 px-8 md:px-0 " action="#" method="post">
                     <div className="flex flex-col md:flex-row md:-mx-2">
                         <label htmlFor="name" className="sr-only">Name</label>
                         <input id="name" type="text" placeholder="Enter your name" className="focus:outline-none mt-4 bg-gray-700 rounded-xl border border-gray-600 px-4 py-2 md:mx-2 w-full focus:bg-white focus:text-bold text-center text-black" />
                          <label htmlFor="email" className="sr-only">Name</label>
                         <input id="email" type="email" placeholder="Enter your email" className=" focus:outline-none mt-4 bg-gray-700 rounded-xl border border-gray-600 px-4 py-2 md:mx-2 w-full focus:bg-white focus:text-bold text-center text-black" />
                          <textarea placeholder="Type your message" className="focus:outline-none mt-4 bg-gray-700 rounded-xl border border-gray-600 px-4 py-2 md:mx-2 w-full focus:bg-white focus:text-bold text-center text-black" />
                     </div>
                     <div className="flex flex-col md:flex-row md:-mx-2">
                         <button className="bg-blue-600 py-4 px-2 my-2 focus:outline-none hover:bg-blue-400 rounded-xl w-full text-sm md:mx-2">Send message</button>
                     </div>
                     
                 </form>
             </div>
         </main>
        </>
    )
}