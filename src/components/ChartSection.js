import { memo, useState, useEffect, useRef } from "react";
import bgChart from "../assets/bg-chart.jpg";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { useSelector } from "react-redux";
import SongItem from "./SongItem";
import _ from "lodash";
import { Link } from "react-router-dom";
import path from "../ultis/path";
import icons from "../ultis/icons";
function ChartSection() {
  const { BsFillPlayFill } = icons;
  const [data, setData] = useState(null);
  const { chart, rank } = useSelector((state) => state.app);
  const chartRef = useRef();
  const [tooltip, setTooltip] = useState({
    opacity: 0,
    top: 0,
    left: 0,
  });
  const [tooltipData, setTooltipData] = useState(null);
  //console.log({ chart, rank });
  const options = {
    responsive: true,
    pointRadius: 0,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: { display: false },
        grid: { color: "rgba(255,255,255,0.1)", drawTicks: false },
        min: chart?.minScore,
        max: chart?.maxScore,
        border: { dash: [3, 4] },
      },
      x: {
        ticks: { color: "white" },
        grid: { color: "transparent" },
      },
    },
    plugins: {
      legend: false,
      tooltip: {
        enabled: false,
        external: (ctx) => {
          const data = [];
          for (let i = 0; i < 3; i++)
            data.push({
              encodeId: Object.keys(chart?.items)[i],
              data: chart?.items[Object.keys(chart?.items)[i]]
                ?.filter((item) => +item.hour % 2 === 0)
                ?.map((item) => item.counter),
            });
          const tooltipModel = ctx.tooltip;
          setTooltipData(
            data.find((i) =>
              i.data.some(
                (n) => n === +tooltipModel.body[0].lines[0].replace(".", "")
              )
            )?.encodeId
          );
          if (tooltipModel.opacity === 0) {
            if (tooltip.opacity !== 0)
              setTooltip((prev) => ({ ...prev, opacity: 0 }));
            return;
          }
          const newTooltipData = {
            opacity: 1,
            left: tooltipModel.caretX,
            top: tooltipModel.caretY,
          };
          if (!_.isEqual(tooltip, newTooltipData)) setTooltip(newTooltipData);
        },
      },
    },
    hover: {
      mode: "dataset",
      intersect: false,
    },
  };

  // console.log({ chart, rank });
  // console.log(tooltipState);
  useEffect(() => {
    const labels = chart?.times
      ?.filter((item) => +item.hour % 2 === 0)
      ?.map((item) => `${item.hour}:00`);
    const datasets = [];
    if (chart?.items) {
      for (let i = 0; i < 3; i++) {
        datasets.push({
          data: chart?.items[Object.keys(chart?.items)[i]]
            ?.filter((item) => +item.hour % 2 === 0)
            ?.map((item) => item.counter),
          borderColor:
            i === 0
              ? "rgb(74,144 , 226)"
              : i === 1
              ? "rgb(39, 189,156)"
              : "rgb(227, 80, 80)",
          tension: 0.2,
          borderWidth: 2,
          pointBackgroundColor: "white",
          pointHoverRadius: 4,
          pointBorderColor:
            i === 0 ? "#4a90e2" : i === 1 ? "#50e3c2" : "#e35050",
          pointHoverBorderWidth: 4,
        });
      }
    }
    // console.log(labels);
    // console.log(datasets);
    setData({ labels, datasets });
  }, [chart]);
  return (
    <div className="px-[59px] mt-12 relative max-h-[530px] rounded-md">
      <img
        src={bgChart}
        alt="bg-chart"
        className="w-full object-cover rounded-md max-h-[530px]"
      />
      <div className="absolute top-0 z-10 left-[59px] bg-[rgba(77,34,104,0.9)] right-[59px] bottom-0 rounded-md "></div>
      <div className="absolute top-0 z-20 left-[59px] right-[59px] bottom-0 p-5 flex flex-col gap-8 rounded-md ">
        <Link to={path.ZING_CHART} className="flex gap-2 items-center">
          <h3 className="text-2xl text-white font-bold">#ZINGCHART</h3>
          <span className="text-black p-2 rounded-full bg-white">
            <BsFillPlayFill size={18} />
          </span>
        </Link>
        <div className="flex gap-4">
          <div className="flex-3 flex flex-col gap-2 mb-2">
            {rank
              ?.filter((i, index) => index < 3)
              ?.map((item, index) => (
                <SongItem
                  key={item.encodeId}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  artists={item.artistsNames}
                  sid={item.encodeId}
                  order={index + 1}
                  percent={Math.round((+item.score * 100) / +chart?.totalScore)}
                  style="text-white bg-[hsla(0,0%,100%,.07)] hover:bg-[#945EA7]"
                />
              ))}
          </div>
          {data && (
            <div className="flex-7 h-[90%] relative">
              <Line ref={chartRef} data={data} options={options} />
              <div
                className="tooltip"
                style={{
                  top: tooltip.top,
                  left: tooltip.left,
                  position: "absolute",
                  opacity: tooltip.opacity,
                }}>
                <SongItem
                  thumbnail={
                    rank?.find((i) => i.encodeId === tooltipData)?.thumbnail
                  }
                  title={rank?.find((i) => i.encodeId === tooltipData)?.title}
                  artists={
                    rank?.find((i) => i.encodeId === tooltipData)?.artistsNames
                  }
                  sid={rank?.find((i) => i.encodeId === tooltipData)?.encodeId}
                  style="bg-white"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(ChartSection);
