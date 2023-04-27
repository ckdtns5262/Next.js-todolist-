import { BsCalendar4Week } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
import Profile from "./Profile";

export default function Sidebar() {
  return (
    <div className="text-black">
        <Profile/>
      <ul className="mt-12 space-y-20">
        <li className="">
          <Link href="/write">
            <BsCalendar4Week className="w-1/4 i" />
            <p className="w-3/4">Today tasks</p>
          </Link>
        </li>
        <li className="">
          <Link href="/list">
            <AiOutlineSchedule className="w-1/4 i" />
            <p className="w-3/4">Scheduled tasks</p>
          </Link>
        </li>
        <li className="flex">
          <IoSettingsOutline className="w-1/4 i" />
          <p className="w-3/4">Settings</p>
        </li>
      </ul>
    </div>
  );
}
