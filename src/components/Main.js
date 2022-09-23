import React from 'react';

export default function Main(){
    return (
        <>
         <main className="flex flex-col items-center mt-16 w-full">
             <div className="mx-4 max-w-4xl">
                 <h2 className="font-bold text-xl border-b pb-1 border-indigo-600 text-indigo-700  ">How it works?</h2>
                 <p className="text-sm mt-4 text-gray-600">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                     nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                 </p>
                 <h2 className="text-xl font-bold pt-1 text-indigo-700 border-b border-indigo-600 ">
                     Advantages 
                 </h2>
                 
                 <div className="flex flex-col sm:flex-row sm:-mx-2">
                     <div className="sm:w-1/3 mt-4">
                         <div className="bg-white sm:p-3 md:p-8 h-full sm:mx-2 flex flex-col items-center rounded-lg p-8 border-b-4 border-gray-500">
                             <div className="w-16 p-2 rounded-full bg-gray-200 text-indigo-700">
                                 <svg className="h-12 w-12 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M144.8 17c-11.3-17.8-37.2-22.8-54-9.4C35.3 51.9 0 118 0 192h256L144.8 17zM496 96h-48c-35.3 0-64 28.7-64 64v64H0c0 50.6 23 96.4 60.3 130.7C25.7 363.6 0 394.7 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-8.9-1.8-17.2-4.4-25.2 21.6 5.9 44.6 9.2 68.4 9.2s46.9-3.3 68.4-9.2c-2.7 8-4.4 16.3-4.4 25.2 0 44.2 35.8 80 80 80s80-35.8 80-80c0-37.3-25.7-68.4-60.3-77.3C425 320.4 448 274.6 448 224v-64h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM80 464c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm320-32c0 17.6-14.4 32-32 32s-32-14.4-32-32 14.4-32 32-32 32 14.4 32 32z"/>
                                 </svg>
                             </div>
                             <div className="font-bold ml-4 mt-4">Easy navigation</div>
                             <div className="mt-2 text-gray-600 text-center text-sm">Lorem ipsum dolor sit amet, 
                             consectetur adipiscing elit, sed do eiusmod temp</div>
                         </div>
                     </div>
                        <div className="sm:w-1/3 mt-4">
                         <div className="bg-white sm:p-3 md:p-8 h-full sm:mx-2 flex flex-col items-center rounded-lg p-8 border-b-4 border-gray-500">
                             <div className="w-16 p-2 rounded-full bg-gray-200 text-indigo-700">
                                 <svg className="h-12 w-12 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M144.8 17c-11.3-17.8-37.2-22.8-54-9.4C35.3 51.9 0 118 0 192h256L144.8 17zM496 96h-48c-35.3 0-64 28.7-64 64v64H0c0 50.6 23 96.4 60.3 130.7C25.7 363.6 0 394.7 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-8.9-1.8-17.2-4.4-25.2 21.6 5.9 44.6 9.2 68.4 9.2s46.9-3.3 68.4-9.2c-2.7 8-4.4 16.3-4.4 25.2 0 44.2 35.8 80 80 80s80-35.8 80-80c0-37.3-25.7-68.4-60.3-77.3C425 320.4 448 274.6 448 224v-64h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM80 464c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm320-32c0 17.6-14.4 32-32 32s-32-14.4-32-32 14.4-32 32-32 32 14.4 32 32z"/>
                                 </svg>
                             </div>
                             <div className="font-bold ml-4 mt-4">Easy navigation</div>
                             <div className="mt-2 text-gray-600 text-center text-sm">Lorem ipsum dolor sit amet, 
                             consectetur adipiscing elit, sed do eiusmod temp</div>
                         </div>
                     </div>
                        <div className="sm:w-1/3 mt-4 ">
                         <div className="bg-white sm:p-3 md:p-8 h-full sm:mx-2 flex flex-col items-center rounded-lg p-8 border-b-4 border-gray-500">
                             <div className="w-16 p-2 rounded-full bg-gray-200 text-indigo-700">
                                 <svg className="h-12 w-12 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M144.8 17c-11.3-17.8-37.2-22.8-54-9.4C35.3 51.9 0 118 0 192h256L144.8 17zM496 96h-48c-35.3 0-64 28.7-64 64v64H0c0 50.6 23 96.4 60.3 130.7C25.7 363.6 0 394.7 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-8.9-1.8-17.2-4.4-25.2 21.6 5.9 44.6 9.2 68.4 9.2s46.9-3.3 68.4-9.2c-2.7 8-4.4 16.3-4.4 25.2 0 44.2 35.8 80 80 80s80-35.8 80-80c0-37.3-25.7-68.4-60.3-77.3C425 320.4 448 274.6 448 224v-64h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM80 464c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm320-32c0 17.6-14.4 32-32 32s-32-14.4-32-32 14.4-32 32-32 32 14.4 32 32z"/>
                                 </svg>
                             </div>
                             <div className="font-bold ml-4 mt-4">Easy navigation</div>
                             <div className="mt-2 text-gray-600 text-center text-sm">Lorem ipsum dolor sit amet, 
                             consectetur adipiscing elit, sed do eiusmod temp</div>
                         </div>
                     </div>
                     
                 </div>
                 
             </div>
             <div className="bg-blue-850 py-12 w-full mt-12 flex flex-col items-center border-t-2 border-black">
                 <h2 className="text-xl font-bold text-gray-400">Send us email</h2>
                 <form>
                     
                 </form>
             </div>
         </main>
        </>
    )
}