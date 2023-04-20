import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { apiGetChartHome } from "../../apis";
import { RankList } from "../../components";
const notActiveStyle = "text-[24px] text-black font-semibold py-[15px]";
const activeStyle =
  "text-[24px] text-main-500 py-[15px] font-semibold border-b-2 border-[#0E8080]";
function WeekRank({ weekChart }) {
  const { pid } = useParams();
  useEffect(() => {}, [pid]);
  console.log(weekChart);
  return (
    <div>
      <div className="w-full h-[90px]">
        <div>
          <div className="flex flex-col ml-6">
            <h3 className=" font-bold text-[40px] text-main-500 flex">
              #Bảng xếp hạng tuần
            </h3>
            <div className="flex gap-5 mt-2">
              {weekChart?.map((item) => (
                <NavLink
                  key={item.chartId}
                  to={item?.link?.split(".")[0]}
                  className={({ isActive }) =>
                    isActive ? activeStyle : notActiveStyle
                  }>
                  {item.country === "vn"
                    ? "V-POP"
                    : item.country === "us"
                    ? "US-UK"
                    : item.country === "korea"
                    ? "K-POP"
                    : ""}
                </NavLink>
              ))}
            </div>
            <div className="mr-8 ">
              <RankList
                data={
                  weekChart?.find((item) => item?.link?.includes(pid))?.items
                }
                number={20}
                nodes={false}
                isHideAlbums={true}
                numberSlides={30}
                numberArtists={30}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[100px]"></div>
      </div>
    </div>
  );
}

export default WeekRank;
