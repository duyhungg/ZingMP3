import React from "react";
import Tippy from "@tippyjs/react/";
import Tippys from "@tippyjs/react/headless";
import icons from "../ultis/icons";
import Menu from "./Menu";
import { infor, inforSetting } from "../ultis/menu";
import { useState } from "react";
function Settings() {
  const { FiSettings } = icons;
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  console.log(infor);
  return (
    <Tippy content="Cài Đặt">
      <Tippys
        render={(attrs) => <Menu arr={infor} arr1={inforSetting} />}
        visible={visible}
        interactive
        onClickOutside={hide}>
        <span
          className="rounded-full bg-overlay-20 p-2 hover:cursor-pointer "
          onClick={visible ? hide : show}>
          <FiSettings size={24} />
        </span>
      </Tippys>
    </Tippy>
  );
}

export default Settings;
