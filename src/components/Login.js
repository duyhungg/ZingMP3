import icons from "../ultis/icons";
import avatar from "../assets/avatar.jpg";
import React, { useState } from "react";
import Tippy from "@tippyjs/react/";
import Tippys from "@tippyjs/react/headless";
import Setting from "./Setting";
import "tippy.js/dist/tippy.css"; // optional
function Login() {
  const { RiVipDiamondLine, FiSettings } = icons;
  const [setting, setSetting] = useState(false);
  const show = () => setSetting(true);
  const hide = () => setSetting(false);
  return (
    <div className="flex gap-6 items-center justify-center">
      <Tippy content="Nâng cấp Vip">
        <span className="rounded-full bg-overlay-20 p-2 hover:cursor-pointer">
          <RiVipDiamondLine size={24} />
        </span>
      </Tippy>
      <Setting />
      <img
        src={avatar}
        alt="avatar"
        className="object-cover w-[40px] h-[40px] rounded-full hover:cursor-pointer"
      />
      <></>
    </div>
  );
}

export default Login;
