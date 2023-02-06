import { Button } from "./Button";

export const Header = () => {
  return (
    <header className="h-[80px] flex flex-row items-center">
      <nav className="flex flex-row justify-between w-full">
        <ul className="list-none flex flex-row justify-center gap-[30px] text-themeGrey">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
        </ul>

        <Button />
      </nav>
    </header>
  );
};
