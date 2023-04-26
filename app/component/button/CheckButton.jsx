"use client";

import { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";

const CheckButton = () => {
  const [checkbtn, setCheckbtn] = useState();

  return (
    <div className="">
    <div className="w-12"></div>
      <BsCheckCircle className="text-[24px]"/>

    </div>
  );
};

export default CheckButton;
