import type { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";

const BG_STYLE: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundImage:
      "radial-gradient(rgba(255, 255, 255, 0.1) 9%,    transparent 9%)",

    backgroundSize: "12vmin 12vmin",

    opacity: "1",

    transition:
      "opacity 800ms ease, background-size 800ms ease, background-position 800ms ease",
  },
};

const BG_IMG_STYLE: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundImage:
      "url(https://i.idol.st/u/background/VTlgW9Background-uUqLSB.jpg)",
    backgroundSize: "130% 130%",
    opacity: "0.15",
    backgroundPosition: "center 40%",
    transition:
      "opacity 800ms ease, background-size 800ms ease, background-position 800ms ease, background-image 500ms ease-in-out",
  },
};

const BG_LINKS = [
  "https://i.idol.st/u/background/Vo1whjBackground-CxRoMq.jpg",
  "https://i.idol.st/u/background/MDgHxqNijigasaki-High-School-kELJid.jpg",
  "https://i.idol.st/u/background/aTZNH2Background-q70suG.jpg",
  "https://i.idol.st/u/background/P43dBdBackground-3KX5R2.jpg",
  "https://i.idol.st/u/background/VTlgW9Background-uUqLSB.jpg",
];

const LINK_NAMES = ["Home", "Shop", "About", "Contact Us"];

const Home: NextPage = () => {
  const [bgStyle, setBgSyle] = useState(BG_STYLE.container);
  const [bgImgStyle, setBgImgStyle] = useState(BG_IMG_STYLE.container);

  function onMouseEnter(index: number) {
    setBgSyle({
      ...bgStyle,
      backgroundSize: "11vmin 11vmin",
      opacity: "0.5",
      backgroundPosition: `0 ${index * -25}%`,
    });

    setBgImgStyle({
      ...bgImgStyle,
      backgroundSize: "140% 140%",
      opacity: "0.10",
      backgroundPosition: `center ${45 + index * 15}%`,
      backgroundImage: `url(${BG_LINKS[4]})`,
    });
  }

  function onMouseLeave() {
    setBgSyle({ ...bgStyle, backgroundSize: "12vmin 12vmin", opacity: "1" });

    setBgImgStyle({
      ...bgImgStyle,
      backgroundSize: "130% 130%",
      opacity: "0.15",
      backgroundImage:
        "url(https://i.idol.st/u/background/VTlgW9Background-uUqLSB.jpg)",
    });
  }

  const links = LINK_NAMES.map((label, index) => {
    return (
      <Link href="/" key={index}>
        <a
          className="block p-2.5 font-serif text-7xl font-thin hover:text-slate-50"
          onMouseEnter={() => onMouseEnter(index)}
          onMouseLeave={() => onMouseLeave()}
        >
          {label}
        </a>
      </Link>
    );
  });

  return (
    <>
      <div className="menu flex h-screen items-center bg-zinc-800">
        <div className="menu-items z-20 ml-48 text-slate-50 duration-500 ease-in-out hover:text-slate-50/25">
          {links}
        </div>
        <div
          className="absolute inset-x-0 z-[1] h-screen w-screen"
          style={bgStyle}
        ></div>
        <div
          className="absolute inset-x-0 z-0 h-screen w-screen"
          style={bgImgStyle}
        ></div>
      </div>
    </>
  );
};

export default Home;
