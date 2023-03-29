import { memo } from "react";
import { Audio } from "react-loader-spinner";
function AudioLoading() {
  return (
    <Audio
      height="30"
      width="30"
      radius="9"
      color="white"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
  );
}

export default memo(AudioLoading);
