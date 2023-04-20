import icons from "./icons";

const {
  MdOutlineLibraryMusic,
  MdOutlineFeed,
  TbChartArcs,
  HiOutlineChartPie,
  AiOutlineStar,
  BsMusicNoteBeamed,
  HiOutlineTrendingUp,
} = icons;
export const sidebarMenu = [
  {
    path: "mymusic",
    text: "Cá nhân",
    icons: <MdOutlineLibraryMusic size={24} />,
  },
  {
    path: "",
    text: "Khám phá",
    end: true,
    icons: <TbChartArcs size={24} />,
  },
  {
    path: "zingchart",
    text: "#zingchart",
    icons: <HiOutlineChartPie size={24} />,
  },
  {
    path: "follow",
    text: "Theo dõi",
    icons: <MdOutlineFeed size={24} />,
  },
];
export const underLeftSightBar = [
  {
    path: "",
    text: "Top 100",
    icons: <AiOutlineStar size={24} />,
  },
  {
    path: "",
    text: "Nhạc Mới",
    end: true,
    icons: <BsMusicNoteBeamed size={24} />,
  },
  {
    path: "",
    text: "#MV",
    icons: <HiOutlineChartPie size={24} />,
  },
];
export const rcm = [
  {
    id: 1,
    name: "Mãi Mãi Bên Nhau",
    icons: <HiOutlineTrendingUp size={24} />,
  },
  {
    id: 2,
    name: "Hạ Còn Vương Nắng",
    icons: <HiOutlineTrendingUp size={24} />,
  },
  {
    id: 3,
    name: "Đôi Mươi",
    icons: <HiOutlineTrendingUp size={24} />,
  },
  {
    id: 4,
    name: "Nàng Thơ",
    icons: <HiOutlineTrendingUp size={24} />,
  },
  {
    id: 5,
    name: "Cơn Mưa xa dần",
    icons: <HiOutlineTrendingUp size={24} />,
  },
];
