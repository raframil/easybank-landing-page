import { Button } from "./Button";

import logo from "../assets/logo.svg";
import { NavLink } from "./NavLink";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/",
  },
  {
    name: "Contact",
    href: "/",
  },
  {
    name: "Blog",
    href: "/",
  },
  {
    name: "Careers",
    href: "/",
  },
];

export const Header = () => {
  return (
    <header className="h-[80px] flex flex-row items-center px-[165px]">
      <nav className="flex flex-row justify-between w-full items-center">
        <img src={logo} alt="Easybank Logo" />
        <ul className="list-none flex flex-row justify-center gap-[30px] text-themeGrey">
          {links.map((link) => (
            <NavLink key={link.name}>{link.name}</NavLink>
          ))}
        </ul>
        <Button>Request Invite</Button>
      </nav>
    </header>
  );
};
