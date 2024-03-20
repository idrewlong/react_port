import Stack from "../assets/stack.svg";
import { useState } from "react";

export default function Project({
  logo,
  name,
  description,
  stack,
  width,
  link,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div className="line"></div>

      {/* insert projects here */}
      <div
        className="relative flex flex-col gap-4 py-6 px-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={logo} alt="" width={width} className="App-logo" />
        <div className="mt-4">
          {/* {isHovered && <div className="url">{link}</div>} */}
          <a className="text-xl font-bold" href={link} target="_blank">
            {name}
          </a>
          <p className="text-md">{description}</p>
        </div>

        {isHovered && (
          <div className="flex items-center gap-4 mt-4">
            <img src={Stack} alt="" width="24px" />
            <p className="text-md">{stack}</p>
          </div>
        )}
      </div>

      <div className="line"></div>
    </div>
  );
}
