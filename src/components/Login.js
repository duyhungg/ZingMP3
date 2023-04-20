import icons from "../ultis/icons";
import avatar from "../assets/avatar.jpg";
import React, { useState } from "react";
import Tippy from "@tippyjs/react/";
import Tippys from "@tippyjs/react/headless";
import Setting from "./Setting";
import "tippy.js/dist/tippy.css"; // optional
import Avatar from "./Avatar";
function Login() {
  const { RiVipDiamondLine } = icons;
  return (
    <div className="flex gap-6 items-center justify-center">
      <Tippy content="Nâng cấp Vip">
        <span className="rounded-full bg-overlay-20 p-2 hover:cursor-pointer">
          <RiVipDiamondLine size={24} />
        </span>
      </Tippy>
      <Setting />
      <Avatar />
      <></>
    </div>
  );
}

export default Login;
