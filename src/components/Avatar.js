import React from "react";
import avatar from "../assets/avatar.jpg";
import Tippy from "@tippyjs/react/";
import Tippys from "@tippyjs/react/headless";
import icons from "../ultis/icons";
import Menu from "./Menu";
import { ava1, ava2 } from "../ultis/menu";
import { useState } from "react";
function Avatar() {
  const { FiSettings } = icons;
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <Tippys
      render={(attrs) => <Menu arr={ava2} arr1={ava1} />}
      visible={visible}
      interactive
      onClickOutside={hide}>
      <img
        onClick={visible ? hide : show}
        src={avatar}
        alt="avatar"
        className="object-cover w-[40px] h-[40px] rounded-full hover:cursor-pointer"
      />
    </Tippys>
  );
}

export default Avatar;
