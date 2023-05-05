import { BsCalendar4Week } from "react-icons/bs";
import {
  AiOutlineSchedule,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
import Profile from "./Profile";
import LoginButton from "./button/LoginButton";
import LogOutButton from "./button/LogOutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Sidebar() {
  let session = await getServerSession(authOptions);

  return (
    <div className="text-black sticky">
      <Profile />
      <ul className="mt-12 space-y-12">
        <li className="s-li">
          <Link href="/write">
            <BsCalendar4Week className="w-1/4" />
            <p className="w-3/4">오늘의 할일 만들기</p>
          </Link>
        </li>
        <div className="ml-4 circle-item space-y-5 ">
          <div className="flex items-center justify-items-center">
            <div className="circle bg-red-400" />
            <p className="ml-2 text-neutral-300 hover:text-neutral-500">Personal</p>
          </div>

          <div className="flex items-center justify-items-center">
            <div className="circle bg-blue-400" />
            <p className="ml-2 text-neutral-300 hover:text-neutral-500">Freelance</p>
          </div>
          <div className="flex items-center justify-items-center">
            <div className="circle bg-yellow-400" />
            <p className="ml-2  text-neutral-300 hover:text-neutral-500">Work</p>
          </div>
        </div>
        <li className="s-li">
          <Link href="/list">
            <AiOutlineSchedule className="w-1/4" />
            <p className="w-3/4">오늘의 할일보기 </p>
          </Link>
        </li>
        <li className="s-li">
          <Link href="/setting">
            <IoSettingsOutline className="w-1/4" />
            <p className="w-3/4">Settings</p>
          </Link>
        </li>
        {session ? (
          <li className="flex s-li">
            <AiOutlineLogout />
            <LogOutButton />
          </li>
        ) : (
          <li className="flex s-li">
            <AiOutlineLogin />
            <LoginButton />
          </li>
        )}
      </ul>
    </div>
  );
}
