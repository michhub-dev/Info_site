import React, { useState } from 'react';
export default function Form() {

    const [formInfo, setFormInfo] = useState({
        userName: "",
        email: "",
        message: ""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target 
        setFormInfo(prevFormInfo => {
            return {
                ...prevFormInfo,
                [name]: value
            }
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault() 
        if(formInfo.userName ==="" || formInfo.email === " "){
           
            console.log("You need to fill out the inputs")
            setFormInfo(prevFormInfo => {
                return {
                    ...prevFormInfo,
                    [prevFormInfo.name]: " "
                }
            })
        } else  if(formInfo.message === ""){
            console.log("Please type your message")
            setFormInfo(prevFormInfo => {
                return {
                    ...prevFormInfo,
                    [prevFormInfo.email]: " "
                }
            })
        }


    }
    return(
        <>
           <div className="bg-gray-800 py-12 w-full mt-12 flex flex-col items-center border-t-2 border-black">
                 <h2
                  className="text-xl font-bold text-gray-400"
                  >
                Send us email</h2>
                 
                 <form 
                   className="w-full text-gray-200 max-w-xl mt-4 px-8 md:px-0 "
                   onSubmit={handleSubmit}
                   >
                     <div className="flex flex-col md:flex-row md:-mx-2">
                         <label 
                           htmlFor="name"
                          className="sr-only"
                         >
                            Name
                            </label>
                         <input 
                           id="name"
                           type="text"
                           placeholder="Enter your name" 
                           className="focus:outline-none mt-4 bg-gray-700 rounded-xl border border-gray-600 px-4 py-2 md:mx-2 w-full focus:bg-white focus:text-bold text-center text-black" 
                           name='userName'
                           value={formInfo.userName}
                           onChange={handleChange}
                          />
                          <label 
                           htmlFor="email"
                           className="sr-only"
                           >
                            email
                            </label>
                         <input
                          id="email"
                          type="email"
                          placeholder="Enter your email" 
                          className=" focus:outline-none mt-4 bg-gray-700 rounded-xl border border-gray-600 px-4 py-2 md:mx-2 w-full focus:bg-white focus:text-bold text-center text-black" 
                          name="email"
                          value={formInfo.email}
                          onChange={handleChange}
                          />
                          <textarea 
                            placeholder="Type your message"
                            className="focus:outline-none mt-4 bg-gray-700 rounded-xl border border-gray-600 px-4 py-2 md:mx-2 w-full focus:bg-white focus:text-bold text-center text-black" 
                            name='message'
                            value={formInfo.message}
                            onChange={handleChange}
                           />
                     </div>
                     <div className="flex flex-col md:flex-row md:-mx-2">
                         <button
                          className="bg-blue-600 py-4 px-2 my-2 focus:outline-none hover:bg-blue-400 rounded-xl w-full text-sm md:mx-2"
                          >
                        Send message
                        </button>
                     </div>
                     
                 </form>
             </div>
        </>
    )
}