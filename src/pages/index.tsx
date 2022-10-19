import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div className="menu flex h-screen items-center bg-zinc-800">
        <div className="menu-items z-20 ml-48 text-slate-50 duration-500 ease-in-out hover:text-slate-50/25">
          {links}
        </div>
        <div id="merror"></div>
      </div>
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const LINK_NAMES = ["Home", "Shop", "About", "Contact Us"];

const links = LINK_NAMES.map((label) => (
  <Link href="/" key={label}>
    <a className="block p-2.5 font-serif text-7xl font-thin hover:text-slate-50 ">
      {label}
    </a>
  </Link>
));

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  );
};
