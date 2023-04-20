import icons from "./icons";

const {
  MdOutlineLibraryMusic,
  MdOutlineFeed,
  TbChartArcs,
  HiOutlineChartPie,
  AiOutlineStar,
  BsMusicNoteBeamed,
  HiOutlineTrendingUp,
  AiOutlineInfoCircle,
  BsFillTelephoneFill,
  RiAdvertisementFill,
  BsFillFileRuledFill,
  MdOutlinePrivacyTip,
  BsArrowUpRight,
  AiOutlineArrowRight,
  BsFillPlayFill,
  BsBrush,
  MdLogout,
  BsUpload,
  BiBlock,
  RiVipFill,
  RiVipCrown2Fill,
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
export const infor = [
  {
    id: 1,
    text: "Giới Thiệu",
    icon1: <AiOutlineInfoCircle size={20} />,
    icon2: <BsArrowUpRight size={20} />,
  },
  {
    id: 2,
    text: "Liên Hệ",
    icon1: <BsFillTelephoneFill size={20} />,
    icon2: <BsArrowUpRight size={20} />,
  },
  {
    id: 3,
    text: "Quảng Cáo",
    icon1: <RiAdvertisementFill size={20} />,
    icon2: <BsArrowUpRight size={20} />,
  },
  {
    id: 4,
    text: "Thỏa tuận sử dụng",
    icon1: <BsFillFileRuledFill size={20} />,
    icon2: <BsArrowUpRight size={20} />,
  },
  {
    id: 5,
    text: "Chính sách bảo mật",
    icon1: <MdOutlinePrivacyTip size={20} />,
    icon2: <BsArrowUpRight size={20} />,
  },
];
export const inforSetting = [
  {
    id: 1,
    text: "Trình phát nhạc",
    icon1: <BsFillPlayFill size={20} />,
    icon2: <AiOutlineArrowRight size={20} />,
  },
  {
    id: 2,
    text: "Giao diện",
    icon1: <BsBrush size={20} />,
    icon2: <AiOutlineArrowRight size={20} />,
  },
];
export const ava1 = [
  {
    id: 1,
    text: "Nâng cấp Vip",
    icon1: <RiVipFill size={20} />,
    icon2: <BsArrowUpRight size={20} />,
  },
  {
    id: 2,
    text: "Mua gói Vip",
    icon1: <RiVipCrown2Fill size={20} />,
    icon2: <BsArrowUpRight size={20} />,
  },
  {
    id: 3,
    text: "Danh sách chặn",
    icon1: <BiBlock size={20} />,
  },
  {
    id: 4,
    text: "upload",
    icon1: <BsUpload size={20} />,
  },
];
export const ava2 = [
  {
    id: 1,
    text: "Đăng xuất",
    icon1: <MdLogout size={20} />,
  },
];
