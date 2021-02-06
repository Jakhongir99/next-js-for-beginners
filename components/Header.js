import Link from "next/link";
//import Image from "next/image";
const Header = () => {
  return (
    <header>
      <h3 className="name">Jakhongir</h3>
      <ul>
        <li>
          <Link href="/">
            <a> HOME </a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/about">
            <a> ABOUT </a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/services">
            <a> SERVICES </a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/users">
            <a> USERS </a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
