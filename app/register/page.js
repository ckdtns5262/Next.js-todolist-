import React from 'react'
import CloseButton from '../component/button/CloseButton'

const page = () => {
    return (
        <div className="justify-center 
            items-center 
            flex 
            overflow-x-hidden 
            overflow-y-auto 
            fixed 
            inset-0
            z-50 
            outline-none 
            focus:outline-none
            bg-neutral-800
            bg-opacity-70
            ">

            <div className='flex bg-black w-full h-full lg:opacity-60 relative'>
                <CloseButton />
                <form action='/api/auth/signup' method='POST'>
                    <h2 className='text-white text-2xl -mt-12'>회원가입</h2>
                    <div className='flex flex-col mt-4 gap-4'>
                        <div>
                            <p className="">
                                <input className="max-w-lg p-4 text-lg bg-black border-2 border-neutral-800 disabled:bg-neutral-900 
            disabled:opacity-70 disabled:cursor-not-allowed
            rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition" placeholder="userId" name="userId" />
                            </p>
                        </div>
                        <div>
                            <p>
                                <input className="w-full p-4 text-lg bg-black border-2 border-neutral-800 disabled:bg-neutral-900 
            disabled:opacity-70 disabled:cursor-not-allowed
            rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition" placeholder="name" name="name" />
                            </p>
                        </div>
                        <div>
                            <p>
                                <input
                                    className="w-full p-4 text-lg bg-black border-2 border-neutral-800 disabled:bg-neutral-900 
                disabled:opacity-70 disabled:cursor-not-allowed
                rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition" placeholder="email" name="email" />
                            </p>
                        </div>
                        <div>
                            <p>
                                <input
                                    className="w-full p-4 text-lg bg-black border-2 border-neutral-800 disabled:bg-neutral-900 
                disabled:opacity-70 disabled:cursor-not-allowed
                rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition" placeholder="password" name="password" />
                            </p>
                        </div>
                        <div>
                            <button type="submit" className="w-full justify-center items-centerf mt-2 border border-gray-300 bg-red-300 rounded-sm p-1 font-bold">회원가입</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default page