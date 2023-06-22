import styles from "./navbar.module.scss";
// import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className="relative flex flex-row w-full z-10 justify-between">
      <div className=" w-[5vh] h-[5vh] bg-black rounded-full"></div>
      <ul className="flex flex-row gap-7 items-center">
        <li>Notre expo</li>
        <li>Notre histoire</li>
        <li>Où nous trouvez ?</li>
        <li>Contactez-nous</li>
      </ul>
    </nav>
  );
};
