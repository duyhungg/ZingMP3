import icons from "../ultis/icons";
import avatar from "../assets/avatar.jpg";
function Login() {
  const { RiVipDiamondLine, FiSettings } = icons;
  return (
    <div className="flex gap-6 items-center justify-center">
      <span
        className="rounded-full bg-overlay-20 p-2 hover:cursor-pointer"
        title="Nâng cấp vip">
        <RiVipDiamondLine size={24} />
      </span>
      <span
        className="rounded-full bg-overlay-20 p-2 hover:cursor-pointer "
        title="Cài đặt">
        <FiSettings size={24} />
      </span>
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
