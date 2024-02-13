import HeaderNavItem from "./HeaderNavItem";

function HeaderNav() {
  return (
    <nav className="ml-20">
      <ul className="flex gap-x-4">
        <HeaderNavItem href="/communities" label="BRANDS" />
      </ul>
    </nav>
  );
}

export default HeaderNav;
