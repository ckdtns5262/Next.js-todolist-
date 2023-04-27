

import Sidebar from './Sidebar'


export default function Container({children}){
    return (
        <div className="container">
            {/* sidebar */}
                <div className="sidebar">
                    <Sidebar/>
                </div>
            {/* container */}
                <div className="content">
                    <p className=''>Today main focus<br/></p>
                    <p className='font-bold'> Design team meeting</p>
                    {children}
                </div>
        </div>
    )
}