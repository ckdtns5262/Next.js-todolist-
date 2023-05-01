

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";
export default async function Profile() {

let session = await getServerSession(authOptions)

  return (
    <>
    {
      session ?  <>
      <div className="flex mt-5">
      <Image src={`${session.user.image}`} alt={`${session.user.name}의 프로필사진`} width="45" height="45" />
      <div>
        <h4 className="text-gray-500 text-sm">Do-it</h4>
        <p className="text-[#58a8cb]">{session.user.name}</p>
      </div>
    </div>
    <div className="mt-5 border-2 border-b-[#58a8cb] w-4/6"></div></> : 
    <>
    <div className="flex mt-5">
    <Image src="/placeholder.png" alt="비회원 프로필사진" width="45" height="45" />
    <div>
      <h4 className="text-gray-500 text-sm">Do-it</h4>
      <p className="text-[#58a8cb]">비회원</p>
    </div>
  </div>
  <div className="mt-5 border-2 border-b-[#58a8cb] w-4/6"></div>
  </>
    }
     
    </>
  );
}
