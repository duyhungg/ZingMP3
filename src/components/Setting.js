import React from "react";
import Tippy from "@tippyjs/react/";
import Tippys from "@tippyjs/react/headless";
import icons from "../ultis/icons";
import { useState } from "react";
function Settings() {
  const { FiSettings } = icons;
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <Tippy content="Cài Đặt">
      <Tippys
        render={(attrs) => (
          <div className="box" tabIndex="-1" {...attrs}>
            My tippy box
          </div>
        )}
        visible={visible}
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
