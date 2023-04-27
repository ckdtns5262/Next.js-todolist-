"use client";
import Image from "next/image";
export default function Profile() {
  return (
    <>
      <div className="flex mt-5">
        <Image src="/author3.png" alt="" width="45" height="45" />
        <div>
          <h4 className="text-gray-500 text-sm">Do-it</h4>
          <p className="text-[#58a8cb]">Hamza mameri</p>
        </div>
      </div>
      <div className="mt-5 border-2 border-b-[#58a8cb] w-4/6"></div>
    </>
  );
}
