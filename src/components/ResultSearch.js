import icons from "../ultis/icons";
import { rcm } from "../ultis/menu";
function ResultSearch() {
  const { HiOutlineTrendingUp } = icons;
  console.log(rcm);
  return (
    <div className=" w-[500px] bg-main-400 mt-[-5px] rounded-l-[20px] rounded-r-[20px]">
      <div className="px-2 pt-2 pb-2 items-center font-bold">
        Đề xuất dành cho bạn
      </div>
      {rcm.map((item) => (
        <div className="flex px-2 pt-2 pb-2 items-center gap-2" key={item.id}>
          <span>{item.icons}</span>
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default ResultSearch;
