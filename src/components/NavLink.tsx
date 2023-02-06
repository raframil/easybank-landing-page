interface Props {
  children: React.ReactNode;
}

export const NavLink = ({ children }: Props) => {
  return (
    <li className="hover:border-b-themeGreen border-transparent border-4 transition-all">
      <a href="/">{children}</a>
    </li>
  );
};
