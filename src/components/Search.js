import React, { useState } from "react";
import icons from "../ultis/icons";
import Tippy from "@tippyjs/react/headless"; // different import path!
import ResultSearch from "./ResultSearch";
const { FiSearch } = icons;

function Search() {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const [border, setBoder] = useState(false);
  return (
    <Tippy
      render={(attrs) => (
        <ResultSearch className="box absolute " tabIndex="-1" {...attrs} />
      )}
      interactive
      visible={visible}
      onClickOutside={hide}>
      <div
        className="w-full flex items-center relative"
        onClick={visible ? hide : show}>
        <span className="h-10 pl-4 bg-[#DDE4E4] flex items-center justify-center rounded-l-[20px] text-gray-500 hover:cursor-pointer">
          <FiSearch size={24} />
        </span>
        <input
          type="text"
          className="outline-none px-4 bg-[#DDE4E4] py-2 w-full rounded-r-[20px] h-10 text-gray-500"
          placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
        />
      </div>
    </Tippy>
  );
}

export default Search;
