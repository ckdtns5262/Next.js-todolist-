import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Sidebar from "./Sidebar";

export default async function Container({ children }) {


  const sessoion = await getServerSession(authOptions)
  console.log(sessoion)

  return (
    <div className="container overflow-y-scroll dark-mode">
      {/* sidebar */}
      <div className="sidebar sticky top-0">
        <Sidebar/>
      </div>
      {/* container */}
      {/* {sessoion ?   <div className="content">
        <p className="">
          오늘의 주요할일
          <br />
        </p>
        <p className="font-bold ">나만의 Todolist</p>
        {children}
      </div> :  <div className="content">
        {children}
      </div>} */}
    
    </div>
  );
}
