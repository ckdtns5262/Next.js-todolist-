import CloseButton from "../component/button/CloseButton";


export default function Register() {

    return (<>
    
        <div className="  justify-center 
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
           <CloseButton/>
            <form action="/api/auth/signup" method="POST">
            <div className="flex flex-col">
                <div>
                    <p className="">UserId
                        <input className="w-full p-4 text-lg bg-black border-2 border-neutral-800 disabled:bg-neutral-900 
                        disabled:opacity-70 disabled:cursor-not-allowed
                        rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition" placeholder="userId" name="userId"/>
                    </p>
                </div>
                <div>
                    <p className="">Name
                        <input className="w-full p-4 text-lg bg-black border-2 border-neutral-800 disabled:bg-neutral-900 
                        disabled:opacity-70 disabled:cursor-not-allowed
                        rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition" placeholder="name" name="name"/>
                    </p>
                </div>
                <div>
                    <p>Email
                        <input
                            className="w-full p-4 text-lg bg-black border-2 border-neutral-800 disabled:bg-neutral-900 
                            disabled:opacity-70 disabled:cursor-not-allowed
                            rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition" placeholder="email" name="email"/>
                    </p>
                </div>
                <div>
                    <p>Password
                        <input
                            className="w-full p-4 text-lg bg-black border-2 border-neutral-800 disabled:bg-neutral-900 
                            disabled:opacity-70 disabled:cursor-not-allowed
                            rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition" placeholder="password" name="password"/>
                    </p>
                
                </div>
                <div>

                    <button type="submit" className="w-20 justify-center items-centerf mt-2 border border-gray-300 bg-red-300 rounded-sm p-1 font-bold">회원가입</button>
                </div>
            </div>
            </form>
        </div>
        </>
    )
}